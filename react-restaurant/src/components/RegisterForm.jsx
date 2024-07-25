import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/register', formData);
      console.log(response.data); // Handle success response
      // Optionally, redirect or show success message
    } catch (error) {
      console.error('Error registering user:', error.response.data); // Handle error response
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="text" name="role" placeholder="Role" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
