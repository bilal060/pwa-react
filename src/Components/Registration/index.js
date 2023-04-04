import React from 'react'
import '../Components.css'
const RegistrationLayout = (props) => {
    const { children } = props;
    return (
        <div className='registration-layout  d-flex justify-content-center align-items-center'>
            {children}
        </div>
    )
}

export default RegistrationLayout