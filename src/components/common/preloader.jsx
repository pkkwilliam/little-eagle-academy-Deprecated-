import Image from 'next/image';
import React from 'react';
import loaderImg from "@assets/img/bg/preloader.png";

const Preloader = () => {
    return (
        <div id="loading">
            <div id="preloader">
                <div className="preloader-thumb-wrap">
                    <div className="preloader-thumb">
                    <div className="preloader-border"></div>
                        <Image src={loaderImg} style={{ width: "auto", height: "auto" }} alt="loader img"  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;