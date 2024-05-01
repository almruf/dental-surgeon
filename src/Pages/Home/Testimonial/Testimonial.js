import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const reviews = [
    {
        id: 1,
        name: 'Takerk',
        location: 'dhaka',
        userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        img: people1,
    },
    {
        id: 2,
        name: 'raisa',
        location: 'dhaka',
        userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        img: people2,
    },
    {
        id: 3,
        name: 'rani',
        location: 'dhaka',
        userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        img: people3,
    },
    {
        id: 4,
        name: 'lubna',
        location: 'dhaka',
        userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        img: people3,
    },
    {
        id: 5,
        name: 'urmi',
        location: 'dogair',
        userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        img: people3,
    },
    {
        id: 6,
        name: 'fatima',
        location: 'lalbag',
        userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        img: people3,
    },
]
const Testimonial = () => {
    return (
        <section className='mb-12'>
            <div className="flex justify-between mt-10 mx-3">
                <div >
                    <h1 className='text-xl text-primary font-bold'>Testimonial</h1>
                    <h1 className='text-4xl'>Reviews</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-30' src={quote} alt="" />
                </figure>
            </div>
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-5">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                        >
                        </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;