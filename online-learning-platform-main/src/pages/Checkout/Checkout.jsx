
import Razorpay from 'react-razorpay';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { useHistory } from 'react-router-dom'; // Import useHistory for navigation

const Checkout = () => {
  const navigate = useNavigate();



  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    email: '',
    card: '',
    expiry: '',
    cvv: '',
    amount: 0, // Add the 'amount' field to your formData with an initial value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data or make an API request here

    const form = e.target;
    const name = form.name.value;
    toast.success('Congratulations,You have Successfully Registered for the Course !');

    setFormData({
      name: '',
      address: '',
      city: '',
      zip: '',
      email: '',
      card: '',
      expiry: '',
      cvv: '',
      amount: 0, // Reset the 'amount' field
    });
  };

  const handlePayment = () => {


    // Create a script element for the Razorpay button
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_Mra8wJWJzjIZ6M');
    script.async = true;

    // Append the script to the container
    const container = document.getElementById('razorpay-button-container');
    container.appendChild(script);

    < form />


  };


  const handleRegistration = () => {
    // Prepare the registration data
    const registrationData = {
      name: formData.name,
      email: formData.email,
      // Other registration data
    };

    // Make an API request to send the registration email
    fetch('http://localhost:3000/api/send-registration-email', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    })
      .then((response) => {
        if (response.ok) {
          // Registration was successful, you can show a success message
          alert('Registration successful! Email sent.');
        } else {
          // Handle registration failure
          alert('Registration failed.');
        }
      })
      .catch((error) => {
        // Handle network or API request errors
        console.error('Error:', error);
      });
  };


  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mt-4 mb-8">Checkout</h2>
      <div className="flex">
        <div className="w-2/3 mr-4">
          <h3 className="text-xl font-semibold">Course Registration Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded-md py-2 px-3" required />
            </div>


            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">Address:</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full border rounded-md py-2 px-3" required />
            </div>

            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700">City:</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full border rounded-md py-2 px-3" required />
            </div>

            <div className="mb-4">
              <label htmlFor="zip" className="block text-gray-700">ZIP Code:</label>
              <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} className="w-full border rounded-md py-2 px-3" required />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md py-2 px-3" required />
            </div>


            <center>
              {/* <button onClick={handleRegistration}>Register</button> */}
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6 hover:bg-blue-600">Confirm Registration</button>
            </center> </form>
        </div>
        <div className="w-1/3">
          <h3 className="text-xl font-semibold">Payment Information</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="card" className="block text-gray-700">Credit Card Number:</label>
              <input type="text" id="card" name="card" value={formData.card} onChange={handleChange} className="w-full border rounded-md py-2 px-3" required />
            </div>

            <div className="mb-4">
              <label htmlFor="expiry" className="block text-gray-700">Expiry Date:</label>
              <input type="text" id="expiry" name="expiry" value={formData.expiry} onChange={handleChange} className="w-full border rounded-md py-2 px-3" required />
            </div>

            <div className="mb-4">
              <label htmlFor="cvv" className="block text-gray-700">CVV (3 or 4 digits):</label>
              <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} className="w-full border rounded-md py-2 px-3" required />
            </div>

          </form>

          <center>

          </center>
          <div id="razorpay-button-container">
          </div>
          <button onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6 hover:bg-blue-600">Request Payment Button</button>


        </div>
      </div>
    </div>
  );
};

export default Checkout;
