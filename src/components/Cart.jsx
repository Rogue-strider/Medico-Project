import React from 'react'
import { CartProvider } from './Cart/CartContext'
import Cartnew from './Cart/Cartnew.jsx'
import ProductList from './Cart/Productlist'

const Cart = () => {
  return (
      <CartProvider>
        <div className="App">
          <h1>Simple React Cart</h1>
          <ProductList />
          <Cartnew />
        </div>
      </CartProvider>
  )
}

export default Cart