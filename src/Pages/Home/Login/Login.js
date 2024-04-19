import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm()
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className=' flex justify-center flex-col w-96 mx-auto'>
            <form className=' bg-teal-200 mt-10 shadow-lg rounded-lg mx-10' onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-92 p-5">
                    <label className="label"><span className="label-text">What is your email?</span></label>
                    <input type="text" className="input input-bordered" {...register("email")} />
                    <label className="label"><span className="label-text">What is your password</span></label>
                    <input type="Password" className="input input-bordered" {...register("Password")} />
                    <input className='btn btn-primary mt-5' type="submit"  value='Login'/>
                </div>
                <Link to='/resetPassword'><p className=' text-warning ms-10 mb-2'>Forget password</p></Link>

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