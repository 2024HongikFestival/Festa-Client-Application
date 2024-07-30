import React from "react";

const CompleteEvent = () => {
  return (
    <div
      style={{
        width: "25rem",
        display: "flex",
        flexDirection: "column",

        height: "60rem",
        border: "solid 2px",
        borderColor: "black",
        position: "relative",
      }}
    >
      {/* 임시 헤더 */}
      <div
        style={{
          width: "100%",
          height: "3.4375rem",
          backgroundColor: "#D9D9D9",
          position: "absolute",
          top: "0",
        }}
      ></div>
      {/* body */}
      <div
        style={{
          marginTop: "3.4375rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>응모 완료!</div>
        <div style={{ border: "1px solid gray", padding: "2rem 1rem" }}>
          <p>내일 경품을 미리 알려드려요!</p>
          <div
            style={{
              width: "100%",
              height: "12rem",
              backgroundColor: "#D9D9D9",
            }}
          >
            사진
          </div>
          <p>경품 이름</p>
          <p>내일 09:00 오픈</p>
        </div>
        {/* 하단 고정 플로팅 버튼 */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                width: "20rem",
                height: "3rem",
              }}
            >
              이벤트 공유
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteEvent;
