import React, { useState } from 'react'
import DatePicker from 'react-date-picker'
import CalendarIcon from '../../assets/Images/Calendar';
import { useNavigate } from 'react-router-dom';

const AgeVerifyPage = () => {
    const [value, onChange] = useState();
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/address')
    }
    return (
        <div className='max-width-521'>
            <h2 className='auth-model-heading mb-4'>Confirm Your Age</h2>
            <p className='auth-model-desc mb-5'>You must be of legal age to consume cannabis in your  province or state of residence to enter our app. By clicking “Enter”, You confirm that you are of legal age to consume  cannabis in the province or state you reside.</p>
            <form onSubmit={(e) => submitHandler(e)}>
                <select className='auth-input my-3'>
                    <option>Pakistan</option>
                    <option>Usa</option>
                    <option>Canada</option>
                    <option>Uae</option>

                </select>
                <DatePicker
                    onChange={onChange}
                    value={value}
                    className='auth-input'
                    clearIcon={false}
                    format="y-M-d"
                    dayPlaceholder="DD"
                    yearPlaceholder='YYYY'
                    monthPlaceholder='MM'
                    calendarIcon={<CalendarIcon />}
                    required={true}
                />                <div className='d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between'>
                    <button className='green-btn-outline mt-5'>Exit</button>
                    <button className='green-btn mt-5'>Next</button>

                </div>
            </form>
        </div>
    )
}

export default AgeVerifyPage