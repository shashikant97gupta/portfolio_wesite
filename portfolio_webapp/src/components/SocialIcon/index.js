import React from "react";
import '../../assets/css/socialicon.css'

function SocialIcon() {
    return ( 
        <div className="social-container">
            <div className="social-wrapper">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                <i class="fa fa-github" aria-hidden="true"></i>
                <i class="fa fa-book" aria-hidden="true"></i>
            </div>
        </div>
     );
}

export default SocialIcon;