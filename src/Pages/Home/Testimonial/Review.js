import React from 'react';

const Review = ({ review }) => {
    const { name, img, userReview, location } = review;
    return (
        <section className=''>
            <div className="card  shadow-xl border-4 mt-8">
                <div className="card-body">
                    <p>{userReview}</p>
                </div>
                <div className='flex row-span-2 mx-8 mb-4'>
                    <img className='mr-8' src={img} alt="avatar" />
                    <div className="my-auto">
                    <h3 className='text-xl text-primary'>{name}</h3>
                    <p>{location}</p>
                </div>
                </div>
                
            </div>
        </section>
    );
};

export default Review;