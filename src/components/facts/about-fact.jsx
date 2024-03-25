import CountUpContent from '@components/common/counter';
import React from 'react';

const fact_items = [
    {
        id: 1,
        count: '14',
        title: <>years of<br/> experience</>,
        icon: 'flaticon-user-interface',
        text: '+',
    },
    {
        id: 2,
        count: '7',
        title: <>Students<br/> each year</>,
        icon: 'flaticon-reading',
        text: 'K+',
    },
    {
        id: 3,
        count: '15',
        title: <>Award<br/> Wining</>,
        icon: 'flaticon-badge',
        text: '+',
    }
];

const AboutFact = () => {
    return (
        <div className="bd-counter-area-2 pb-90">
            <div className="container">
                <div className="row justify-content-center">
                {fact_items.map((item) => (
                    <div className="col-lg-4 col-md-10 col-sm-10" key={item.id}>
                        <div className="bd-counter-2 mb-30">
                            <div className="bd-counter-2-icon">
                                <i className={item.icon}></i>
                            </div>
                            <div className="bd-counter-2-content">
                                <div className="bd-counter-2-number">
                                    <CountUpContent number={item.count} add_style={false} text={item.text} />
                                </div>
                                <div className="bd-counter-2-text">
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default AboutFact;