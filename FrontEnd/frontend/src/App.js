import { useRef } from "react";
import { useInView } from "framer-motion";
import "./App.css";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true,     margin: "0px 100px -50px 0px" });

    // margin: "0px 100px -50px 0px"

  return (
    <section ref={ref}>
      <span
        style={{
          margin: "150px 0px 0px -50px",
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        <img id="image" src="img/코끼리.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "50px 0px 0px -523px",
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }}
      >
        <img id="image" src="img/곰돌이.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "-60px 0px 0px -520px",
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
        }}
      >
        <img id="image" src="img/사자.png" alt="test"/>
      </span>

      <span
        style={{
          margin: "-120px 0px 0px -520px",
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s"
        }}
      >
        <img id="image" src="img/선생님.png" alt="test"/>
      </span>
    </section>
  );
}

export default function App() {
  return (
    <>
      {/* <Section>Animate</Section> */}
      <Section></Section>

    </>
  );
}
