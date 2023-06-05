import { TypeAnimation } from 'react-type-animation';
import img from '@/assets/img/hero/img.jpg';

const HomeCV = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return (
        <>
            <div className='arlo_tm_section' id='home'>
                <div className='arlo_tm_hero_header_wrap'>
                    <div className='arlo_tm_universal_box_wrap'>
                        <div className='bg_wrap'>
                            <div className='overlay_image hero jarallax' data-speed='0.1'></div>
                            <div className='overlay_color hero'></div>
                        </div>
                        <div className='content hero'>
                            <div className='inner_content'>
                                <div className='image_wrap'>
                                    <img src={img} alt='hero' />
                                </div>
                                <div className='name_holder'>
                                    <h3>
                                        <span>Cao Thái Học</span>
                                    </h3>
                                </div>
                                <div className='text_typing'>
                                    <p>
                                        I'm a{' '}
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
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='arlo_tm_arrow_wrap bounce anchor'>
                            <a style={{ cursor: 'pointer' }} onClick={() => scrollTo('about')}>
                                <i className='xcon-angle-double-down'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeCV;
