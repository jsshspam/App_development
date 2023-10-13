import React, { useState } from 'react';
import '../Assets/acss/Form.css';
import { Bar } from "./Navbar";
import Footer from './Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../Service/Api';

function Form() {
    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        address: '',
        email: '',
        phone: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };
    console.log(formData);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await addProduct(formData);

            console.log(res.data);

            navigate('/PaymentPage');


        } catch (error) {
            // Handle any potential errors here
            console.error("Error during registration:", error);
        }
        const queryParams = new URLSearchParams();
        queryParams.append('phonenumber', formData.phone);
        queryParams.append('address', formData.address);
        queryParams.append('name', formData.name);
        queryParams.append('email', formData.email);
        navigate(`/PaymentPage?${queryParams.toString()}`)

    };

    return (
        <>
            <Bar />
            <div className='body1'>
                <main className='main1'>
                    <div>
                        <h1 className='formel'>Billing Information</h1>
                        <p id="description">Please provide the following information:</p>
                    </div>

                    <form onSubmit={handleSubmit} className='formjs'>

                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="form-input"
                        />

                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            className="form-input"
                        />

                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="form-input"
                        />

                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="form-input"
                        />


                        <input
                            type="submit"
                            value="Submit"
                            className="button-29"
                        />
                    </form>

                </main>
            </div>
            <Footer />
        </>
    );
}

export default Form;
