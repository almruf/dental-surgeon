import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="hero ">
            <div className="hero-content w-full flex md:flex-row-reverse lg:flex-row-reverse flex-col justify-between">
                <div className="mx-auto">
                <img src={chair} alt='' className="max-w-sm  rounded-lg shadow-2xl" />
                </div>
                <div className='mx-auto'>
                    <DayPicker 
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    />
                    <p className='text-center'>your selected date:{format(selectedDate ,'PP')}</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;