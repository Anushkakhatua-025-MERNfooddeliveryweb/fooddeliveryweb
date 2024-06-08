// Login.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "../components/Button";
import './Auth.css'; // Import custom CSS for styling

const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                toast.success("Login successful!");
                navigate("/");
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error("Error logging in:", error);
            toast.error("An error occurred while logging in. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email</label>
                    <input {...register("email")} type="email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input {...register("password")} type="password" />
                </div>
                <Button size="large" disabled={loading}>{loading ? "Logging in..." : "Login"}</Button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
