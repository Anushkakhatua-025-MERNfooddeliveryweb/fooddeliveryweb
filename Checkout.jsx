// src/pages/Checkout.jsx
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "../components/Button";
import './Checkout.css';

const Checkout = () => {
    const { register, handleSubmit, watch } = useForm();
    const location = useLocation();
    const { pizza, addOns } = location.state;
    const selectedPaymentMethod = watch("paymentMethod");

    const onSubmit = (data) => {
        toast.success("Order placed successfully!");
    };

    const totalAddOnAmount = addOns.reduce((sum, addOn) => sum + addOn.price, 0);
    const totalAmount = pizza.price + totalAddOnAmount;

    return (
        <div className="checkout-container">
            <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Checkout</h2>
                <div className="form-group">
                    <label>Name</label>
                    <input {...register("name")} type="text" />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input {...register("phone")} type="text" />
                </div>
                <div className="form-group">
                    <label>Payment Method</label>
                    <select {...register("paymentMethod")}>
                        <option value="creditCard">Credit Card</option>
                        <option value="cashOnDelivery">Cash on Delivery</option>
                        <option value="upi">UPI</option>
                    </select>
                </div>
                {selectedPaymentMethod === "creditCard" && (
                    <div className="form-group">
                        <label>Credit Card</label>
                        <input {...register("creditCard")} type="text" />
                    </div>
                )}
                {selectedPaymentMethod === "upi" && (
                    <div className="form-group">
                        <label>UPI ID</label>
                        <input {...register("upiId")} type="text" />
                    </div>
                )}
                <div className="total-amount">
                    <h3>Total Amount: Rs{totalAmount.toFixed(2)}</h3>
                </div>
                <Button size="large">Place Order</Button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Checkout;
