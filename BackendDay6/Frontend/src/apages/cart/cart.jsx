import React, { useContext } from 'react';
import { PRODUCTS } from "../../products";
import { CartItem } from './cart-item';
import { ShopContext } from "../../context/shop-context";
import './cart.css'
import { useNavigate } from 'react-router-dom';
import { Bar } from '../Navbar';
import Footer from '../Footer';
export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const nav = useNavigate()
    return (
        <>
            <Bar />
            <div className="cart">
                <div>
                    <h1>Your Cart Items</h1>
                </div>
                <div className="cartItems">
                    {PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} />;
                        }
                    })}
                </div>
                {totalAmount > 0 ? (
                    <div className="checkout">
                        <p>SubTotal: ₹{totalAmount}</p>
                        <button onClick={() => nav('/shop')}>Continue</button>
                        <button onClick={() => nav('/Form')}>Checkout</button>
                    </div>
                ) : (
                    <h1>Your cart is empty</h1>
                )}
            </div>
            <Footer />
        </>
    );
};
