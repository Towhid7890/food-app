import React, { useEffect, useState } from 'react';
import Items from '../../fake-data/data.json'
import Cart from '../Cart/Cart';
import Food from '../Food/Food';

const Item = () => {
    const [foods, setFood] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setFood(Items);
    }, [])

    const handleAddFood = (item) => {
        const newCart=[...cart,item];
        console.log(item);
         //using spreadOperator for obtaining cart element
        setCart(newCart);
    }
    return (
        <div>
           
           <div className="details-container">
                    {
                        foods.map(item => <Food handleAddFood={handleAddFood} item={item} ></Food>)
                        
                    }
            </div>
            <div className="carts-container ">
                {/* cart component  */}
                <Cart item={cart}></Cart>
            </div>
        </div>
    );
};

export default Item;