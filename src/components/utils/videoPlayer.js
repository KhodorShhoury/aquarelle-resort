import React, { useState } from "react";
import "../../scss/utils/VideoPlayer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = ({ videoUrl }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="play-button" onClick={openModal}>
                    <FontAwesomeIcon icon={faPlay} />
            </div>
            {isOpen && (
                <>
                    <div
                        className="blur-background"
                        onClick={closeModal}
                    ></div>
                    <div className="video-container" onClick={closeModal}>
                        <video controls className="video-player">
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                    </div>
                </>
            )}
        </>
    );
};
export default VideoPlayer;
