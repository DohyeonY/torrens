import React from 'react';

// import { useEffect } from "react";
// import { useState } from "react";
// import { io } from "socket.io-client"
// import { useInView } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import "./WebSoket.css";
// import '~video-react/dist/video-react.css';
import { Player } from 'video-react';




function WebSoket() {
    // const [msg, setMsg] = useState("")
    // const [top, setTop] = useState("")
    let ws = new WebSocket("ws://i8c203.p.ssafy.io:8002")
    ws.onmessage = (event) => {
        // setMsg(event.data)
        let datas = JSON.parse(event.data)
        // setTop(event.data.Top)
        // console.log("123")
        let TopNum = datas['Top'].split(',')
        // console.log(datas.Top)
        // console.log(top)
        let Top_img = document.querySelector('#Top')
        Top_img.style.top = (parseInt(TopNum[1])) *1.2 + 'px'
        Top_img.style.left = (parseInt(TopNum[0])) / 2 + 'px'
        console.log(TopNum[0])
        console.log(TopNum[1])

    }
    return (
      <div className="App">
        <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
        {/* <div id="video">
            <video ref={videoRef} controls="controls">
                <source src={video} type="video/avi"/>
            </video></div> */}
        <div id="websoket"><img id="Top" src="img/세균.jpg" alt="img/123.png"/></div>
      </div>
    );

  }

export default WebSoket;