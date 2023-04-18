import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../provider/Provider';


const Header = () => {
    const { user, logOut } = useContext(AuthContex);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>

            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Fire BAse</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>

                <Link className="btn btn-ghost normal-case text-xl" to="/order">Order</Link>
                {
                    user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>

                }
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>

                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {
                    user ? <> <span className='me-4'>{user.email}</span>
                        <button onClick={handleLogout} className="btn btn-xs">sign out</button>
                    </>
                        : <Link to="/login" >Login</Link>

                }
            </div>
        </div>
    );
};

export default Header;