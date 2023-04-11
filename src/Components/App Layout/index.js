import React, { useState } from 'react'
import AppHeader from '../Header';
import AppFooter from '../Footer';
import MobUserIcon from '../../assets/Images/MobUser';
import MobSearchIcon from '../../assets/Images/MobSearch';
import MobDispensaryIcon from '../../assets/Images/MobDispensary';
import MobHeartIcon from '../../assets/Images/MobHeart';
import MobHomeIcon from '../../assets/Images/MobHome';
import { Link, useLocation } from 'react-router-dom';
import MobSettingsIcon from '../../assets/Images/MobSettings';
import DashboardLogo from '../../assets/Images/DashboardLogo';
import CrossIcon from '../../assets/Images/Cross';
import User from '../../assets/Images/sidelink-user.svg';
import SideLinkSettings from '../../assets/Images/sideLinkSettings';
import selectafter from '../../assets/Images/select-after.svg';



const mobileFooter = [
    {
        icon: <MobHomeIcon />,
        link: '/home'
    },
    {
        icon: <MobHeartIcon />,
        link: '/likes'
    },
    {
        icon: <MobSearchIcon />,
        link: '/search'
    },
    {
        icon: <MobDispensaryIcon />,
        link: '/dispensary'
    },
    {
        icon: <MobSettingsIcon />,
        link: '/settings'
    },
    {
        icon: <MobUserIcon />,
        link: '/user'
    },
]
const sideLinks = [
    {
        name: 'Home',
        link: '/home'
    },
    {
        name: 'Seed Store',
        link: '/home/seed'
    },
    {
        name: 'Buds',
        link: '/home/buds'
    },
    {
        name: 'Dispensary',
        link: '/home/dispensary'
    },
    {
        name: 'Cannabis Lounge',
        link: '/home/cannabis'
    },
    {
        name: 'Head Store',
        link: '/home/headshop'
    },
    {
        name: 'About us',
        link: 'aboutus'
    },
    {
        name: 'Login/Logout',
        link: '/logout'
    },
]
const AppLayout = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { children } = props;
    const Location = useLocation();
    const mobFooter = ['/home', '/likes', '/home/seed', '/home/buds', '/home/cannabis', '/home/dispensary', '/home/headshop',]
    const head = ['home', '/aboutus', '/home/seed', ' /home/buds', '/home/dispensary', '/home/cannabis', '/home/headshop']

    return (
        <div className='app-layout'>
            {isOpen && <div className={`app-menu`}>
                <div>
                    <div className='d-flex justify-content-end align-items-center'>
                        <span onClick={() => setIsOpen(!isOpen)} className='cr-p mb-4'><CrossIcon /></span>
                    </div>
                    <div className='d-flex align-items-center gap-2  mb-4 pb-3'>
                        <DashboardLogo />
                        <div>
                            <h3 className='font-18 font-weight-700'>GROW AND SHARE</h3>
                            <p className='font-10'>Diversity Your Supply</p>
                        </div>
                    </div>
                    <div className='search-product mb-4'>
                        <input placeholder='Search Product' className='border-0 outline-0 bg-transparent' />
                        <span className='icon-green-bg'><MobSearchIcon /></span>
                    </div>
                    <div className='d-flex flex-column  side-links-main'>
                        {sideLinks.map((data, index) => {
                            return (
                                <Link onClick={() => setIsOpen(!isOpen)} key={index} to={data.link} className={`${data.link === Location.pathname ? 'side-link-active' : ''}  side-link`}>{data.icon} {data.name}</Link>
                            )
                        })}
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between gap-2 pt-4 '>
                    <div class="dropdown">
                        <div className='d-flex align-items-center gap-2' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={User} alt='' className='side-link-user-img' />
                            <div>
                                <h3 className='font-18 font-weight-700'>Tony Stark</h3>
                                <p className='font-10'>Retailer</p>
                            </div>
                            <img src={selectafter} alt='' />

                        </div>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><div className="dropdown-item">Action</div></li>
                            <li><div className="dropdown-item">Another action</div></li>
                            <li><div className="dropdown-item">Something else here</div></li>
                        </ul>
                    </div>

                    <SideLinkSettings />
                </div>

            </div>}
            <AppHeader setIsOpen={setIsOpen} isOpen={isOpen} />
            <div className={`content-footer ${head.includes(Location.pathname) ? 'mob-app-content-footer' : ''}`}>
                {children}
                <div className='d-sm-block d-none'>
                    <AppFooter />
                </div>
            </div>
            {mobFooter.includes(Location.pathname) ? <div className='mobile-view-footer d-sm-none b-block'>
                <div className='container mx-auto h-100'>
                    <div className='d-flex align-items-center justify-content-around gap-3 h-100'>
                        {mobileFooter.map((data, index) => {
                            return (
                                <Link key={index} to={data.link} className={`${Location.pathname.includes(data.link) ? 'mob-footer-link-active' : ''} mob-footer-link`}>{data.icon}</Link>
                            )
                        })}
                    </div>
                </div>
            </div> : ''
            }
        </div>
    )
}

export default AppLayout