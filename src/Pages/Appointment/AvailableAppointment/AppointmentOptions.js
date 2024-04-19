import React from 'react';

const AppointmentOptions = ({ appointmentOptions,setTreatment }) => {
    const { name, slots } = appointmentOptions;

    return (
        <div className=''>
            <div className="card w-100 shadow-2xl text-center border-2 m-5">
                <div className="card-body">
                    <h2 className="text-2xl my-2 text-center text-sky-500">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                    <div className="card-actions justify-center">
                        <label
                            disabled ={slots.length === 0}
                            htmlFor="booking-modal"
                            className="btn btn-primary text-white"
                            onClick={()=>{setTreatment(appointmentOptions)}}
                            >Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;
