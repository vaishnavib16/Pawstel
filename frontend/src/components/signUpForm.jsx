import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username:"",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address:"",
    password: "",
    confirmPassword: "",
    isChecked: false,
  });

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const validate = () => {
    let errors = {};

    if (!formData.username.trim()) errors.username = "username name is required";
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.password.trim()) errors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    if (!formData.isChecked)
      errors.isChecked = "You must confirm that the data is true";

    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const url = 'http://localhost:7070/users/signup'; // Replace with your API URL
        const response = await axios.post(url, {
          username: formData.username,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          password: formData.password,
        });
        const jwtToken = response.data.jwt;
        localStorage.setItem('token', jwtToken);
        history.push('/login');
      } catch (error) {
        setErrors({ submit: 'An error occurred. Please try again.' });
        console.error('Error:', error);
      } finally {
        console.log('Final')
      }
    } else {
      setErrors(validationErrors);
    }
    //   console.log("User registered successfully!");
    //   history.push("/login");
    // } else {
    //   setErrors(validationErrors);
    // }
  };


  // const handleSignUpClick = () => {
  //   console.log("User registered successfully!");
  //   history.push("/login"); // Redirect to the sign-up page
  // };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.username && <p style={styles.error}>{errors.username}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.phone && <p style={styles.error}>{errors.phone}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.country && <p style={styles.error}>{errors.address}</p>}
        </div>
        
        
        
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Re-enter Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.confirmPassword && <p style={styles.error}>{errors.confirmPassword}</p>}
        </div>
        <div style={styles.checkboxGroup}>
          <input
            type="checkbox"
            name="isChecked"
            checked={formData.isChecked}
            onChange={handleChange}
            style={styles.checkbox}
          />
          <label style={styles.checkboxLabel}>
            I confirm that the above information is true
          </label>
          {errors.isChecked && <p style={styles.error}>{errors.isChecked}</p>}
        </div>
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#FFF3C7",
    padding: "20px", // Add padding to ensure the content doesn't touch the edges
  },
  title: {
    color: "#F7418F",
    marginBottom: "20px",
  },
  form: {
    backgroundColor: "#FEC7B4",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#F7418F",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #FC819E",
  },
  checkboxGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  checkbox: {
    marginRight: "10px",
  },
  checkboxLabel: {
    color: "#F7418F",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#FC819E",
    color: "#FFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
};

export default SignUpForm;
