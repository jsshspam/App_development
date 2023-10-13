import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../Assets/acss/Payment.css";
import { ShopContext } from "../context/shop-context.jsx";
import { Bar } from './Navbar';
// import { PRODUCTS } from "../products.js";
// import { CartItem } from './cart/cart-item.jsx';
export const PaymentPage = () => {
    // const navigate = useNavigate();
    const [paymentStatus, setPaymentStatus] = useState('Waiting');
    const location = useLocation();
    //   const queryParams = new URLSearchParams(location.search);
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    // const gotohome = () => {
    //     navigate('/Home');
    // };
    useEffect(() => {

        setTimeout(() => {
            setPaymentStatus('Successful');
        }, 5000);
    }, []);
    const handlePrint = () => {
        window.print();
    };
    const queryParams = new URLSearchParams(location.search);
    const phonenumber = queryParams.get('phonenumber')
    const name = queryParams.get('name')
    const email = queryParams.get('email')
    const address = queryParams.get('address')

    return (
        <>
        <Bar/>
        <div className="payment-page">

            <h1>&nbsp;Payment Status</h1>
            <button className='btn btn-dark' onClick={handlePrint}>Print Page</button>
            <div className='pay'>
                {paymentStatus === 'Waiting' ? (
                    <>
                        <p>Payment Waiting...</p>
                    </>
                ) : (
                    <>

                        <div className='pass' >
                            <p>Payment Details</p>
                            {/* <div className="cartItems">
                                {PRODUCTS.map((product) => {
                                    if (cartItems[product.id] !== 0) {
                                        return <CartItem data={product} />;
                                    }
                                })}
                            </div> */}
                            <div>Name: {name}</div>
                            <div>E-mail: {email}</div>
                            <div>PhoneNumber: {phonenumber}</div>
                            <div>Address: {address}</div>
                            <div>Price: Rs. {totalAmount}</div>
                            <br></br>
                        </div>
                        <div className='happy'>
                            Thanks for the Purchase!
                        </div>
                        {/* <button onClick={gotohome}>Go To Home</button> */}
                    </>
                )}
            </div>

        </div>
        </>
    );
}
