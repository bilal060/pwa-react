import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className='auth-model'>
            <h2 className='auth-model-heading'>Welcome Back!</h2>
            <p className='auth-model-desc py-2'>Please login to your account.</p>
            <form>
                <input className='auth-input' type='text' placeholder='Email' />
                <input className='auth-input my-3' type='Password' placeholder='Password' />
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center position-relative'>
                        <input type='checkbox' className='auth-checkbox ' placeholder='Password' />
                        <span class="geekmark"></span>
                        <label className='auth-label ps-2 m-0'>Remember me </label>
                    </div>
                    <Link>Forget Password</Link>
                </div>
                <button className='green-btn mt-5'>Login</button>
            </form>
        </div >
    )
}

export default LoginPage