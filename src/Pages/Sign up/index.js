import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShowPassword from '../../assets/Images/ShowPassword';

const SignUpPage = () => {
    const [signInDetails, setsignInDetails] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);

    const formHandler = (e) => {
        const { name, value } = e.target;
        setsignInDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    console.log(signInDetails)
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className='max-width-521'>
            <h2 className='auth-model-heading mb-5'>Create Account</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <select className='auth-input mb-3'>
                    <option>- Select Type -</option>
                    <option>Visit</option>
                </select>
                <input className='auth-input mb-3' type='text' placeholder='Full Name' />
                <input className='auth-input mb-3' type='email' placeholder='Email' />
                <div className='auth-input mb-3 d-flex align-items-center justify-content-between' >
                    <input
                        name='password'
                        required
                        type={passwordShown1 ? "text" : "password"}
                        placeholder='Enter password'
                        className='password-input w-75'
                        onChange={e => formHandler(e)}
                    />                        <span
                        onClick={() => { setPasswordShown1(!passwordShown1) }}
                        className='see-pswd-btn cr-p'>
                        <ShowPassword />
                    </span>
                </div>
                <div className='auth-input mb-3 d-flex align-items-center justify-content-between' >
                    <input
                        name='password'
                        required
                        type={passwordShown2 ? "text" : "password"}
                        placeholder='Enter password'
                        className='password-input w-75'
                        onChange={e => formHandler(e)}
                    />                        <span
                        onClick={() => { setPasswordShown2(!passwordShown2) }}
                        className='see-pswd-btn cr-p'>
                        <ShowPassword />
                    </span>
                </div>
                <div className='d-flex align-items-start flex-column'>
                    <div className='checkbox-container'>
                        <input type="checkbox" id="head-checkbox" />
                        <label htmlFor="head-checkbox"><span className='ps-2 font-16-100 text-grey font-weight-500'>I confirm I have read and agree to the <span className='text-primary-green font-weight-700'> Term of use </span>
                            and <span className='text-primary-green ps-md-4 font-weight-700'>Privacy policy</span></span></label>
                    </div>
                </div>
                <div className='d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between mb-4 pb-2 mt-4 pt-3'>
                    <button className='green-btn-outline ' onClick={() => goBack()}>Back</button>
                    <button className='green-btn'>Next</button>
                </div>
            </form>
            <Link className='text-white d-flex justify-content-center align-items-center gap-1 font-weight-500 font-18' to='/'>Already have an account? <span className='text-primary-green font-weight-700' >Login</span></Link>
            <p className='text-center text-grey mt-5 pt-sm-0 pt-3 font-16'>Terms of use   |   Privacy Policy</p>



        </div>
    )
}

export default SignUpPage