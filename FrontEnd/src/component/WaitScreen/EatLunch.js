import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./CatchBF.css"
// import UseInterval from "../UseInterval"

export default function CatchBF() {
    const navigate = useNavigate()
    const [timer, setTimer] = useState("00:00:00")
    const [hour, setHour] = useState("")
    const [exist, setExist] = useState("")

    const currentTimer = () => {
        const date = new Date()
        const hours = String(date.getHours()).padStart(2, "0")
        const minutes = String(date.getMinutes()).padStart(2, "0")
        const seconds = String(date.getSeconds()).padStart(2, "0")
        setTimer(`${hours}시 ${minutes}분 ${seconds}초`)
        setHour(`${hours}`)

    }
    const readyChange = () => {
        let ws = new WebSocket("ws://i8c203.p.ssafy.io:8002")
        ws.onmessage = (event) => {
            setExist(event.data.Top)
        }
    }

    const startTimer = () => {
        setInterval(currentTimer, 1000)
        console.log(hour)
        if (hour === "14") {
            navigate("/sleep")
        } else if (hour === "12") {

        } else {
            navigate("/")
        }
        if (exist !== "") {
            setExist("")
            navigate("/main")
        }
    }
    readyChange()
    startTimer()
    return (
        <div>
            <div style={{
                width: "1920px",
                height: "1080px",
                // backgroundImage: "url(img/wait/EatLunch.gif)" 
            }}>
                <h1 style={{
                    textAlign: "left",
                    padding: "50px",
                    margin: "0px",
                    color: "white"
                }}>{timer}</h1>
                <img style={{
                    paddingRight: "800px",
                    marginTop: "100px",
                }}
                    src="img/wait/EatLunch.gif" alt="123" />
            </div>
        </div>
    )
}