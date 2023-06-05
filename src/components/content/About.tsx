import { TypeAnimation } from 'react-type-animation';
import avatar from '@/assets/img/about/1.jpg';
import border from '@/assets/img/about/550x640.jpg';
import CV from '@/assets/cv/CV.pdf';
import { useRef, useEffect } from 'react';
import Parallax from 'parallax-js';
const About = () => {
    const sceneEl = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (!sceneEl?.current) return;
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
            hoverOnly: true
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <>
            <div className='arlo_tm_section relative' id='about'>
                <div className='arlo_tm_about_wrapper_all'>
                    <div className='container'>
                        <div className='arlo_tm_title_holder'>
                            <h3>About Me</h3>
                            <span>Main informations about me</span>
                        </div>
                        <div className='arlo_tm_about_wrap'>
                            <div className='author_wrap'>
                                <div className='leftbox'>
                                    <div className='about_image_wrap parallax' ref={sceneEl}>
                                        <div className='image layer' data-depth='0.2'>
                                            <img src={border} alt='550x640' />
                                            <div className='inner'
                                                style={{ backgroundImage: `url(${avatar})` }}
                                            ></div>
                                        </div>
                                        <div className='border layer' data-depth='0.4'>
                                            <img src={border} alt='550x640' />
                                            <div className='inner'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightbox'>
                                    <div className='arlo_tm_mini_title_holder'>
                                        <h4>
                                            Hi there... I'm a{' '}
                                            <TypeAnimation
                                                sequence={[
                                                    'Freelancer', // Types 'One'
                                                    2000, // Waits 2s
                                                    'Web Developer', // Deletes 'One' and types 'Two'
                                                    2000,

                                                ]}
                                                wrapper='span'
                                                cursor={true}
                                                repeat={Infinity}
                                            />
                                        </h4>
                                    </div>
                                    <div className='definition'>
                                        <p>
                                            <p>Hi! My name is <strong>Cao Thái Học</strong>.</p>
                                            <p>
                                                I am a Web Developer, and over
                                                6 months of experience in designing and developing web applications and 3
                                                years of experience in embedded programming, designing and manufacturing
                                                machines in engineering wire harness for automotive.
                                            </p>
                                            <p>
                                                I would like to be further developed in your career path. Step out of your comfort zone to
                                                continue learning, improve knowledge and develop, challenge myself more with
                                                software industry.
                                            </p>
                                        </p>
                                    </div>
                                    <div className='about_short_contact_wrap'>
                                        <ul>
                                            <li>
                                                <span>
                                                    <label>Birthday:</label> 24/11/1997
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Address:</label> Di An, Binh Duong
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Education:</label> Ho Chi Minh University Technology and Education
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Major:</label> Mechatronics Engineering
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Mail:</label>{' '}
                                                    <a href='mailto:thaihocc.01@gmail.com' target='_blank'>thaihocc.01&#64;gmail.com</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='buttons_wrap'>
                                        <ul>
                                            <li>
                                                <a href={CV} download>
                                                    <span>Download CV</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
