import React from 'react'
import AppHeader from '../Header';
import AppFooter from '../Footer';


const AppLayout = (props) => {
    const { children } = props;

    return (
        <div className='app-layout'>
            <AppHeader />
            <div className='content-footer'>
                {children}
                <AppFooter />
            </div>
        </div>
    )
}

export default AppLayout