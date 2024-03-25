import React from "react";

const BlogReplyForm = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <div className="bd-contact-input mb-20">
            <label htmlFor="textarea">Comments <sup><i
              className="fa-solid fa-star-of-life"></i></sup></label>
            <textarea name="textarea" id="textarea" className="theme-bg-6"></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bd-contact-input mb-30">
            <label htmlFor="name">Name <sup><i
              className="fa-solid fa-star-of-life"></i></sup></label>
            <input id="name" type="text" className="theme-bg-6" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="bd-contact-input mb-30">
            <label htmlFor="email">Email <sup><i
              className="fa-solid fa-star-of-life"></i></sup></label>
            <input id="email" type="text" className="theme-bg-6" />
          </div>
        </div>
        <div className="col-md-12 mb-30">
          <div className="bd-contact-agree d-flex align-items-center">
            <input className="" type="checkbox" id="check-agree" />
            <label className="check-label" htmlFor="check-agree">Save Data for Next Comment</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="bd-contact-btn mb-15">
            <button type="submit" className="bd-btn">
              <span className="bd-btn-inner">
                <span className="bd-btn-normal">Post Comment</span>
                <span className="bd-btn-hover">Post Comment</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BlogReplyForm;
