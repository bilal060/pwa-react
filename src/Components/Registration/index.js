import React from 'react'
import '../Components.css'
const RegistrationLayout = (props) => {
    const { children } = props;
    return (
        <div className='registration-layout'>
            {children}
        </div>
    )
}

export default RegistrationLayout