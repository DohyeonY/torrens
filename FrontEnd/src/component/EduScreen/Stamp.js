import React from 'react';

import { useState } from "react";
import "./WebSoket.css"
import UseInterval from "../UseInterval"
import { useNavigate } from "react-router-dom";
import WebSoket2 from './Websoket2';
import useInterval from '../UseInterval';


function Stamp() {
    const navigate = useNavigate()
    const readyChange = () => {
        let ws = new WebSocket("ws://i8c203.p.ssafy.io:8003/command")
        ws.onmessage = (event) => {
          // setpressButton(event.data)
          if ( event.data === "OK" ) {
            navigate("/")
          }
          console.log(event.data)
        }
    }
      readyChange()
      UseInterval(() => {
        navigate("/")
      }, 5000)
    return (
        <>        
          <div
          style={{
              marginLeft: "0px",
              marginTop: "150px",
              float: "left",
              height: "1080px",
              width: "50%",
              zIndex: "-2"
          }}
          >
              <img style={{
                  // floate: "left",
                  height: "80%",
                  width: "150%",
              }} 
              src="img/edu/stamp1.gif" alt="dd"/>
          </div>
          <div style={{position: "absolute", zIndex: "-3"}}>
            <img 
              style={{
                position: "absolute",
                height:"1200px",
                width: "3300px",
              }}
              src="img/edu/bubble.gif" />
            </div>
          <WebSoket2 style={{zIndex: "-1"}}/>
        </>

        )
    }

export default Stamp;