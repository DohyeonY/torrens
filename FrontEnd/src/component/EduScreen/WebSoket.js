import React from 'react';

// import { useEffect } from "react";
import { useState } from "react";
// import { io } from "socket.io-client"
// import { useInView } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import "./WebSoket.css"
// import '~video-react/dist/video-react.css';
// import { Player } from 'video-react';
// import Video from "./VideoComponent"





function WebSoket() {
    // const [msg, setMsg] = useState("")
    const [top, setTop] = useState("")
    const [upperLib0, setUpperLib0] = useState("")
    const [upperLib1, setUpperLib1] = useState("")
    const [leftEye, setleftEye] = useState("")
    let ws = new WebSocket("ws://i8c203.p.ssafy.io:8002")
    ws.onmessage = (event) => {
        // setMsg(event.data)
        let datas = JSON.parse(event.data)
        console.log(event.data)
        // console.log("123")
        // let TopNum = datas['Top'].split(',')
        let UpperLibNum = datas['upperLib'].split(',')
        let LeftEyeNum = datas['leftEye'].split(',')
        // setTop(event.data.Top)
        // setUpperLib0((parseInt(UpperLibNum[0])) / 2 + 'px')
        // setUpperLib1((parseInt(UpperLibNum[1])) *1.2 + 'px')
        // setleftEye(LeftEyeNum)
        // console.log(datas.Top)
        // console.log(top)
        // let Top_img = document.querySelector('#Top')
        // Top_img.style.top = (parseInt(TopNum[1])) *1.2 + 'px'
        // Top_img.style.left = (parseInt(TopNum[0])) / 2 + 'px'
        
        let UpperLib_img = document.querySelector('#virus')
        UpperLib_img.style.top = ((parseInt(UpperLibNum[1])) *1.2 + 100) + 'px'
        UpperLib_img.style.left = ((parseInt(UpperLibNum[0])) / 2 + 1100) + 'px'
        console.log(UpperLib_img.style.top)
        // let LeftEye_img = document.querySelector('#LeftEye')
        // LeftEye_img.style.top = (parseInt(LeftEyeNum[1])) *1.2 + 'px'
        // LeftEye_img.style.left = (parseInt(LeftEyeNum[0])) / 2 + 'px'

        // console.log(TopNum[0])
        // console.log(TopNum[1])
    }
    return (
      <div>
        <div
          style={{
            height: "1080px",
            width: "50%",
            float: "right",

          }}
        >
            <img id="virus" style={{ 
              position: "absolute",
              // Top: `${upperLib1}`,
              // Left: `${upperLib0}`
            }} src="img/edu/virus1.gif" alt="img/edu/virus1.gif"/>
            {/* <img id="UpperLib" src="img/edu/virus2.gif" alt="img/123.png"/>
            <img id="UpperLib" src="img/edu/virus3.gif" alt="img/123.png"/>
            <img id="LeftEye" src="img/edu/sunglass.png" alt="img/123.png"/> */}
        </div>
      </div>
    );

  }

export default WebSoket;