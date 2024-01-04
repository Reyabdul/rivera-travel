import backgroundVideo from '../../Assets/background3.mp4';
import './Background.css';


export const BackgroundVideo = ({activeLinkId}) => {

    if(activeLinkId === "services" || activeLinkId === "destinations" ) {
        return (<></>);
    } else {
        return (
            <div className="bckground-video-container" id='background-video-container' >
                <video className='background-video' autoPlay loop muted playsInline>
                    <source src={backgroundVideo} type="video/mp4"/>
                </video>
                {/*<h1 className='temp-heading'>Under Construction</h1>*/}
            </div>
        )
    }

}

export default BackgroundVideo;