// import React, { useState, useEffect } from "react";
// import "./Heart.css"; // CSS 파일 import
// import { FaHeart } from "react-icons/fa6";

// const Heart = ({ position }) => {
//   return (
//     <div className="heart" style={{ left: `${position}%` }}>
//       <FaHeart />
//     </div>
//   );
// };

// const FloatingHearts = () => {
//   const [hearts, setHearts] = useState([]);

//   const addHeart = () => {
//     const newHeart = {
//       id: Date.now(),
//       position: Math.random() * 100, // 랜덤 가로 위치 (0-100%)
//     };
//     setHearts((prevHearts) => [...prevHearts, newHeart]);
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setHearts((prevHearts) => prevHearts.slice(1)); // 가장 오래된 하트 제거
//     }, 2000); // 2초마다 실행

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="floating-hearts-container">
//       <button onClick={addHeart}>좋아요!</button>
//       {hearts.map((heart) => (
//         <Heart key={heart.id} position={heart.position} />
//       ))}
//     </div>
//   );
// };

// export default FloatingHearts;
