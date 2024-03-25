import useModal from '@hooks/use-modal';
import React from 'react';
import Image from "next/image";
import bg from "@assets/img/blog/video-bg.jpg";
import VideoModal from '@components/common/modals/modal-video';

const NewsTopics = () => {
    const { isVideoOpen, setIsVideoOpen } = useModal();
    return (
        <>
            <div className="bd-blog-topic wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                <h4 className="bd-blog-topic-title">Know More About Preschool</h4>
                <p>Providing a quality upbringing and education is the hope and wish of every parent.
                    Here at Kidsdom Montessori, my staff and I are able to give you over twelve years of
                    experience in teaching.</p>
                <div className="bd-blog-topic-video p-relative mt-30 mb-35">
                    <div className="bd-blog-topic-thumb">
                        <Image src={bg} style={{ width: "100%", height: "100%" }} alt="img not found" />
                    </div>
                    <div className="bd-blog-topic-video-btn bd-pulse-btn">
                        <button type='button' className="popup-video" onClick={() => setIsVideoOpen(true)}><i className="flaticon-play-button"></i></button>
                    </div>
                </div>
                <div className="bd-blog-topic-list theme-bg-6">
                    <ul>
                        <li>Everyone one at the beginning of the day and take away when a rule of two is
                            broken.</li>
                        <li>Give everyone daily and let them exchange for another if they are doing a
                            great job.</li>
                        <li>Class Dojo points can be given for good behavior and when a certain number is
                            earned they
                            can switch their desk pet for another.</li>
                        <li>There are different ways they can be implemented according to your management
                            plan</li>
                    </ul>
                </div>
            </div>
            <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={"go7QYaQR494"} />
        </>
    );
};

export default NewsTopics;