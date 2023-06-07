import desktopLogo from '@/assets/img/logo/desktop-logo.png';

interface IProps {
    showLeftPart: boolean;
    setShowLeftPart: (value: boolean) => void;
    activeTab: string;
    setActiveTab: (value: string) => void;
}

const LeftPart = ({ showLeftPart, setShowLeftPart, activeTab, setActiveTab }: IProps) => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const handleActive = (tab: string) => {
        setActiveTab(tab);
        scrollTo(tab);
    };
    return (
        <>
            <div className={`arlo_tm_leftpart_wrap ${showLeftPart ? '' : 'opened'}`}>
                <div className='leftpart_inner'>
                    <div className='logo_wrap'>
                        <a>
                            <img src={desktopLogo} alt='desktop-logo' />
                        </a>
                    </div>
                    <div className='menu_list_wrap'>
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
                    <div className='leftpart_bottom'>
                        <div className='social_wrap'>
                            <ul>
                                <li>
                                    <a>
                                        <i className='xcon-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className='xcon-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className='xcon-linkedin'></i>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className='xcon-instagram'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a
                        onClick={() => setShowLeftPart(!showLeftPart)}
                        className={`arlo_tm_resize ${showLeftPart ? '' : 'opened'}`}
                        style={{ cursor: 'pointer' }}
                    >
                        <i className={`xcon-angle-left ${showLeftPart ? '' : 'opened'}`}></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default LeftPart;
