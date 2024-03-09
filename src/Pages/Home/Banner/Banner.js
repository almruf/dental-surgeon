import React from 'react';
import './Banner.css'
import chair from '../../../assets/images/chair.png';
import bgImage from '../../../assets/images/bg.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Banner = () => {
  return (
    <div className="hero"style={{backgroundImage: ` url(${bgImage})`}}>
      <div className="hero-content flex-col lg:flex-row-reverse" >
        <img src={chair} className="rounded-lg lg:w-1/2 md:w-1/2 sm:w-full shadow-2xl" alt='' />
        <div className='bg-no-repeat'>
          <h1 className="text-5xl font-bold">Dental Surgeon</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <PrimaryButton>Getting started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
