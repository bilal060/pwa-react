import React from 'react'


const AppLayout = (props) => {
    const { children } = props;

    return (
        <div className='app-layout'>
            {children}
        </div>
    )
}

export default AppLayout