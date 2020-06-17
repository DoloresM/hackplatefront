import React from 'react';

import classes from './BackgroundVideo.css';

const BackgroundVideo = () => {
    const videoSource = "https://vod-progressive.akamaized.net/exp=1592368868~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4404%2F13%2F347024091%2F1397843845.mp4~hmac=fb41ef3cbbe0d934848518725a0788156b32533153ea765d5937ea60f8922283/vimeo-prod-skyfire-std-us/01/4404/13/347024091/1397843845.mp4?filename=Food+-+24999.mp4"
    return (
        <div style={{maxHeight: "100vh" }}>
            <video autoPlay="autoplay" loop="loop" muted  style={{background: "green", minWidth: "100%", minHeight: "100vh", margin: "0",padding: "0"}} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default BackgroundVideo
