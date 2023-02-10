import React from 'react';

// import { useEffect } from "react";
import { useState } from "react";
// import { io } from "socket.io-client"
// import { useInView } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import "./WebSoket.css"
// import '~video-react/dist/video-react.css';
// import { Player } from 'video-react';
import Video from "./VideoComponent"
import Websoket from "./WebSoket"
import UseInterval from '../UseInterval';
import { useNavigate } from "react-router-dom";

export default function EduScreen () {
    const navigate = useNavigate()
    UseInterval(() => {
        navigate("/stamp")
      }, 120000)

      
    return (
        <>        
        <Video/>
        <Websoket/>  
        </>

        )
    }