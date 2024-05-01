import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useContext, useState, } from 'react';
import toast from 'react-hot-toast';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn, user } = useContext(AuthContext);
    const [loginError,setLoginError] = useState('')


    const handleLogin = data => {
        console.log(data)
        setLoginError('');

        signIn(data.email, data.password)
            .then(result => {
                // Signed in 
                const user = result.user;
                toast.success('log ins successful')
                console.log(user)
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
                console.log(loginError)
            });
        
    }
    return (
        <div className=' flex justify-center flex-col w-96 mx-auto'>
            <form className=' bg-teal-200 mt-10 shadow-lg rounded-lg mx-10' onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control p-5">
                    <div className="form-control w-92">
                        <label className="label"><span className="label-text">What is your email?</span></label>
                        <input type="text" className="input input-bordered" {...register("email", { required: "Email Address is required", })} />
                        {errors.email && <p role="alert" className='text-yellow-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-92">
                        <label className="label"><span className="label-text">What is your password</span></label>
                        <input type="Password" className="input input-bordered" {...register("password", { required: 'password required', minLength: { value: 6, message: 'password must 6 character' } })} />
                        {errors.password && <p role="alert" className='text-yellow-500'>{errors.password.message}</p>}
                       <input className='btn btn-primary mt-5' type="submit" value='Login' />
                    </div>
                    <div className="">
                        {loginError && <p>{loginError}</p>}
                    </div>
                </div>
                {

                }
            </form><br />
            <div className="divider">
                ---------- OR ----------
            </div>
            <div className="my-4">
                <div className="">
                    <Link to='' className='flex justify-center text-pretty text-lg btn btn-outline btn-success text-sky-600 mx-16'>continue with Google</Link>
                </div>
                <div className="mt-2 mb-10">
                    <p className="text-center">create new profile</p>
                    <Link to='/signUp' className=' text-xl btn btn-secondary flex justify-center text-pretty mx-16'> <p>Sign Up</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Login; 