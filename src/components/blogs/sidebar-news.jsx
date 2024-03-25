import React from 'react';
import SidebarSearch from './sidebar-search';
import LatestPost from './latest-post';
import SidebarCategories from './sidebar-categories';
import SidebarTags from './sidebar-tags';

const SidebarNews = () => {
    return (
        <div className="bd-blog-sidebar-wrapper mb-60">
            <SidebarSearch />
            <LatestPost />
            <SidebarCategories />
            <SidebarTags />
        </div>
    );
};

export default SidebarNews;