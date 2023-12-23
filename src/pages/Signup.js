// pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Import the CSS file for styling

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/signup/', formData);
            console.log('Signup successful:', response.data);
            // Add any additional logic (e.g., redirect to login page) here
        } catch (error) {
            console.error('Signup failed:', error.response.data);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-header">
                <h2>Signup</h2>
            </div>
            <form onSubmit={handleSubmit} className="signup-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
