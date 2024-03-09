import React from 'react';

const InfoCard = ({card}) => {
    const {name, icon, description, bgClass} = card;
    return (
        <div className={`card card-side shadow-xl   ${bgClass}`}>
            <figure className='ml-6'><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;