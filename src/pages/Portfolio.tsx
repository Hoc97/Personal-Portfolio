import LeftPart from 'components/LeftPart';
import Preloader from 'components/Preloader';
import RightPart from 'components/RightPart';
import Menu from 'components/mobile/Menu';
import { FloatButton } from 'antd';
import { useState } from 'react';

const Portfolio = () => {
    const [showLeftPart, setShowLeftPart] = useState<boolean>(true);
    const [activeTab, setActiveTab] = useState<string>('home');

    return (
        // <!-- WRAPPER ALL -->
        <div className='arlo_tm_wrapper_all'>
            <div id='arlo_tm_popup_blog'>
                <div className='container'>
                    <div className='inner_popup scrollable'></div>
                </div>
                <span className='close'>
                    <a href='#'></a>
                </span>
            </div>

            {/* <!-- PRELOADER --> */}
            <Preloader />
            {/* <!-- /PRELOADER --> */}

            {/* <!-- MOBILE MENU --> */}
            <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
            {/* <!-- /MOBILE MENU --> */}

            {/* <!-- CONTENT --> */}
            <div className='arlo_tm_content'>
                {/* <!-- LEFTPART --> */}
                <LeftPart
                    showLeftPart={showLeftPart}
                    setShowLeftPart={setShowLeftPart}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                {/* <!-- /LEFTPART --> */}

                {/* <!-- RIGHTPART --> */}
                <RightPart showLeftPart={showLeftPart} setActiveTab={setActiveTab} />
                {/* <!-- /RIGHTPART --> */}

                <FloatButton.BackTop
                    onClick={() => setActiveTab('home')}
                    visibilityHeight={1000}
                    tooltip={<div>Scroll to top</div>}
                    duration={900}
                />
            </div>
        </div>
    );
};

export default Portfolio;
