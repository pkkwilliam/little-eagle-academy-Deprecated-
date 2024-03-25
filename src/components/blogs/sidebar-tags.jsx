import Link from 'next/link';
import React from 'react';

const sidebar_tags = [
    {
        id: 1,
        tagName: 'Children',
    },
    {
        id: 2,
        tagName: 'Education',
    },
    {
        id: 3,
        tagName: 'Preschool',
    },
    {
        id: 4,
        tagName: 'Parents',
    },
    {
        id: 5,
        tagName: 'Dance',
    },
    {
        id: 6,
        tagName: 'Drawing',
    }
]

const SidebarTags = () => {
    return (
        <div className="bd-blog-sidebar mb-50 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
            <h5 className="bd-blog-sidebar-title">Tags</h5>
            <div className="bd-blog-sidebar-content">
                <div className="bd-blog-sidebar-tag">
                    <ul>
                        {sidebar_tags.map((item) => (
                            <li key={item.id}><Link href="/news">{item.tagName}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SidebarTags;