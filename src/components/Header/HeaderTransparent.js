import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../src/assets/icons/logo.svg';
import whiteLogo from '../../../src/assets/icons/white-logo.svg';
import close from '../../../src/assets/icons/close.svg';
import  LanguageDropdown from '../../components/LanguageDropdown/LanguageDropdown';

function HeaderTransparent(props) {

    const [ activeMenu, setActiveMenu ] = useState(false);

    return (
        <>
            <header className="header-bg-transparent main-header w-100">
                <div className="header-desktop">
                    <Link to={"/"} className="mob-none">
                        <img src={logo} alt="logo" className="black-head-logo" />
                        <img src={whiteLogo} alt="logo" className="white-head-logo" />
                    </Link>
                    <nav className={activeMenu ? 'navbar navbar-expand activeMenu' : 'navbar navbar-expand'}>
                        <ul className="list-unstyled">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link">Ana Səhifə</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/about"} className="nav-link">Haqqımızda</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/products"} className="nav-link">Məhsullarımız</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/news"} className="nav-link">Xəbərlər</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contact"} className="nav-link">Əlaqə</Link>
                            </li>
                        </ul>
                        <button type="button" className="close-mobile-menu" onClick={() => setActiveMenu(false)}>
                            <img src={close} alt="" />
                        </button>
                    </nav>
                    <div class="head-right mob-none align-items-center justify-content-start">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0314 32.2103C21.0314 30.9494 20.0508 29.9272 18.8411 29.9272H16.1589C15.578 29.9272 15.0209 30.1678 14.6101 30.5959C14.1993 31.0241 13.9686 31.6048 13.9686 32.2103C13.9686 33.4712 14.9492 34.4934 16.1589 34.4934H18.8411C20.0508 34.4934 21.0314 33.4712 21.0314 32.2103ZM4.60476 26.3233C4.97062 26.3524 5.41324 26.3691 5.85785 26.342C6.09472 27.594 6.68315 28.7553 7.5615 29.6709C8.72758 30.8862 10.3091 31.569 11.9581 31.569H12.7939C12.757 31.7792 12.7381 31.9938 12.7381 32.2103C12.7381 32.4293 12.757 32.6437 12.7933 32.8516H11.9581C9.98272 32.8516 8.08821 32.0337 6.69143 30.5778C5.5771 29.4162 4.85229 27.9246 4.60476 26.3233ZM3.97886 24.9586C3.0074 24.7878 2.10342 24.3065 1.39774 23.5709C0.502783 22.638 0 21.3728 0 20.0536V17.0223C0 15.7031 0.502783 14.4379 1.39774 13.505C2.29271 12.5722 3.50656 12.0481 4.77224 12.0481H5.0899C5.59768 5.36779 10.9599 0.111328 17.5 0.111328C24.0401 0.111328 29.4023 5.36779 29.9101 12.0481H30.2278C31.4934 12.0481 32.7073 12.5722 33.6023 13.505C34.4972 14.4379 35 15.7031 35 17.0223V20.0536C35 21.3728 34.4972 22.638 33.6023 23.5709C32.7073 24.5038 31.4934 25.0278 30.2278 25.0278H28.8195C28.2354 25.0278 27.762 24.5343 27.762 23.9256V13.0876C27.762 7.18023 23.1675 2.39139 17.5 2.39139C11.8325 2.39139 7.23803 7.18023 7.23803 13.0876V23.9256C7.23803 24.3553 7.00198 24.7278 6.65759 24.9095C5.70958 25.2524 4.23938 25.0044 3.97886 24.9586Z" fill="black" />
                        </svg>
                        <p>
                            <span>Bizə zəng edin</span>
                            <a href="tel:+994 55 543 65 47">+994 55 543 65 47</a>
                        </p>
                    </div>
                </div>
                <div class="header-mobile">
                    <div class="text-center">
                        <Link to={"/"}>
                        <img src={logo} alt="logo" className="black-head-logo" />
                        <img src={whiteLogo} alt="logo" className="white-head-logo" />
                        </Link>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mobile-menu">
                        <button type="button" className="open-mobil-menu" onClick={() => setActiveMenu(true)}>
                            <svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32.4545 3.09091H1.54545C0.69192 3.09091 0 2.39899 0 1.54545C0 0.69192 0.69192 0 1.54545 0H32.4545C33.3081 0 34 0.69192 34 1.54545C34 2.39899 33.3081 3.09091 32.4545 3.09091Z" fill="black" />
                                <path d="M32.4545 12.3643H1.54545C0.69192 12.3643 0 11.6724 0 10.8189C0 9.96536 0.69192 9.27344 1.54545 9.27344H32.4545C33.3081 9.27344 34 9.96536 34 10.8189C34 11.6724 33.3081 12.3643 32.4545 12.3643Z" fill="black" />
                                <path d="M32.4545 21.6358H1.54545C0.69192 21.6358 0 20.9439 0 20.0904C0 19.2368 0.69192 18.5449 1.54545 18.5449H32.4545C33.3081 18.5449 34 19.2368 34 20.0904C34 20.9439 33.3081 21.6358 32.4545 21.6358Z" fill="black" />
                            </svg>
                        </button>
                        <div class="head-right d-flex align-items-center justify-content-start">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0314 32.2103C21.0314 30.9494 20.0508 29.9272 18.8411 29.9272H16.1589C15.578 29.9272 15.0209 30.1678 14.6101 30.5959C14.1993 31.0241 13.9686 31.6048 13.9686 32.2103C13.9686 33.4712 14.9492 34.4934 16.1589 34.4934H18.8411C20.0508 34.4934 21.0314 33.4712 21.0314 32.2103ZM4.60476 26.3233C4.97062 26.3524 5.41324 26.3691 5.85785 26.342C6.09472 27.594 6.68315 28.7553 7.5615 29.6709C8.72758 30.8862 10.3091 31.569 11.9581 31.569H12.7939C12.757 31.7792 12.7381 31.9938 12.7381 32.2103C12.7381 32.4293 12.757 32.6437 12.7933 32.8516H11.9581C9.98272 32.8516 8.08821 32.0337 6.69143 30.5778C5.5771 29.4162 4.85229 27.9246 4.60476 26.3233ZM3.97886 24.9586C3.0074 24.7878 2.10342 24.3065 1.39774 23.5709C0.502783 22.638 0 21.3728 0 20.0536V17.0223C0 15.7031 0.502783 14.4379 1.39774 13.505C2.29271 12.5722 3.50656 12.0481 4.77224 12.0481H5.0899C5.59768 5.36779 10.9599 0.111328 17.5 0.111328C24.0401 0.111328 29.4023 5.36779 29.9101 12.0481H30.2278C31.4934 12.0481 32.7073 12.5722 33.6023 13.505C34.4972 14.4379 35 15.7031 35 17.0223V20.0536C35 21.3728 34.4972 22.638 33.6023 23.5709C32.7073 24.5038 31.4934 25.0278 30.2278 25.0278H28.8195C28.2354 25.0278 27.762 24.5343 27.762 23.9256V13.0876C27.762 7.18023 23.1675 2.39139 17.5 2.39139C11.8325 2.39139 7.23803 7.18023 7.23803 13.0876V23.9256C7.23803 24.3553 7.00198 24.7278 6.65759 24.9095C5.70958 25.2524 4.23938 25.0044 3.97886 24.9586Z" fill="black" />
                            </svg>
                            <p>
                                <span>Bizə zəng edin</span>
                                <a href="tel:+994 55 543 65 47">+994 55 543 65 47</a>
                            </p>
                        </div>
                    </div>
                </div>
                <LanguageDropdown/>
            </header>
        </>
    );
}

export default HeaderTransparent;