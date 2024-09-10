import React from 'react';
import CardDetails from './CardDetails';
import PetForm from './PetForm';
import BookingForm from './BookingForm';
import serviceData from '../components/servicedata.json';

import './UserPortal.css';
import Navbar8 from './navbar8';
import Footer4 from './footer4';




const UserPortal = () => {
    return (
        
            <div style={{ backgroundColor: '#FFF3C7' }}>
            <Navbar8 />
            <div className="card-container">
                {serviceData.map(item => {
                    return (<CardDetails key={item.id} id={item.id} serviceData={item} />)
                })}
            </div>
            <PetForm />
            <BookingForm />
            <Footer4/>
            </div>
        
    );
};

export default UserPortal;
