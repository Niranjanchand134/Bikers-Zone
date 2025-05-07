import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {showSuccessToast} from './Toastify.Util';
import Input from 'antd/es/input/Input';
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

 

const Register = () => {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save data in local storage
        localStorage.setItem('userData', JSON.stringify(userData));
        showSuccessToast('Register successfully')
    };

    return (
        <>
            <Header />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="username">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    id="username"
                                    placeholder="Enter Your Name"
                                    value={userData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="name@example.com"
                                    value={userData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="my-3">
                                <label htmlFor="password">Password</label>
                                    <Input.Password
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        value={userData.password}
                                        onChange={handleChange}
                                        iconRender={(visible) => (visible ? <EyeTwoTone className="absolute right-3 cursor-pointer" /> : <EyeInvisibleOutlined className="absolute right-3 cursor-pointer" />)}
                                        required
                                    />
                            </div>

                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link></p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
