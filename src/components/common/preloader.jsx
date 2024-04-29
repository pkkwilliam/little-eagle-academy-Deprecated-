import Image from "next/image";
import React from "react";
import loaderImg from "@assets/img/logo/logo_combine.png";

const Preloader = () => {
  return (
    <div id="loading">
      <div id="preloader">
        <div className="preloader-thumb-wrap">
          <div className="preloader-thumb">
            <div className="preloader-border"></div>
            <Image
              src={loaderImg}
              style={{ width: "38%", height: "38%" }}
              alt="loader img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
