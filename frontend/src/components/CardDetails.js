import React from 'react';
import { useHistory } from 'react-router-dom';
import './CardDetails.css';
import grooming from '../images/grooming.jpg';
import spa from '../images/spa.jpg';
import haircut from '../images/haircut.jpg';
import dogwalk from '../images/dogwalk.jpg';
import hostel from '../images/hostel.jpg';

const imageMap = {
    "grooming.jpg": grooming,
    "spa.jpg": spa,
    "haircut.jpg": haircut,
    "dogwalk.jpg": dogwalk,
    "hostel.jpg": hostel
};

const CardDetails = ({ name, id, serviceData }) => {
    const history = useHistory();

    const handleCardClick = (id) => {
        const data = {
            id: id
        }
        history.push("/servicepage", { state: data });
    };

    return (
        <div className="card" onClick={() => handleCardClick(id)}>
            <img src={imageMap[serviceData.image]} alt={name} className="card-image" />
            <div className="card-name" style={{ marginBottom: '0' }}>{serviceData.title}</div>
        </div>
    );
};

export default CardDetails;
