import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
// import { Bar } from "./Navbar";
export const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    console.log(email)
    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
            setMessage("Email is Valid");
            toast.success('Login Sucessful');
            dispatch(login({
                email: email
            }))
            nav('/Home');
        } else if (!regEx.test(email) && email !== "") {
            setMessage("Email is Not Valid");
        } else {
            setMessage("");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
    const handleRoute = () => {
        nav('/Register')
    }
    // dispatch(setEmail(email));
    return (
        <>
            {/* <Bar /> */}
            <div className="bd">
                <div class="login-box">
                    <form onSubmit={handleSubmit}>
                        <h1 className="head">LOGIN</h1>
                        <div class="user-box">
                            <label htmlFor="email"></label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" id="email" name="email" autoFocus required />
                        </div>
                        <div class="user-box">
                            <label htmlFor="password"></label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" required />
                        </div>
                        <button type="submit" onClick={emailValidation} className="button" >Log In</button>
                        <p className="message">{message}</p>
                    </form>
                    <h5>Don't have an account? <span className="text-link" onClick={handleRoute}>Register here.</span></h5>
                </div>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,96L24,122.7C48,149,96,203,144,208C192,213,240,171,288,144C336,117,384,107,432,133.3C480,160,528,224,576,234.7C624,245,672,203,720,197.3C768,192,816,224,864,224C912,224,960,192,1008,154.7C1056,117,1104,75,1152,101.3C1200,128,1248,224,1296,240C1344,256,1392,192,1416,160L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
            </div>
        </>
    )
}
