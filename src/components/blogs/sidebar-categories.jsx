import Link from 'next/link';
import React from 'react';

const sidebar_cats = [
    {
        id: 1,
        catName: 'Kindergarten',
        catCount: '04',
    },
    {
        id: 2,
        catName: 'Daycare',
        catCount: '03',
    },
    {
        id: 3,
        catName: 'Preschool',
        catCount: '02',
    },
    {
        id: 4,
        catName: 'Children',
        catCount: '04',
    }
]

const SidebarCategories = () => {
    return (
        <div className="bd-blog-sidebar mb-50 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
            <h5 className="bd-blog-sidebar-title">Categories</h5>
            <div className="bd-blog-sidebar-cat">
                <ul>
                    {sidebar_cats.map((item) => (
                        <li key={item.id}>
                            <Link href="/news">
                                <span>{item.catName}</span>
                                <span>{item.catCount}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SidebarCategories;