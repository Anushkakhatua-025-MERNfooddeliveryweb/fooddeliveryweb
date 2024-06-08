// src/components/elements/Button.jsx
import './Button.css';

const Button = ({ children, size, ...props }) => {
    return (
        <button className={`btn btn-${size}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
