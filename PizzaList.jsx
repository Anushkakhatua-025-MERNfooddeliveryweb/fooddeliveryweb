import React, { useState, useEffect } from "react";
import PizzaCard from "./PizzaCard";
import './PizzaList.css';

const PizzaList = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/pizzas") 
        .then(response => response.json())
        .then(data => {
            setPizzas(data);
        })
        .catch(error => console.error("Error fetching pizzas", error));
    }, []);

    return (
        <div className="pizza-list">
            {pizzas.map(pizza => (
                <PizzaCard key={pizza._id} pizza={pizza} />
            ))}
        </div>
    );
};

export default PizzaList;
