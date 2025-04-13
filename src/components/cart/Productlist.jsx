import React, {useEffect, useState} from 'react';
import { useCart } from './CartContext';

const products = [
    { id: 1, name: 'Book', price: 10 },
    { id: 2, name: 'Pen', price: 2 },
    { id: 3, name: 'Notebook', price: 5 },
];

const ProductList = () => {
    const { addToCart } = useCart();
    const  [loadmed, setloadmed]= useState("Azithral 500 Tablet");

    const GetMedicine = async () => {
        try {
            console.log(loadmed)
            const { data } = await axios.post(`/search/pagesearch`, {
                query: loadmed
            })}
catch(err){  console.log(err)}
}


    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <span>{product.name}</span>
                        <span>${product.price}</span>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default ProductList;
