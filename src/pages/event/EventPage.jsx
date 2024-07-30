import React from "react";

const EventPage = () => {
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
      <div style={{ marginTop: "3.4375rem" }}>
        {/* 이벤트 기본 정보 */}
        <div>
          <p>이벤트 이름</p>
          <p>2024 홍익 대동제 1일차 래플</p>
        </div>
        {/* 경품 사진 및 남은 기간(데이터로 계산) */}
        <div style={{ position: "relative" }}>
          {/* 사진 */}
          <div
            style={{
              width: "100%",
              height: "12rem",
              backgroundColor: "#D9D9D9",
            }}
          ></div>
          {/* 남은 기간 */}
          <div style={{ position: "absolute", top: "0", right: "0" }}>
            마감까지 00:00:00
          </div>
        </div>
        {/* 현재 응모자 수  */}
        <p>지금 n명이 응모했어요!</p>
        {/* 경품 이름 및 공유 버튼*/}
        <div>
          <p>에어팟 프로 2세대</p>
          {/* 공유 아이콘 */}
        </div>
        {/* 경품 가격 */}
        <div>
          <p>가격</p>
        </div>
        {/* 이벤트 세부 정보 */}
        <div>
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <p>응모 대상</p>
            <p>
              재학생 외부인 상관없이 <br />
              지금 홍익대학교 축제를 즐기고 있다면 누구나
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <p>응모 조건</p>
            <p>매일 1인 1회 참여 가능 지매일 1인 1회 참여 가능</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <p>응모 기간</p>
            <p>9월 25일 09:00 ~ 9월 25일 18:00</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <p>발표일</p>
            <p>9월 28일 14:00</p>
          </div>
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
            <p>유의 사항</p>

            <button
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                width: "20rem",
                height: "3rem",
              }}
            >
              이벤트 응모
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
