// import ReactPlayer from 'react-player/lazy';
import ReactPlayer from 'react-player/youtube';
// import React, {useEffect, useState} from "react";
// import VideoPlayer from "react-video-js-player"
import YouTube from "react-youtube"

const VideoComponent = () => {

    // setVideo()
    return (
        <>
            <ReactPlayer 
                url={['https://youtu.be/BZmdxw3owWw','https://youtu.be/8sM0L5zFQ-Q' ]}
                width='1000px'         // 플레이어 크기 (가로)
                height='600px'        // 플레이어 크기 (세로)
                playing={true}        // 자동 재생 on
                muted={true}
                controls={false}       // 플레이어 컨트롤 노출 여부
                />
        </>
    )
}

export default VideoComponent;

// import videojs from "video.js";
// import "videojs-youtube";

// const Player = (props) => {
//   const [videoEl, setVideoEl] = useState(null);

//   const onVideo = useCallback((el) => {
//     console.log(el)
//     setVideoEl(el);
//   }, []);

//   // useEffect(() => {
//   //   const player = videojs(videoEl, props);
//   //   return () => {
//   //     player.dispose();
//   //   };
//   // }, [props, videoEl]);

//   return (
//     <div data-vjs-player>
//       <video
//         id="my-video"
//         ref={onVideo}
//         className="video-js vjs-theme-city"
//         playsInline
//         controls
//         preload="auto"
//         width="640"
//         height="264"
//         data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=IkOVe40Sy0U"}] }'
//         >
//       </video>
//     </div>
//   );
// };

// export default Player;