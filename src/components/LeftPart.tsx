import desktopLogo from '@/assets/img/logo/desktop-logo.png';

interface IProps {
    showLeftPart: boolean;
    setShowLeftPart: (value: boolean) => void;
}
const LeftPart = ({ showLeftPart, setShowLeftPart }: IProps) => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return (
        <>
            <div className={`arlo_tm_leftpart_wrap ${showLeftPart ? '' : 'opened'}`}>
                <div className='leftpart_inner'>
                    <div className='logo_wrap'>
                        <a href='#'>
                            <img src={desktopLogo} alt='desktop-logo' />
                        </a>
                    </div>
                    <div className='menu_list_wrap'>
                        <ul className='anchor_nav'>
                            <li>
                                <a onClick={() => scrollTo('home')}>Home</a>
                            </li>
                            <li>
                                <a onClick={() => scrollTo('about')}>About</a>
                            </li>
                            <li>
                                <a onClick={() => scrollTo('skills')}>Skills</a>
                            </li>
                            <li>
                                <a onClick={() => scrollTo('projects')}>Projects</a>
                            </li>
                            <li>
                                <a onClick={() => scrollTo('contact')}>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='leftpart_bottom'>
                        <div className='social_wrap'>
                            <ul>
                                <li>
                                    <a href='#'>
                                        <i className='xcon-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href=''>
                                        <i className='xcon-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href=''>
                                        <i className='xcon-linkedin'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href=''>
                                        <i className='xcon-instagram'></i>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <a
                        onClick={() => setShowLeftPart(!showLeftPart)}
                        className={`arlo_tm_resize ${showLeftPart ? '' : 'opened'}`} style={{ cursor: 'pointer' }} >
                        <i className={`xcon-angle-left ${showLeftPart ? '' : 'opened'}`}></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default LeftPart;
