import React, { useEffect, useState } from 'react';
import './PetForm.css';
import axios from 'axios';

const PetForm = () => {
    const [formData, setFormData] = useState({
        petName: '',
        category: '',
        age: '',
        id: '',  // Set this as an empty string initially
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        setFormData(prevFormData => ({
            ...prevFormData,
            id: String(user.id)  // Ensure id is stored as a string
        }));
    }, []);

    const validate = () => {
        const errors = {};

        if (!formData.petName.trim()) {
            errors.petName = 'Pet Name is required';
        }

        if (!formData.category.trim()) {
            errors.category = 'Category is required';
        }

        if (!formData.age) {
            errors.age = 'Age is required';
        } else if (formData.age <= 0) {
            errors.age = 'Age must be a positive number';
        }

        if (!formData.id) {
            errors.id = 'User ID is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccessMessage('');
        setErrors({});
        const formErrors = validate();

        if (formErrors) {
            setLoading(true);
            try {
                const url = 'http://localhost:7070/pets';
                const response = await axios.post(url, formData, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                setSuccessMessage('Submission successful!');
                setFormData({
                    petName: '',
                    category: '',
                    age: '',
                    id: String(formData.id)  // Keep id as string after reset
                });

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
            <div className="title-name" style={{color: '#F7418F'}}>
                <h1 className="form-title">Add your pet information</h1>
            </div>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errors.submit && <div className="error-message">{errors.submit}</div>}
            {loading && <div>Loading.......</div>}
            {!loading && <form onSubmit={handleSubmit} className="pet-form">
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input
                        type="text"
                        name="petName"
                        value={formData.petName}
                        onChange={handleChange}
                        className={errors.petName ? 'input-error' : ''}
                    />
                    {errors.petName && <span className="error">{errors.petName}</span>}
                </div>

                <div className="form-group">
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={errors.category ? 'input-error' : ''}
                    />
                    {errors.category && <span className="error">{errors.category}</span>}
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className={errors.age ? 'input-error' : ''}
                    />
                    {errors.age && <span className="error">{errors.age}</span>}
                </div>

                <div className="form-group">
                    <label>User ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        className={errors.id ? 'input-error' : ''}
                        disabled
                    />
                    {errors.id && <span className="error">{errors.id}</span>}
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>}
        </>
    );
};

export default PetForm;
