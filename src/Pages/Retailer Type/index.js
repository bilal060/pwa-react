import React from 'react'
import { useNavigate } from 'react-router-dom';

const RetailerType = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/dispensary')
    }
    return (
        <div className='max-width-521'>
            <h2 className='auth-model-heading mb-4 pb-3'>What type of Retailer are you?</h2>
            <form onSubmit={(e) => submitHandler(e)}>
                <select className='auth-input'>
                    <option defaultValue>- Select Retailer Type -</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>

                </select>
                <div className='d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between  mt-4 pt-3'>
                    <button className='green-btn-outline ' onClick={() => goBack()}>Back</button>
                    <button className='green-btn '>Next</button>
                </div>
            </form>
        </div>
    )
}

export default RetailerType