import React from 'react'
import UploadIcon from '../../assets/Images/Upload'
import AddIcon from '../../assets/Images/Add'

const DispensaryType = () => {
    return (
        <div className='max-width-792'>
            <form onClick={(e) => e.preventDefault()}>
                <div className='d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4'>
                    <div className='form-control p-0 bg-transparent border-0'>
                        <label className='text-white mb-2 font-weight-600 font-18-100'>Post Strain</label>
                        <select className='auth-input'>
                            <option defaultValue>- Select Strain -</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div className='form-control p-0 bg-transparent border-0'>
                        <label className='text-white mb-2 font-weight-600 font-18-100'>Quantity</label>
                        <select className='auth-input'>
                            <option defaultValue>- Select Quantity -</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                </div>
                <div className='d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4'>
                    <div className='form-control p-0 bg-transparent border-0'>
                        <label className='text-white mb-2 font-weight-600 font-18-100'>Cost</label>
                        <input type='number' className='auth-input' placeholder='$ Enter Cost' />
                    </div>
                    <div className='form-control p-0 bg-transparent border-0'>
                        <label className='text-white mb-2 font-weight-600 font-18-100'>Strain Name</label>
                        <input type='text' className='auth-input' placeholder='Enter Strain Name' />
                    </div>
                </div>
                <div className='form-control p-0 bg-transparent border-0 mb-4'>
                    <label className='text-white mb-2 font-weight-600 font-18-100'>Description</label>
                    <textarea className='auth-input-textarea' placeholder='Enter description here...' />
                </div>

                <label className='text-white mb-2 font-weight-600 font-18-100'>Upload Images</label>
                <div className='d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4'>
                    <label className='upload-file cr-p'>
                        <input type='file' className='d-none' accept=".jpg, .jpeg, .png" />
                        <div className='d-flex justify-content-center align-items-center h-100 w-100 gap-2'>
                            <UploadIcon />
                            <p className='font-16 font-weight-500'>Choose File / Drag & Drop Here</p>
                        </div>
                    </label>
                    <button className='add-more bg-transparent border-white text-white gap-2'>
                        <AddIcon />
                        Add More Strain</button>
                </div>
                <div className='d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-5'>
                    <button className='green-btn-outline custom-w min-width-208'>Back</button>
                    <button className='green-btn custom-w min-width-208'>Next</button>
                </div>
            </form>
            <p className='text-center text-grey mt-5'>Terms of use   |   Privacy Policy</p>
        </div>
    )
}

export default DispensaryType