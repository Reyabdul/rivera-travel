import './Loading.css';
import video from '../../Assets/travelvideo.mp4'

const Loading = () => {
    return (
        <div className="video-container">
            <svg viewBox="0 0 100 100">
                <defs>
                    <clipPath id="videoText">
                        <text>Rivera Travel</text>
                    </clipPath>
                </defs>
            </svg>

            <video loop autoPlay muted>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Loading;