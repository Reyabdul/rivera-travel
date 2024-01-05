import backgroundVideo from '../../Assets/background3.mp4';
import './Background.css';


const BackgroundVideo = ({id, activeLinkId}) => {

    const section = document.querySelector("section");

    return (
        <div className="background-video-container" id={id} >
            <video className='background-video' autoPlay loop muted playsInline>
                <source src={backgroundVideo} type="video/mp4"/>
            </video>
            {/*<h1 className='temp-heading'>Under Construction</h1>*/}
        </div>
    )

}

export default BackgroundVideo;