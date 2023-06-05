import About from './content/About';
import Contact from './content/Contact';
import HomeCV from './content/HomeCV';
import Projects from './content/Projects';
import Skills from './content/Skills';


interface IProps {
    showLeftPart: boolean;
}
const RightPart = ({ showLeftPart }: IProps) => {
    return (
        <>
            <div className={`arlo_tm_rightpart ${showLeftPart ? '' : 'opened'}`}>
                <div className='rightpart_inner'>
                    <HomeCV />

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
                                                <ul className='owl-carousel'>
                                                    <li className='item'>
                                                        <div className='inner'>
                                                            <div className='quotebox_wrap'>
                                                                <i className='xcon-quote-left'></i>
                                                            </div>
                                                            <div className='definitions_wrap'>
                                                                <p>
                                                                    “Arlo team are easy to work with and helped me make
                                                                    amazing websites in a short amount of time. Thanks
                                                                    guys for works.”
                                                                </p>
                                                            </div>
                                                            <div className='name_holder'>
                                                                <p>Antonio Baraley, CEO Founder</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className='item'>
                                                        <div className='inner'>
                                                            <div className='quotebox_wrap'>
                                                                <i className='xcon-quote-left'></i>
                                                            </div>
                                                            <div className='definitions_wrap'>
                                                                <p>
                                                                    “We were looking for a logo with a touch of
                                                                    modernism. Arlo grasped our needs and produced a
                                                                    stunning design.”
                                                                </p>
                                                            </div>
                                                            <div className='name_holder'>
                                                                <p>Calena Gomez, AOC Designer</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className='item'>
                                                        <div className='inner'>
                                                            <div className='quotebox_wrap'>
                                                                <i className='xcon-quote-left'></i>
                                                            </div>
                                                            <div className='definitions_wrap'>
                                                                <p>
                                                                    “Awesome to work with Arlo. Good organized, easy to
                                                                    communicate with, responsive with next iterations.”
                                                                </p>
                                                            </div>
                                                            <div className='name_holder'>
                                                                <p>Torren Winston, Photographer.</p>
                                                            </div>
                                                        </div>
                                                    </li>
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
