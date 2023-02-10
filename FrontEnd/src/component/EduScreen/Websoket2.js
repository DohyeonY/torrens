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
import UseInterval from "../UseInterval"
import { Navigate } from 'react-router-dom';





function WebSoket2() {
    // const [msg, setMsg] = useState("")
    const [top, setTop] = useState("")
    const [upperLib0, setUpperLib0] = useState("")
    const [upperLib1, setUpperLib1] = useState("")
    const [leftEye, setleftEye] = useState("")
    const [img1, setImg1] = useState("img/edu/bling1.gif")
    const [img2, setImg2] = useState("img/edu/bling2.gif")
    const [img3, setImg3] = useState("img/edu/bling3.gif")
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
        
        let UpperLib1_img = document.querySelector('#virus1')
        UpperLib1_img.style.top = ((parseInt(UpperLibNum[1])) *1.2 ) + 'px'
        UpperLib1_img.style.left = ((parseInt(UpperLibNum[0])) / 2 + 1020) + 'px'
        // console.log(UpperLib_img.style.top)
        let UpperLib2_img = document.querySelector('#virus2')
        UpperLib2_img.style.top = ((parseInt(UpperLibNum[1])) *1.2 + 150) + 'px'
        UpperLib2_img.style.left = ((parseInt(UpperLibNum[0])) / 2 + 880) + 'px'
        // console.log(UpperLib_img.style.top)
        let UpperLib3_img = document.querySelector('#virus3')
        UpperLib3_img.style.top = ((parseInt(UpperLibNum[1])) *1.2) + 'px'
        UpperLib3_img.style.left = ((parseInt(UpperLibNum[0])) / 2 + 680) + 'px'
        // console.log(UpperLib_img.style.top)
        let LeftEye_img = document.querySelector('#sunglass')
        LeftEye_img.style.top = ((parseInt(LeftEyeNum[1])) *1.2 - 150) + 'px'
        LeftEye_img.style.left = ((parseInt(LeftEyeNum[0])) / 2 + 780) + 'px'

        // console.log(TopNum[0])
        // console.log(TopNum[1])

      }
    //   UseInterval(() => {
    //     setImg1('img/edu/bling2.gif')
    // }, 90000)
    //   UseInterval(() => {
    //     setImg2('img/edu/bling3.gif')
    //     setImg3('img/edu/bling1.gif')
    // }, 80000)
    return (
      <div>
        <div
          style={{
            height: "1080px",
            width: "50%",
            float: "right",

          }}
        >
            <img id="virus1" style={{ 
              position: "absolute",
              width: "200px",
              height: "150px"
              // Top: `${upperLib1}`,
              // Left: `${upperLib0}`
            }} src={img1} alt="img/edu/virus1.gif"/>
            <img id="virus2" style={{ 
              position: "absolute",
              width: "200px",
              height: "150px"
              // Top: `${upperLib1}`,
              // Left: `${upperLib0}`
            }} src={img2} alt="img/edu/virus2.gif"/>
            <img id="virus3" style={{ 
              position: "absolute",
              width: "200px",
              height: "150px"
            }} src={img3} alt="img/edu/virus3.gif"/>
            <img id="sunglass" style={{ 
              position: "absolute",
              width: "400px",
              height: "300px"
            }} src="img/edu/sunglass.png" alt="img/edu/virus3.gif"/>
        </div>
      </div>
    );

  }

export default WebSoket2;