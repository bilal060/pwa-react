import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Input from 'react-phone-number-input/input'
import 'react-phone-number-input/style.css'
import { getCountries, getCountryCallingCode } from 'react-phone-number-input'
import en from 'react-phone-number-input/locale/en'

const AddAddressPage = () => {
    const [value, setvalue] = useState('')
    const [country, setCountry] = useState('US')

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/terms')
    }
    return (
        <div className='max-width-792'>
            <h2 className='auth-model-heading text-center mb-4'>Add an address so you can share nearby</h2>
            <p className='auth-model-desc mb-4 pb-3'>This will be used  to determine your share</p>

            <form onSubmit={(e) => submitHandler(e)}>
                <div className='mb-5'>
                    <div className='form-control h-auto p-0 bg-transparent border-0 mb-4'>
                        <label className='text-white mb-2 font-weight-600 font-18-100'>Postal Code</label>
                        <input type='text' required className='auth-input' placeholder='Enter Postal Code' />
                    </div>
                    <div className='form-control h-auto p-0 bg-transparent border-0'>
                        <label className='text-white mb-2 font-weight-600 font-18-100'>Phone Number (optional)</label>

                        <div className='custom-phone-input auth-input d-flex align-items-center'>
                            <CountrySelect
                                labels={en}
                                value={country}
                                onChange={setCountry}
                                className='bg-transparent outline-0 border-0 custom-phone-dropdown-btn font-18-100'
                            />
                            <PhoneInput
                                countrySelectProps={{ unicodeFlags: false }}
                                country={country}
                                value={value}
                                onChange={setvalue}
                                buttonClass='d-none'

                                inputClass='bg-transparent outline-0 shadow-none custom-phone-input-1 font-18-100'
                            />
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-5'>
                    <button className='green-btn-outline custom-w min-width-208' onClick={() => goBack()}>Back</button>
                    <button className='green-btn custom-w min-width-208'>Next</button>
                </div>
            </form>
            <p className='text-center text-grey mt-5 font-16'>Terms of use   |   Privacy Policy</p>

        </div>
    )
}

export default AddAddressPage


const CountrySelect = ({ value, onChange, labels, ...rest }) => (
    <select
        {...rest}
        value={value.match(/[A-Z]/g).join('')}
        onChange={event => onChange(event.target.value || undefined)}>
        <option value="">
            {labels['ZZ']}
        </option>
        {getCountries().map((country) => (
            <option key={country} value={country}>
                {labels[country].match(/[A-Z]/g).join('')} +{getCountryCallingCode(country)}
            </option>
        ))}
    </select>
)
