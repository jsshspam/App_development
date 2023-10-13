import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './product'
import "./shop.css";
import { Bar } from "../Navbar";
import Footer from '../Footer';
export const Shop = () => {
    return (
        <>
            <Bar/>
        <div className="shop">
            <div className="shopTitle">
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
        <Footer/>
        </>
    )
}
