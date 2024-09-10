import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import serviceData from '../components/servicedata.json';
import Navbar8 from './navbar8';


const ServicePage = () => {
  const history = useHistory();
  const location = useLocation();
  const { state } = location;

  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const service = serviceData.find(service => service.id == state.state.id);
    if (service) {
      setSelectedService(service);
    }
  }, [state.state.id]);

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <div>
      <Navbar8 />
      <div style={styles.pageContainer}>
        <button style={styles.backButton} onClick={handleBackClick}>← Back</button>
        {selectedService && (
          <div style={styles.serviceContainer}>
            <h1 style={styles.serviceTitle}>{selectedService.title}</h1>
            <p style={styles.serviceInfo}>{selectedService.info}</p>

            <h2 style={styles.serviceSubheading}>Highlights</h2>
            <ul style={styles.serviceList}>
              {selectedService.highlights.map((highlight, index) => (
                <li key={index} style={styles.serviceListItem}>{highlight}</li>
              ))}
            </ul>

            <h2 style={styles.serviceSubheading}>Benefits</h2>
            <ul style={styles.serviceList}>
              {selectedService.benefits.map((benefit, index) => (
                <li key={index} style={styles.serviceListItem}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    minHeight: '100vh',
    backgroundColor: '#FFF3C7', // Apply the background color to the entire page
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px', // Add padding to give some space around the content
  },
  backButton: {
    backgroundColor: '#FC819E !important',
    color: '#FFF !important',
    padding: '10px 20px !important' ,
    border: 'none !important',
    borderRadius: '4px !important',
    cursor: 'pointer !important',
    fontSize: '1rem !important',
    transition: 'background-color 0.3s !important',
    position: 'absolute !important',
    left: '20px !important',
    zIndex: 10  , // Ensure the button stays on top of the content
  },
  serviceContainer: {
    backgroundColor: '#FFF', // A clean, white background for the content
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '100%',
    marginTop: '60px', // Add some space between the button and content
  },
  serviceTitle: {
    fontSize: '2rem',
    color: '#F7418F',
    marginBottom: '20px',
    textAlign: 'center',
  },
  serviceInfo: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  serviceSubheading: {
    fontSize: '1.5rem',
    color: '#F7418F',
    marginTop: '20px',
    marginBottom: '10px',
  },
  serviceList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    margin: '10px 0',
  },
  serviceListItem: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '8px',
    transition: 'color 0.3s, font-weight 0.3s',
    ':hover': {
      color: '#F7418F',
      fontWeight: 'bold',
    },
  },

  // Responsive styles
  '@media (max-width: 768px)': {
    backButton: {
      fontSize: '0.9rem',
      padding: '8px 16px',
    },
    serviceTitle: {
      fontSize: '1.5rem',
    },
    serviceSubheading: {
      fontSize: '1.2rem',
    },
    serviceListItem: {
      fontSize: '0.9rem',
    },
  },
  '@media (max-width: 480px)': {
    backButton: {
      fontSize: '0.8rem',
      padding: '6px 12px',
    },
    serviceTitle: {
      fontSize: '1.3rem',
    },
    serviceSubheading: {
      fontSize: '1rem',
    },
    serviceListItem: {
      fontSize: '0.8rem',
    },
  },
};

export default ServicePage;
