import React from 'react';
import Image from "next/image";
import shape from "@assets/img/shape/wave-section-break.png";

const features = [
    {
        id: 1,
        title: 'Exclusive',
        teaser: 'When it comes to success in the classroom.',
        iconStyle: 'icon-1',
        icon: 'flaticon-exclusive',
    },
    {
        id: 2,
        title: 'Highest Safety',
        teaser: 'Safety matters just as much as the academics.',
        iconStyle: 'icon-2',
        icon: 'flaticon-humanitarian-help',
    },
    {
        id: 3,
        title: 'Hassle Free',
        teaser: 'Consistent with Friend ship’s focus on kindedo.',
        iconStyle: 'icon-3',
        icon: 'flaticon-like-1',
    },
    {
        id: 4,
        title: 'Free Shipping',
        teaser: 'Guided by teachers who are veste student success.',
        iconStyle: 'icon-4',
        icon: 'flaticon-delivery',
    }
]

const HomeThreeFeature = ({wave}) => {
    return (
        <div className="bd-feature-area p-relative theme-bg pt-120 pb-120">
            {wave &&
                <div className="bd-feature-bottom-shape">
                    <Image src={shape} style={{ width: "100%", height: "100%" }} alt="img not found" />
                </div>
            }
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="bd-section-title-wrapper is-white text-center mb-55 wow fadeInUp" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <h2 className="bd-section-title mb-0">Why Kindedo Best</h2>
                            <p>View classes by age, program, or subject. Check out upcoming camps<br /> and special events too!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bd-feature-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="row">
                        <div className="col-12">
                            <ul className="feature">
                                {features.map((item) => (
                                    <li className="feature-item" key={item.id}>
                                        <div className="bd-feature">
                                            <div className="bd-feature-content">
                                                <div className={`bd-feature-icon ${item.iconStyle}`}>
                                                    <i className={item.icon}></i>
                                                </div>
                                                <h4 className="bd-feature-title">{item.title}</h4>
                                                <p>{item.teaser}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeThreeFeature;