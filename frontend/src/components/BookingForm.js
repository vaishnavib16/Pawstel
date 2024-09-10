import React, { useState } from 'react';
import axios from 'axios';

import './BookingForm.css'; // Import the CSS file

const BookingForm = () => {
    // State hooks for form fields
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [petId, setPetId] = useState('');
    const [services, setServices] = useState('');

    // State hooks for error messages
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // List of services for the dropdown
    const servicesList = [
        'GROOMING',
        'SPA',
        'HAIRCUT',
        'DOG_WALKING',
        'HOSTEL_BOOKING'
    ];

    // Validate form fields
    const validate = () => {
        const errors = {};
        if (!startDate) errors.startDate = 'Start date is required';
        if (!endDate) errors.endDate = 'End date is required';
        if (!petId) errors.petId = 'Pet ID is required';
        if (!services) errors.services = 'Service is required';

        // Ensure end date is not before start date
        if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
            errors.dateRange = 'End date must be after start date';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            startDate,
            endDate,
            petId,
            services: [services]
        };
        // Clear previous messages and validate form
        setSuccessMessage('');
        setErrors({});
        const formErrors = validate();


        if (formErrors) {
            console.log("services", services)
            setLoading(true);
            try {
                const url = 'http://localhost:7070/bookings'; // Replace with your API URL
                const response = await axios.post(url, formData, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                }
                );
                // const url = 'http://localhost:7070/bookings'; // Replace with your API URL
                // const response = await axios.post(url, formData);
                setSuccessMessage('Submission successful!');
                // Optionally handle the response here
                setStartDate('');
                setEndDate('');
                setPetId('');
                setServices('');

                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);

            } catch (error) {
                setErrors({ submit: 'An error occurred. Please try again.' });
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        }
    };


    return (
        <>
        <div className="title-name" style={{color:  '#F7418F'}}>
                    <h1 class="form-title">Add A Booking For Your Pet</h1>
                </div>
            {successMessage && successMessage}
            {errors && errors.submit}
            {loading && <>Loading.......</>}
            <form onSubmit={handleSubmit} className="booking-form">
                <div>
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    {errors.startDate && <span className="error">{errors.startDate}</span>}
                </div>

                <div>
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    {errors.endDate && <span className="error">{errors.endDate}</span>}
                    {errors.dateRange && <span className="error">{errors.dateRange}</span>}
                </div>

                <div>
                    <label htmlFor="petId">Pet ID:</label>
                    <input
                        type="text"
                        id="petId"
                        value={petId}
                        onChange={(e) => setPetId(e.target.value)}
                    />
                    {errors.petId && <span className="error">{errors.petId}</span>}
                </div>

                <div>
                    <label htmlFor="services">Service:</label>
                    <select
                        id="services"
                        value={services}
                        onChange={(e) => setServices(e.target.value)}
                    >
                        <option value="" disabled>Select a services</option>
                        {servicesList.map((srv, index) => (
                            <option key={index} value={srv}>{srv}</option>
                        ))}
                    </select>
                    {errors.services && <span className="error">{errors.services}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default BookingForm;
