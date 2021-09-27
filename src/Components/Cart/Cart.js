import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import cartStyle from './Cart.css';



const Cart = (props) => {
    const item =props.item;
    console.log(item);
    return (
        <div className="card-style">
         <h2>This is Cart</h2>
         <p>Cart Number : </p>
         <p>Total Price : {} </p>
        </div>
    );
};

export default Cart;