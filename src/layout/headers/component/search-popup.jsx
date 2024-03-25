import React from "react";

const SearchPopup = ({ isSearchOpen, setIsSearchOpen }) => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className={`bd-search-popup-area ${isSearchOpen ? "bd-search-opened" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bd-search-popup">
                <div className="bd-search-form">
                  <form onSubmit={handleSubmit}>
                    <div className="bd-search-input">
                      <input type="search" placeholder="Search here" />
                      <div className="bd-search-submit">
                        <button type="submit"><i className="flaticon-search"></i></button>
                      </div>
                    </div>
                  </form>
                  <div className="bd-search-close">
                    <div className="bd-search-close-btn">
                      <button type="button" onClick={() => setIsSearchOpen(false)}><i className="fa-thin fa-close"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`bd-search-overlay ${isSearchOpen ? "bd-search-opened" : ""}`} onClick={() => setIsSearchOpen(false)}></div>
    </>
  );
};

export default SearchPopup;
