import React from "react";

const EnterEvent = () => {
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
      <div style={{ marginTop: "3.4375rem" }}></div>
      {/* title */}
      <div>이벤트 응모하기</div>
      {/* form */}
      <form>
        <div>
          <p>이름</p>
          <input type="text" placeholder="ex. 홍길동" />
        </div>
        <div>
          <p>당첨 시 연락처</p>
          <input type="text" placeholder="‘-’ 없이 숫자만 (ex. 01012341234)" />
        </div>
        <div>
          <p>축제 후기를 들려주세요! (선택)</p>
          <input type="text" placeholder="당첨과 상관없ㅇ다~~" />
        </div>
        <div>글자수</div>

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
              응모 완료
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EnterEvent;
