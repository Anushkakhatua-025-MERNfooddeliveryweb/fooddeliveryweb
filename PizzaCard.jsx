// src/components/PizzaCard.jsx
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const PizzaCard = ({ pizza }) => {
    const navigate = useNavigate();

    const handleSelect = () => {
        navigate(`/addons`, { state: { pizza } });
    };

    return (
        <div style={{ 
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            padding: '1rem',
            textAlign: 'center',
            margin: '1rem',
            transition: 'transform 0.2s',
            width: '300px', /* Adjust the width as needed */
        }}>
            <img 
                src={pizza.image} 
                alt={pizza.name} 
                style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '200px', /* Adjust the max height as needed */
                    borderRadius: '10px',
                    objectFit: 'cover',
                }}
            />
            <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{pizza.name}</h3>
            <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '1rem' }}>Rs{pizza.price.toFixed(2)}</p>
            <Button 
                size="large" 
                onClick={handleSelect} 
                style={{ 
                    backgroundColor: '#ff5733',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                }}
            >
                Select
            </Button>
        </div>
    );
};

export default PizzaCard;
