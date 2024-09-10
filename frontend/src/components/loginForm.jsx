import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const validate = () => {
    let errors = {};
    if (!email.trim()) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const url = 'http://localhost:7070/users/signin'; // Replace with your API URL
        const response = await axios.post(url, {
          email,
          password
        });

        const jwtToken = response.data.jwtToken;
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('user', JSON.stringify(response.data));
        history.push('/userportal');
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Handle invalid credentials
          setErrors({ submit: 'Invalid email or password. Please try again.' });
        } else {
          setErrors({ submit: 'An error occurred. Please try again.' });
        }
        console.error('Error:', error);
      } finally {
        console.log('Final');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleSignUpClick = () => {
    history.push("/signup"); // Redirect to the sign-up page
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLoginSubmit} style={styles.form}>
        <h2 style={styles.title}>Login</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>
        {errors.submit && <p style={styles.error}>{errors.submit}</p>}
        <button type="submit" style={styles.button}>
          Sign In
        </button>
        <button type="button" onClick={handleSignUpClick} style={styles.signUpButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#FFF3C7",
  },
  form: {

    backgroundColor: "#FEC7B4",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px"

    
  },
  title: {
    textAlign: "center",
    color: "#F7418F",
    marginBottom: "20px",
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

  
  signUpButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#F7418F",
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

export default LoginForm;
