import React from 'react';
import { Card } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import cartStyle from './Food.css';

const Food = (props) => {
    
    const{name,price,quality,calories,image}=props.item;
    return (
        <div className='main-body'>
        <div className="cart-body">
             <div className="cart-style">
                <Card>
                     <img className="img-style" src={image} alt="" />
                     <h4>{name}</h4>
                     <h4>Price : {price}</h4>
                     <h5>Calories : {calories}</h5>
                     <p>Quality : {quality}</p>
                    <Card.Body>
                    <button>Add To Cart</button>
                    </Card.Body>
                </Card>
                </div>
        </div>
        
        
    </div>
    );
};

export default Food;