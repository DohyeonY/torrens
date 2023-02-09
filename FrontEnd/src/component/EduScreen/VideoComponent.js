// import ReactPlayer from 'react-player/lazy';
import ReactPlayer from 'react-player';

import React, {useState, useEffect} from "react";
// import VideoPlayer from "react-video-js-player"
import YouTube from "react-youtube"
import UseInterval from "../UseInterval"

const VideoComponent = () => {
    const [mute, setMute] = useState(true)
    const [play, setPlay] = useState(false)
    const [volume, setVolume] = useState(0)
    // setVideo()

    // UseInterval(() => {
    //     console.log(`실행전${mute}`)
    //     setVolume(1)
    //     setMute(false)
    //     console.log(`실행후${mute}`)
    // }, 500)
    

    return (
        <>
        {/* <YouTube
            //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
            videoId={"BZmdxw3owWw"}
            //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
            //밑에서 더 설명하겠습니다.
            opts={{
                width: "560",
                height: "315",
                playerVars: {
                autoplay: 1, //자동재생 O
                mute: 1,
                rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                },
            }}
            //이벤트 리스너 
            onEnd={(e)=>{e.target.stopVideo(0);}}      
            /> */}
            <div 
            style={{
                marginLeft: "0px",
                marginTop: "150px",
                float: "left",
                height: "1080px",
                width: "50%",
            }}>
                <ReactPlayer
                    // url='/videos/1.mp4'
                    url= {["https://youtu.be/BZmdxw3owWw", "https://youtu.be/8sM0L5zFQ-Q"]}
                    width='1000px'         // 플레이어 크기 (가로)
                    height='1000px'        // 플레이어 크기 (세로)
                    muted={false}
                    controls={true}       // 플레이어 컨트롤 노출 여부
                    // onReady={() => {playing()}}
                    onError={(error) => {console.log(error);}}
                    />
            </div>
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