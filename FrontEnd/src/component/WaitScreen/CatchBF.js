import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./CatchBF.css"

export default function CatchBF() {
    const navigate = useNavigate()
    const [timer, setTimer] = useState("00:00:00")
    const [hour, setHour] = useState("")
    // const [buttonTouch, setButtonTouch] = useState("")

    const currentTimer = () => {
        const date = new Date()
        const hours = String(date.getHours()).padStart(2, "0")
        const minutes = String(date.getMinutes()).padStart(2, "0")
        const seconds = String(date.getSeconds()).padStart(2, "0")
        setTimer(`${hours}시 ${minutes}분 ${seconds}초`)
        setHour(`${hours}`)

    }
    
    // const changePage = () => {
    //     navigate("/main")
    //     // console.log("onclick")
    // }
    // const onKeyDown = (e) => {
    //     if ( buttonTouch === "1" ) {
    //         changePage()
    //     }
    // }

    const startTimer = () => {
        setInterval(currentTimer, 1000)
        // console.log(hour)
        if ( hour === '12' ) {
            navigate("/eatlunch")
        } else if ( hour === "14") {
            navigate("/sleep")
        }
    }
    startTimer()
    return (
        <div>
            <div style={{ 
                width: "1536px",
                height: "864px",
                backgroundImage: "url(img/wait/CatchBF.gif)" 
                }}>
                <h1 style={{
                    textAlign: "left",
                    padding: "50px",
                    margin: "0px",
                    color: "white"
                }}>{timer}</h1>
            </div>
        </div>
    )
}