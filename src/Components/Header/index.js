import React from 'react'
import DashboardLogo from '../../assets/Images/DashboardLogo'

const AppHeader = () => {
    return (
        <div className='app-header'>
            <div className='container mx-auto d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                    <DashboardLogo/>

                    <h3 className='app-heading'>GROW AND SHARE</h3>
                </div>
                <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="8" width="32" height="4" rx="2" fill="#242424" />
                    <rect x="3" y="20" width="32" height="4" rx="2" fill="#242424" />
                </svg>
            </div>

        </div>
    )
}

export default AppHeader