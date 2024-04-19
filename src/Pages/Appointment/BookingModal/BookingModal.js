import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate , setTreatment }) => {
    const { name, slots } = treatment; //treatment is the another name of appointmentOption with name, and slot;
    const date = format(selectedDate, 'PP')
    
    const handleBooking = event =>{
        event.preventDefault()
        const form= event.target;
        const slot= form.slot.value;
        const name= form.name.value;
        const email= form.email.value;
        const phone= form.phone.value;

        const Booking = {
            AppointmentDate:date,
            treatment: treatment.name,
            patient: name,
            slot,
            email,
            phone,

        }
        console.log(Booking)
        setTreatment(null)

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-teal-200 ">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <div className="">
                        <form onSubmit={handleBooking} action="" className='grid grid-cols-1 gap-3 mt-5 '>
                            <input type="text" value={date} className="input w-full" disabled />
                        <select name='slot' className="select select-bordered w-full ">  
                                {
                                    slots.map((slot,index) =><option key={index} value={slot}>{slot}</option>)
                                }
                            </select>
                            <input name='name' type="text" placeholder="Your Name" className="input w-full" />
                            <input name='email' type="text" placeholder="Email Address" className="input w-full" />
                            <input name='phone' type="text" placeholder="Phone Number" className="input w-full" />
                            <br/>
                            <input className='btn btn-active btn-primary w-full' type="submit" value="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;