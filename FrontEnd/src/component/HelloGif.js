import React from 'react';
import { useRef } from "react";
// import { useEffect } from "react";
import { useInView } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import "./Hello.css";


function Section({ children }) {
//   const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true,     margin: "0px 100px -50px 0px" });

  // const changePage = setTimeout(() => {
  //   navigate("/next")
  // }, 5000)
//   useEffect(() => {
//     console.log('changepage페이지 변경')
//     setTimeout(() => {
//       navigate("/next")
//     }, 5000)
//   })

return (
    <section ref={ref}>
      
      <span
        style={{
          margin: "0px 0px 0px -500px",
          transform: isInView ? "translateX(1000px) translateY(0px)" : "translateX(1000px) translateY(0px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.05, 0.5, 0.55, 1)",
          
        }}
      >
        <img id="image" src="img/코끼리움짤.gif" alt="test"/>
      </span>

      <span
        style={{
          margin: "50px 0px 0px -500px",
          transform: isInView ? "translateX(1200px) translateY(0px)" : "translateX(1200px) translateY(0px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/고양이움짤.gif" alt="test"/>
      </span>

      <span
        style={{
          margin: "-60px 0px 0px -530px",
          transform: isInView ? "translateX(350px) translateY(150px)" : "translateX(350px) translateY(150px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/사자움짤.gif" alt="test"/>
      </span>

      <span
        style={{
          margin: "-120px 0px 0px -520px",
          transform: isInView ? "translateX(-100px) translateY(100px)" : "translateX(-100px) translateY(100px)",
          opacity: isInView ? 1 : 1,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
        }}
      >
        <img id="image" src="img/여우움짤.gif" alt="test"/>
      </span>
    </section>
  );
}

export default function HelloGif() {
  return (

    <Section></Section>
  )
}