import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    })
    return (
        <section>
            <div className="">
                <h1 className='text-center text-2xl text-blue-900'>Available Appointment: {format(selectedDate, 'PP')}</h1>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {
                    appointmentOptions.map(option => <AppointmentOptions
                        key={option._id}
                        appointmentOptions={option}
                        setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div> 
            {
                treatment &&
                <BookingModal
                selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;