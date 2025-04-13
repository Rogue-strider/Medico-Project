import React, { createContext, useState, useContext,useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);





export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([]);



    const addToCart =  (product) => {
        // try{
        //    await axios.post('http://localhost:3000/api/cart',{
        //     name: product.name,
        //     price: product.price,
        //     quantity:1
        //   });
        //   fetchCart();
        // }
        // catch(err){
        //   console.log("error adding to cart",err)
        // }

        setCart((prevCart) => {

            const existing = prevCart.find(item => item.id === product.id);
            if (existing) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });

    };



    const DecreaseQuantity = (id)=>{
        setCart(prevCart => prevCart.map(item=>
            item.id=== id  ? {...item, quantity: item.quantity +1}: item
        ))

    }
    const IncreaseQuantity = (id)=>{
        setCart(prevCart => prevCart.map(item=>
            item.id=== id && item.quantity >1 ? {...item, quantity: item.quantity -1}: item
        ))

    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, IncreaseQuantity, DecreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );



}