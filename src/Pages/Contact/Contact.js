import React from 'react';

const Contact = () => {
    return (

        <div className='flex justify-center lg:w-1/2 lg:mx-auto m-5 lg:my-20 bg-green-300'>
            <h2 className="text-2xl text-white">contact</h2>
            <form action="" className='flex flex-col w-full max-w-sm mx-5 my-10'>
                <input className='p-4 border rounded-md' type="email" placeholder='email' />
                <input className='p-4 border rounded-md my-4' type="text " placeholder='subject' />
                <textarea className="textarea" placeholder="comment"></textarea>
            </form>
        </div>
    );
};

export default Contact;