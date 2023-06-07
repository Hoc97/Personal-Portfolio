import { useEffect } from 'react';
import About from './content/About';
import Contact from './content/Contact';
import HomeCV from './content/HomeCV';
import Projects from './content/Projects';
import Skills from './content/Skills';

interface IProps {
    showLeftPart: boolean;
    setActiveTab: (value: string) => void;
}
const RightPart = ({ showLeftPart, setActiveTab }: IProps) => {
    useEffect(() => {
        const toggleVisible = () => {
            // console.log(window.pageYOffset );

            const timer = setTimeout(() => {
                if (window.pageYOffset < 800) {
                    setActiveTab('home');
                }
                if (window.pageYOffset >= 800) {
                    setActiveTab('about');
                }
                if (window.pageYOffset >= 1600) {
                    setActiveTab('skills');
                }
                if (window.pageYOffset >= 2400) {
                    setActiveTab('projects');
                }
                if (window.pageYOffset >= 3400) {
                    setActiveTab('contact');
                }
                clearTimeout(timer);
            }, 1000);
        };
        window.addEventListener('scroll', () => toggleVisible());
        return () => window.removeEventListener('scroll', () => toggleVisible());
    }, []);
    return (
        <>
            <div className={`arlo_tm_rightpart ${showLeftPart ? '' : 'opened'}`}>
                <div className='rightpart_inner'>
                    <HomeCV setActiveTab={setActiveTab} />

                    {/* <!-- ABOUT --> */}
                    <About />
                    {/* <!-- /ABOUT --> */}

                    {/* <!-- SKILLS --> */}
                    <Skills />
                    {/* <!-- /SKILLS --> */}

                    {/* <!-- Projects --> */}
                    <Projects />
                    {/* <!-- /Projects --> */}

                    {/* <!-- TESTIMONIALS --> */}
                    <div className='arlo_tm_section' id='testimonials'>
                        <div className='arlo_tm_testimonials_wrapper_all'>
                            <div className='arlo_tm_universal_box_wrap'>
                                <div className='bg_wrap'>
                                    <div className='overlay_image testimonial jarallax' data-speed='0'></div>
                                    <div className='overlay_color testimonial'></div>
                                </div>
                                <div className='content testimonial'>
                                    <div className='arlo_tm_testimonial_wrap'>
                                        <div className='container'>
                                            <div className='carousel_wrap'>
                                                <ul className='owl-carousel owl-loaded owl-drag'>
                                                    <div className='owl-stage-outer'>
                                                        <div
                                                            className='owl-stage'
                                                            style={{
                                                                width: '100%',
                                                            }}
                                                        >
                                                            <div className='owl-item cloned' style={{ width: '730px' }}>
                                                                <li className='item'>
                                                                    <div className='inner'>
                                                                        <div className='quotebox_wrap'>
                                                                            <i className='xcon-quote-left'></i>
                                                                        </div>
                                                                        <div className='definitions_wrap'>
                                                                            <p>
                                                                                “My expertise lies in crafting dynamic,
                                                                                engaging interfaces through writing
                                                                                clean and optimized code and utilizing
                                                                                cutting-edge development tools and
                                                                                techniques.”
                                                                            </p>
                                                                        </div>
                                                                        <div className='name_holder'>
                                                                            <p>Thái Học, Web developer</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /TESTIMONIALS --> */}

                    {/* <!-- COUNTERBOX --> */}
                    <div className='arlo_tm_section'>
                        <div className='container'>
                            <div className='arlo_tm_counter_wrap' data-col='4' data-delay='300'>
                                <ul className='arlo_tm_counter_list arlo_tm_miniboxes'>
                                    <li>
                                        <div className='inner arlo_tm_minibox'>
                                            <h3>
                                                <span>
                                                    <span
                                                        className='arlo_tm_counter'
                                                        data-from='0'
                                                        data-to='2222'
                                                        data-speed='3000'
                                                    >
                                                        0
                                                    </span>
                                                </span>
                                            </h3>
                                            <span>Projects Completed</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='inner arlo_tm_minibox'>
                                            <h3>
                                                <span>
                                                    <span
                                                        className='arlo_tm_counter'
                                                        data-from='0'
                                                        data-to='333'
                                                        data-speed='3000'
                                                    >
                                                        0
                                                    </span>
                                                    K
                                                </span>
                                            </h3>
                                            <span>Lines of Code</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='inner arlo_tm_minibox'>
                                            <h3>
                                                <span>
                                                    <span
                                                        className='arlo_tm_counter'
                                                        data-from='0'
                                                        data-to='8888'
                                                        data-speed='3000'
                                                    >
                                                        0
                                                    </span>
                                                </span>
                                            </h3>
                                            <span>Happy Clients</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='inner arlo_tm_minibox'>
                                            <h3>
                                                <span>
                                                    <span
                                                        className='arlo_tm_counter'
                                                        data-from='0'
                                                        data-to='777'
                                                        data-speed='3000'
                                                    >
                                                        0
                                                    </span>
                                                    +
                                                </span>
                                            </h3>
                                            <span>My Awwwards</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /COUNTERBOX --> */}

                    {/* <!-- CONTACT & FOOTER --> */}
                    <Contact />
                    {/* <!-- /CONTACT & FOOTER --> */}
                </div>
            </div>
        </>
    );
};

export default RightPart;
