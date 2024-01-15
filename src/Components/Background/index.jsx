import backgroundVideo from '../../Assets/background3.mp4';
import './Background.css';


const BackgroundVideo = ({id}) => {

    return (
        <div className="background-video-container" id={id} >
            <video className='background-video' autoPlay loop muted playsInline>
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
        </div>
    )

}

export default BackgroundVideo;