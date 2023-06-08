import React, { useState, useEffect } from 'react';
import './Loading.css';
import video from '../../Assets/travelvideo.mp4'

const Loading = () => {

    const [screenWidth, setScreenWidth] = useState(0);

    const getCurrentWidth = () => {
        setScreenWidth(window.innerWidth);
    }

    useEffect(()=> {
        window.addEventListener('resize', getCurrentWidth);
    }, [screenWidth]);
    
    return (
        <div className="video-container">
            <div className="svg-container">
                <svg
                viewBox="0 0 1300 250"
                xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="videoText" clipPathUnits="objectBoundingBox">
                            {screenWidth > 500 
                                ? <text x="15%" y="98%" textLength="100%">Rivera Travel</text>
                                : <>
                                    <text x="40%" y="80%" textLength="50%">Rivera</text>
                                    <text x="40%" y="120%" textLength="50%">Travel</text>
                                  </>
                            }
                        </clipPath>
                    </defs>
                </svg>
            </div>

            <video loop autoPlay muted>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Loading;