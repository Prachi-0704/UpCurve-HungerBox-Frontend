import React from 'react';
import './AboutSection.css'
import aboutImg from '../../assets/img/about.jpg';
import aboutImg2 from '../../assets/img/about-2.jpg';

const AboutSection = () => {
    return (
        <section id="about" className="about section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>About Us<br /></h2>
                <p><span>Learn More</span> <span className="description-title">About Us</span></p>
            </div>
            {/* End Section Title */}

            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                        <img src={aboutImg} className="img-fluid mb-4" alt="About Us" />
                    </div>
                    <div className="col-lg-5" data-aos="fade-up" data-aos-delay="250">
                        <div className="content ps-0 ps-lg-5">
                            <p className="fst-italic">
                                At Hunger Box, we understand the challenges that come with crowded cafeterias during peak hours. Long
                                lines and limited seating can turn a much-needed break into a time-consuming ordeal. That's why we created Hunger Box – to
                                provide a smarter way for employees to order their meals and avoid the hassle of waiting.
                            </p>
                            <p>
                                Hunger Box aims to create a more efficient and enjoyable break time for employees. By reducing
                                congestion in the cafeteria, we not only save time but also enhance the overall dining experience. We are committed to
                                bringing you delicious meals in a convenient and hassle-free manner.
                            </p>

                            <div className="position-relative mt-4">
                                <img src={aboutImg2} className="img-fluid" alt="About Us Video" />
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox pulsating-play-btn"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
