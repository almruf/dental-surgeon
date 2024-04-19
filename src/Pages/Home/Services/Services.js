import React from 'react';
import fluorideImg from '../../../assets/images/fluoride.png';
import caving from '../../../assets/images/cavity.png';
import whiteTeeth from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
import Service from './Service';




const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluter Treatment',
            description: 'fluoride treatment is a  way to clean your teeth.',
            icon: fluorideImg,
        },
        {
            id: 2,
            name: 'Fluter Treatment',
            description: 'fluoride treatment is a popular  your teeth.',
            icon: caving,
        },
        {
            id: 3,
            name: 'Fluter Treatment',
            description: 'fluoride treatment is  clean your teeth.',
            icon: whiteTeeth,
        },
    ]
    return (
        <div className="mt-20">
            <h2 className='text-3xl text-center mb-10'>our services</h2>
            <div className='grid gap-8 my-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="hero mt-20 mb-32">
                <div className="hero-content flex-col lg:flex-row md:flex-row ">
                    <img src={treatment} alt='' className="max-w-sm md:w-1/2 rounded-lg" />
                    <div className='ml-10'>
                        <h1 className="text-5xl font-bold">Dental surgery</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat  <br />ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;