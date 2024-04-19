
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

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
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;