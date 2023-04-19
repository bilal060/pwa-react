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
import LocationIcon from '../../assets/Images/Location';



const mobileFooter = [
    {
        icon: <MobHomeIcon />,
        link: '/home'
    },
    {
        icon: <MobHeartIcon />,
        link: '/favourite'
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
    const mobFooter = ['/favourite']
    const head = ['/home', '/favourite', '/aboutus', '/home/seed', '/home/buds', '/home/dispensary', '/home/cannabis', '/home/headshop']

    return (
        <div className='app-layout'>
            {isOpen && <div className={`app-menu`}>
                <div>
                    <div className='section-1'>
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
                    </div>
                    <div className='d-flex flex-column  side-links-main'>
                        {sideLinks.map((data, index) => {
                            return (
                                <Link onClick={() => setIsOpen(!isOpen)} key={index} to={data.link} className={`${data.link === Location.pathname ? 'side-link-active' : ''}  side-link`}>{data.icon} {data.name}</Link>
                            )
                        })}
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between gap-2 pt-4 section-2'>
                    <div className="dropdown">
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
            <div className={`content-footer ${head.includes(Location.pathname) ? 'mob-app-content-footer' : ''} ${mobFooter.includes(Location.pathname) ? 'small-header-mob-footer' : ''}`}>
                {children}
                <div className='d-sm-block d-none'>
                    <AppFooter />
                </div>
            </div>
            {head.includes(Location.pathname) ? <div className='mobile-view-footer d-sm-none b-block'>
                <Link className={`center-location`}>
                    <svg width={22} height={27} viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.0421 26.3859C15.5978 26.3859 21.7944 17.2031 21.7944 11.3347C21.7944 5.46626 16.9804 0.708984 11.0421 0.708984C5.10388 0.708984 0.289978 5.46626 0.289978 11.3347C0.289978 17.2031 6.48657 26.3859 11.0421 26.3859ZM11.0422 14.299C13.4643 14.299 15.4278 12.3586 15.4278 9.96496C15.4278 7.57137 13.4643 5.63099 11.0422 5.63099C8.62011 5.63099 6.65662 7.57137 6.65662 9.96496C6.65662 12.3586 8.62011 14.299 11.0422 14.299Z" fill="#5D8B2F" />
                    </svg>
                </Link>
                <div className='container mx-auto h-100'>
                    <div className='d-flex align-items-center justify-content-between gap-5 h-100 px-xs-4 mx-2'>
                        <div className='d-flex align-items-center justify-content-between h-100 section-1'>
                            <Link to={'/home'} className={`${Location.pathname.includes('/home') ? 'mob-footer-link-active' : ''} mob-footer-link`}><MobHomeIcon /></Link>
                            <Link to={'/favourite'} className={`${Location.pathname.includes('/favourite') ? 'mob-footer-link-active' : ''} mob-footer-link`}><MobHeartIcon /></Link>
                            <Link to={'/search'} className={`${Location.pathname.includes('/search') ? 'mob-footer-link-active' : ''} mob-footer-link`}><MobSearchIcon /></Link>
                        </div>
                        <div className='d-flex align-items-center justify-content-between h-100 section-2'>
                            <Link to={'/dispensary'} className={`${Location.pathname.includes('/dispensary') ? 'mob-footer-link-active' : ''} mob-footer-link`}><MobDispensaryIcon /></Link>
                            <Link to={'/settings'} className={`${Location.pathname.includes('/settings') ? 'mob-footer-link-active' : ''} mob-footer-link`}><MobSettingsIcon /></Link>
                            <Link to={'/user'} className={`${Location.pathname.includes('/user') ? 'mob-footer-link-active' : ''} mob-footer-link`}><MobUserIcon /></Link>
                        </div>
                    </div>
                    {/* {mobileFooter.map((data, index) => {
                            return (
                                <Link key={index} to={data.link} className={`${Location.pathname.includes(data.link) ? 'mob-footer-link-active' : ''} mob-footer-link`}>{data.icon}</Link>
                            )
                        })} */}
                </div>
            </div> : ''
            }
        </div>
    )
}

export default AppLayout