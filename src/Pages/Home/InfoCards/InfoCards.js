import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {
   const cardsData = [
    {
        id: 1,
        name: 'Opening Hours',
        description: 'Opening 9.00 am to 5.00 everyday',
        icon: clock,
        bgClass: 'text-white bg-gradient-to-r from-primary to-secondary',
    },
    {
        id: 2,
        name: 'Our Location',
        description: 'NoyaBari, Dogair purbopara, sarulia , demra, dhaka',
        icon: marker,
        bgClass: 'text-white bg-gradient-to-r from-neutral to-accent',
    },
    {
        id: 3,
        name: 'Contact Us',
        description: 'mobile: 01842040118 aalmaruf786@gmail.com',
        icon: phone,
        bgClass: 'text-white bg-gradient-to-r from-primary to-secondary',
    }
   ]
    return (
        <div className=' grid gap-6 my-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
            {
                cardsData.map(card => <InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;