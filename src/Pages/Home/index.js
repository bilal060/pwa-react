import React from 'react'
import PanicSection from '../../Components/Dashboard Components/PanicSection'
import AllProducts from '../../Components/Dashboard Components/AllProducts'

const HomePage = (props) => {
    const { children } = props;
    return (
        <div>
            <PanicSection />
            <AllProducts />
            {children}
        </div>
    )
}

export default HomePage