import React from 'react';

const SidebarSearch = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
      }
      
    return (
        <div className="bd-blog-sidebar mb-50 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
            <h5 className="bd-blog-sidebar-title">Search</h5>
            <div className="bd-blog-sidebar-content">
                <div className="bd-blog-search">
                    <form onSubmit={handleSubmit}>
                        <div className="bd-blog-search-input-2">
                            <input type="text" placeholder="Type here..." id="bd-blog-search-input-label" />
                            <div className="bd-blog-search-submit">
                                <button type="submit"><i className="flaticon-search"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SidebarSearch;