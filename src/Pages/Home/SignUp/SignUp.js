import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../../contexts/AuthProvider'
import toast from 'react-hot-toast';
const SignUp = ( ) => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [signUpError, setSignUpError] = useState('')
    const {createUser, updateUser }= useContext(AuthContext)
    const handleSignUp =(data)=>{
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result => {
            // Signed in
            const user = result.user;  
            toast.success('successful signUp') 
            console.log(user)
            const userInfo={
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(err=> console.log(err));
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
    }

    return (
        <div className=' flex justify-center'>
            <form className=' bg-teal-200 mt-10 shadow-lg rounded-lg mx-20 ' onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-96 p-5 ">
                    <div className="">
                    <label className="label"><span className="label-text">What is your name?</span></label>
                    <input type="text"  {...register("fullName")} className="input input-bordered w-full "/>
                    {errors.fullName && <p className='text-yellow-500' role="alert">{errors.fullName.message}</p>}
                    </div>
                    <div className="">
                    <label className="label"><span className="label-text">National id card number</span></label>
                    <input type="text" className="input input-bordered w-full" {...register("nid")} />
                    </div>
                    <div className="">
                    <label className="label"><span className="label-text">What is your  email?</span></label>
                    <input type="email" className="w-full input input-bordered" {...register("email")} />
                     {errors.email && <p role="alert"className='text-yellow-500' >{errors.email.message}</p>}
                    </div>
                    <div className="">
                    <label className="label"><span className="label-text">What is your Phone</span></label>
                    <input type="number" className="w-full input input-bordered" {...register("Phone")} />
                    </div>
                    <div className="">
                    <label className="label"><span className="label-text">your password</span></label>
                    <input type="password"{...register("password",{ 
                        required: "password is required",
                        minLength:{value:5, message:'password must 5 character'},
                        pattern: {value:/[a-z]*[A-Z]*[0-9]/,message:'1 lower case 1 upper case 1number must '}
                    })}
                    className="w-full input input-bordered"/>
                    {errors.password && <p role="alert"className='text-yellow-500' >{errors.password.message}</p>}
                    {
                        signUpError && <p>{signUpError}</p>
                    }
                    </div>
                    <div className="">
                    <select className='w-full p-3 my-4 boarder rounded-md' {...register("category", { required: true })}>
                        <option className='' value="">Select gender</option>
                        <option className='w-1/2' value="male">male</option>
                        <option className='w-1/2' value="female">female</option>
                    </select>
                    </div>
                    <input className='btn btn-primary mt-5' type="submit" />
                </div><br />
                <h4 className="text-center my-3"> Please Here <Link to='/login' className='text-2xl text-lime-600'> Login</Link></h4>
            </form>
        </div>
    );
};


export default SignUp;