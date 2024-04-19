import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState("")
    return (
        <div className=' flex justify-center'>
            <form className=' w-96 bg-teal-200 mt-10 shadow-lg rounded-lg mx-10' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <div className="form-control w-96 p-5">
                    <label className="label"><span className="label-text">What is your name?</span></label>
                    <input type="text" className="input input-bordered" {...register("FullName")} />
                    <label className="label"><span className="label-text">National id card number</span></label>
                    <input type="text" className="input input-bordered" {...register("nid")} />
                    <label className="label"><span className="label-text">What is your  email?</span></label>
                    <input type="text" className="input input-bordered" {...register("email")} />
                    <label className="label"><span className="label-text">What is your Phone</span></label>
                    <input type="text" className="input input-bordered" {...register("Phone")} />
                    <select className='p-3 my-4 boarder rounded-md' {...register("category", { required: true })}>
                        <option value="">Select gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <textarea className='min-h-12 py-2' {...register("aboutYou")}></textarea>
                    <input className='btn btn-primary mt-5' type="submit" />

                </div><br />
                
                <h4 className="text-center my-3">old user <Link to='/login' className='text-2xl text-lime-600'>Login</Link></h4>
            </form>
            {data}
        </div>
    );
};


export default SignUp;