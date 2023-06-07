import desktopLogo from '@/assets/img/logo/desktop-logo.png';
import { useState } from 'react';

interface IProps {
    activeTab: string;
    setActiveTab: (value: string) => void;
}
const Menu = ({ activeTab, setActiveTab }: IProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const handleActive = (tab: string) => {
        setActiveTab(tab);
        scrollTo(tab);
    };

    const style = {
        overflow: 'hidden',
        display: isOpen ? 'block' : 'none',
        transition: '2s',
    };
    return (
        <>
            <div className='arlo_tm_mobile_header_wrap'>
                <div className='main_wrap'>
                    <div className='logo'>
                        <a>
                            <img src={desktopLogo} style={{ width: 70, objectFit: 'cover' }} alt='mobile_logo' />
                        </a>
                    </div>
                    <div className='arlo_tm_trigger'>
                        <div className={`hamburger hamburger--collapse-r ${isOpen ? 'is-active' : ''}`}>
                            <div className='hamburger-box'>
                                <div className='hamburger-inner' onClick={() => setIsOpen(!isOpen)}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='arlo_tm_mobile_menu_wrap' style={style}>
                    <div className='mob_menu'>
                        <ul className='anchor_nav'>
                            <li>
                                <a
                                    className={activeTab === 'home' ? 'active' : ''}
                                    onClick={() => handleActive('home')}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className={activeTab === 'about' ? 'active' : ''}
                                    onClick={() => handleActive('about')}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    className={activeTab === 'skills' ? 'active' : ''}
                                    onClick={() => handleActive('skills')}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    className={activeTab === 'projects' ? 'active' : ''}
                                    onClick={() => handleActive('projects')}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    className={activeTab === 'contact' ? 'active' : ''}
                                    onClick={() => handleActive('contact')}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
