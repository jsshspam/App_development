// import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
//     from 'react-icons/bs'
import React from 'react';
import Footer from "./Footer";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/userSlice';
import '../Assets/acss/Dashboard.css'; // Import your dashboard CSS for styling
import { selectUser } from '../redux/userSlice';
export const Dashboard = () => {
    // const user = useSelector((state) => state.user.email);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    console.log(user)
    const handleLogout = () => {
        // Dispatch a logout action
        dispatch(logout());
        // Redirect to the login page (you can use react-router-dom for this)
        navigate('/');
    };
     const u_email=localStorage.getItem('xemail');
    return (
        <>
            <div className="dashboard-container">
                <div className="sidebar">
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        {/* <li><Link to="/application">Wishlist</Link></li>
                    <li><Link to="/application">Help center</Link></li> */}
                    </ul>
                </div>
                <div className="content">
                    <header>
                        <div className="top-nav">
                            <div className="welcome">Welcome, {u_email}</div>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    </header>
                    <main>
                        <h1>Welcome to Your Dashboard</h1>
                        <div className='main-cards'>
                            <div className='card'>
                                <div className='card-inner'>
                                    <h3>PRODUCTS</h3>
                                    {/* <BsFillArchiveFill className='card_icon' /> */}
                                </div>
                                <h1>300</h1>
                            </div>
                            <div className='card'>
                                <div className='card-inner'>
                                    <h3>CATEGORIES</h3>
                                    {/* <BsFillGrid3X3GapFill className='card_icon' /> */}
                                </div>
                                <h1>12</h1>
                            </div>
                            <div className='card'>
                                <div className='card-inner'>
                                    <h3>REFERALS</h3>
                                    {/* <BsPeopleFill className='card_icon' /> */}
                                </div>
                                <h1>33</h1>
                            </div>
                            <div className='card'>
                                <div className='card-inner'>
                                    <h3>OFFERS</h3>
                                    {/* <BsFillBellFill className='card_icon' /> */}
                                </div>
                                <h1>42</h1>
                            </div>
                        </div>
                        <section className="orders">
                            <h2>Previous Orders</h2>
                            <ul className="order-list">
                                <li className="order">
                                    <div className="order-details">
                                        <h3>Order #132314</h3>
                                        <p>Date: January 15, 2020</p>
                                    </div>
                                    <div className="order-total">
                                        <p>Total: $100.00</p>
                                    </div>
                                </li>
                                <li className="order">
                                    <div className="order-details">
                                        <h3>Order #8288729</h3>
                                        <p>Date: May 3, 2021</p>
                                    </div>
                                    <div className="order-total">
                                        <p>Total: $50.10</p>
                                    </div>
                                </li>
                                <li className="order">
                                    <div className="order-details">
                                        <h3>Order #5632567</h3>
                                        <p>Date: December 20, 2022</p>
                                    </div>
                                    <div className="order-total">
                                        <p>Total: $1050.60</p>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
}

