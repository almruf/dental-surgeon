import React from 'react';

const Service = ({ service }) => {
    const { name, icon, description } = service;
    return (
         
        <div className="card shadow-2xl text-center mt-30 border-4">
            <figure className='pt-10' ><img src={icon} alt="Fluoride treatment img" /></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;