import React from 'react';
import doctor from '../../../assets/images/doctor-removebg-preview.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
        style={{background: `url(${appointment}`}}
        >
           <div className="">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className="hidden lg:w-1/2 lg:block -mt-40 rounded-lg" />
                    <div className='ml-20'>
                        <h1 className="text-5xl font-bold text-white">Dental surgery</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat  <br />ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='appointment'><PrimaryButton>Appointment</PrimaryButton></Link>   
                        <Link to='appointment'><PrimaryButton>Appointment</PrimaryButton></Link>   
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;