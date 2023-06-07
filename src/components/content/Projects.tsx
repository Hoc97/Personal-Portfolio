import { Modal } from 'antd';
import { useState } from 'react';
import { IoLogoTwitter } from 'react-icons/io';
import { MdEditNote } from 'react-icons/md';
import { BsArrowRight, BsMenuApp } from 'react-icons/bs';

interface IProject {
    image: JSX.Element,
    title: string,
    content: string,
    detail: {
        description: string,
        technology: {
            F: string,
            B: string,
        },
        member: string,
        role: string,
        demo: string,
        github: string,
    };
}

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataModal, setDataModal] = useState<IProject | null>(null);

    const showModal = (item: IProject) => {
        setIsModalOpen(true);
        setDataModal(item);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const data: IProject[] = [
        {
            image: <BsMenuApp color="#e3872d" />,
            title: 'Quiz App',
            content: 'Website làm bài thi tiếng anh',
            detail: {
                description: '1.Xây dụng mạng xã hội giúp kết nối mọi người',
                technology: {
                    F: 'React, Redux, Ant Design',
                    B: 'NodeJs, MongoDB'
                },
                member: '',
                role: '',
                demo: 'abc.com.vn',
                github: 'https://github.com/Hoc97'
            }
        },
        {
            image: <MdEditNote color='#1194f5' />,
            title: 'Note App',
            content: 'Website hỗ trợ ghi chú tiện lợi cho công việc, cuộc sống',
            detail: {
                description: '2.Xây dụng mạng xã hội giúp kết nối mọi người',
                technology: {
                    F: 'React, Redux, Ant Design',
                    B: 'NodeJs, MongoDB'
                },
                member: '',
                role: '',
                demo: 'abc.com.vn',
                github: 'https://github.com/Hoc97'
            }
        },
        {
            image: <IoLogoTwitter color='#1da1f2' />,
            title: 'Twitter Clone',
            content: 'Website mạng xã hội giúp kết nối mọi người có cùng chung sở thích',
            detail: {
                description: '3.Xây dụng mạng xã hội giúp kết nối mọi người',
                technology: {
                    F: 'React, Redux, Ant Design',
                    B: 'NodeJs, MongoDB'
                },
                member: '',
                role: '',
                demo: 'abc.com.vn',
                github: 'https://github.com/Hoc97'
            }
        },

    ];

    return (
        <>
            <Modal
                title={dataModal && dataModal.title ? `Dự án ${dataModal.title}` : ''}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}

            >
                {dataModal?.title && (
                    <ul style={{ marginLeft: '10px' }} >
                        <li>Miêu tả: {dataModal.detail.description}</li>
                        <li>FrontEnd:  {dataModal.detail.technology.F}</li>
                        <li>BackEnd:  {dataModal.detail.technology.B}</li>
                        <li>Demo:{' '}
                            <a href='#'>{dataModal.detail.demo}</a>
                        </li>
                        <li>GitHub:{' '}
                            <a href='#'>{dataModal.detail.github}</a>
                        </li>
                    </ul>
                )}

            </Modal>
            <div className='arlo_tm_section' id='projects'>
                <div className='arlo_tm_services_wrap'>
                    <div className='container'>
                        <div className='arlo_tm_title_holder'>
                            <h3>Projects</h3>
                            <span>See me completed projects</span>
                        </div>
                        <div className='list_wrap'>
                            <ul>
                                {data.map((item, index) => {
                                    return (
                                        <li key={index} onClick={() => showModal(item)} style={{ cursor: 'pointer' }}>
                                            <div className='inner'>
                                                <div className='icon'>
                                                    <span>{item.image}</span>
                                                </div>
                                                <div className='title_service'>
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className='text'>
                                                    <p>{item.content}</p>
                                                </div>
                                                <div className='view_detail'>
                                                    <span>
                                                        <BsArrowRight />
                                                        Xem chi tiết
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
