import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../provider/Provider';



const Login = () => {
    const { singIngoogle, signIn } = useContext(AuthContex);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;

        console.log(email, pass)
        signIn(email, pass)
            .then(result => {
                const loggUser = result.user;
                console.error(loggUser);
            })
            .catch(error => {
                console.log(error);
            })


    };
    const googleSignIn = () => {
        singIngoogle()
            .then(result => {
                const loggUser = result.user;
                console.log(loggUser);
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold"> Please Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='ms-8 mb-8'>
                        <Link to="/register" className="label-text-alt link link-hover">New User?</Link>
                    </div>
                    <button onClick={googleSignIn} className="btn btn-secondary">Button</button>

                </div>
            </div>
        </div>
    );
};

export default Login;