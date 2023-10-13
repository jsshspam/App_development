import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Register.css';
// import { Bar } from "./Navbar";
export const Register = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState("");
    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
            setMessage("Email is Valid");
            toast.success('Sucessfully registered!');
        } else if (!regEx.test(email) && email !== "") {
            setMessage("Email is Not Valid");
        } else {
            setMessage("");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, name);

    }
    // const err = () => {
    //     toast.error('Enter the credentials');
    // }
    const handleRoute = () => {
        nav('/Login')
    }
    return (
        <>
            {/* <Bar /> */}
            <div className="bd">
                <div class="login-box">
                    <h1 className="head">REGISTER</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="user-box">
                            <label htmlFor="name"></label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="your name" id="name" name="name" autoFocus required />
                        </div>
                        <div class="user-box">
                            <label htmlFor="email"></label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" id="email" name="email" required />
                        </div>
                        <div class="user-box">
                            <label htmlFor="password"></label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" required />
                        </div>
                        <div className="lbutton"><button type="submit" className="button" onClick={emailValidation} disabled={!password}>Register</button></div>
                        <p className="message">{message}</p>
                    </form>
                    <h5>Already have an account?<span className="text-link" onClick={handleRoute}>Log in here.</span></h5>
                </div>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L10.4,272C20.9,256,42,224,63,213.3C83.5,203,104,213,125,197.3C146.1,181,167,139,188,138.7C208.7,139,230,181,250,197.3C271.3,213,292,203,313,202.7C333.9,203,355,213,376,202.7C396.5,192,417,160,438,133.3C459.1,107,480,85,501,85.3C521.7,85,543,107,563,138.7C584.3,171,605,213,626,234.7C647,256,668,256,689,229.3C709.6,203,730,149,751,112C772.2,75,793,53,814,85.3C834.8,117,856,203,877,224C897.4,245,918,203,939,165.3C960,128,981,96,1002,101.3C1022.6,107,1043,149,1064,160C1085.2,171,1106,149,1127,138.7C1147.8,128,1169,128,1190,154.7C1210.4,181,1231,235,1252,250.7C1273,267,1294,245,1315,218.7C1335.7,192,1357,160,1377,138.7C1398.3,117,1419,107,1430,101.3L1440,96L1440,0L1429.6,0C1419.1,0,1398,0,1377,0C1356.5,0,1336,0,1315,0C1293.9,0,1273,0,1252,0C1231.3,0,1210,0,1190,0C1168.7,0,1148,0,1127,0C1106.1,0,1085,0,1064,0C1043.5,0,1023,0,1002,0C980.9,0,960,0,939,0C918.3,0,897,0,877,0C855.7,0,835,0,814,0C793,0,772,0,751,0C730.4,0,710,0,689,0C667.8,0,647,0,626,0C605.2,0,584,0,563,0C542.6,0,522,0,501,0C480,0,459,0,438,0C417.4,0,397,0,376,0C354.8,0,334,0,313,0C292.2,0,271,0,250,0C229.6,0,209,0,188,0C167,0,146,0,125,0C104.3,0,83,0,63,0C41.7,0,21,0,10,0L0,0Z"></path></svg>
            </div>
        </>
    )
}