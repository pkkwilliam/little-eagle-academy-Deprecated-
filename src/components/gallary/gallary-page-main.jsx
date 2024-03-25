import ImageLightBox from '@components/common/modals/image-lightbox';
import gallary_data from '@data/gallary-data';
import Image from 'next/image';
import React, { useState } from 'react';

const GallaryPageMain = () => {

    // photoIndex
    const [photoIndex, setPhotoIndex] = useState(null);
    // image open state
    const [open, setOpen] = useState(false);
    // handleImagePopup
    const handleImagePopup = (index) => {
        setPhotoIndex(index);
        setOpen(true);
    };
    //  images
    const images = gallary_data.map((item) => item.img.src);

    return (
      <>
        <div className="bd-gallery-area p-relative pt-120 pb-95 p-relative">
          <div className="container">
            <div className="row">
              {gallary_data.slice(5, 11).map((item, index) => (
                <div className={item.wrap} key={index}>
                  {!item.inners && (
                    <div
                      className="bd-gallery mb-25 wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".3s"
                    >
                      <div className="bd-gallery-thumb-wrapper">
                        <div className="bd-gallery-thumb">
                          <Image
                            src={item.img}
                            style={{ width: "100%", height: "100%" }}
                            alt="img not found"
                          />
                        </div>
                        <div className="bd-gallery-icon">
                          <a
                            onClick={() => handleImagePopup(index)}
                            className="popup-image"
                          >
                            <i className="flaticon-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.inners && (
                    <div className="row">
                      {item.inners.map((inner, index) => (
                        <div className="col-12" key={inner.id}>
                          <div
                            className="bd-gallery mb-25 wow fadeInUp"
                            data-wow-duration="1s"
                            data-wow-delay=".3s"
                          >
                            <div className="bd-gallery-thumb-wrapper">
                              <div className="bd-gallery-thumb">
                                <Image
                                  src={inner.img}
                                  style={{ width: "100%", height: "100%" }}
                                  alt="img not found"
                                />
                              </div>
                              <div className="bd-gallery-icon">
                                <a
                                  onClick={() => handleImagePopup(index)}
                                  className="popup-image"
                                >
                                  <i className="flaticon-eye"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <ImageLightBox
          images={images}
          open={open}
          setOpen={setOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      </>
    );
};

export default GallaryPageMain;