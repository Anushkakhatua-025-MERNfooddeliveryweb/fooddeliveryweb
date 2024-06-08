// src/pages/AddOns.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import './AddOns.css';

const addOnsList = [
    { id: 1, name: "Extra Cheese", price: 2 },
    { id: 2, name: "Coke", price: 1.5 }
];

const AddOns = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pizza } = location.state;
    const [selectedAddOns, setSelectedAddOns] = useState([]);

    const handleAddOnChange = (addOn) => {
        setSelectedAddOns(prevState => {
            if (prevState.includes(addOn)) {
                return prevState.filter(item => item !== addOn);
            } else {
                return [...prevState, addOn];
            }
        });
    };

    const handleCheckout = () => {
        navigate(`/checkout`, { state: { pizza, addOns: selectedAddOns } });
    };

    return (
        <div className="addons-container">
            <h2>Select Add-Ons for {pizza.name}</h2>
            <div className="addons-list">
                {addOnsList.map(addOn => (
                    <div key={addOn.id} className="addon-item">
                        <input
                            type="checkbox"
                            id={`addon-${addOn.id}`}
                            onChange={() => handleAddOnChange(addOn)}
                        />
                        <label htmlFor={`addon-${addOn.id}`}>{addOn.name} (+Rs{addOn.price.toFixed(2)})</label>
                    </div>
                ))}
            </div>
            <Button size="large" onClick={handleCheckout}>Checkout</Button>
        </div>
    );
};

export default AddOns;
