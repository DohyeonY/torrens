import React from 'react';
// import { useRef } from "react";
import { useState } from "react";
// import { useInterval } from "react";
import { useEffect } from "react";
// import { useCallback } from "react"
// import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import UseInterval from "../UseInterval"
// import "../Hello.css";
// const idleTimeout = 1000
function Notice () {
    console.log("노티스 함수 실행")
    const [checkTimer, setcheckTimer] = useState(0)
    const [pressButton, setpressButton] = useState("")
    const navigate = useNavigate()
    UseInterval(() => {
        console.log("123")
        if ( checkTimer === 3) {
            navigate("/eatlunch")
        } else if ( checkTimer < 4 ) {
            setcheckTimer(checkTimer +1)
        }
    }, 30000)

    const readyChange = () => {
      let ws = new WebSocket("ws://i8c203.p.ssafy.io:8003/command")
      ws.onmessage = (event) => {
        setpressButton(event.data)
        if ( event.data === "PressButton" ) {
          navigate("/websocket")
        }
        console.log(pressButton)
        console.log(event.data)
      }
  }
    readyChange()
 return (
        <>
            <img style={{
                margin: "auto",
                marginTop: "200px",
                display: "flex",
                justifyContent: "center",

            }}
            src="img/edu/notice.png" alt="1234"/>
            <h1 style={{
                fontSize: "50px",
                color: "white"
            }}>버튼을 한 번더 눌러주세요!</h1>
        </>
 )   
}
export default function notice() {
    return (
        <Notice></Notice>
    )
    
}