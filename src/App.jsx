import styled from "styled-components";

/*
  경로 설정은 여기에서 합니다! 자신이 만들 경로들 위에 주석으로 이름 표기 부탁드립니다. 🙇‍♀️
// 페이지 url은 모두 소문자로 작성합니다.
*/
function App() {
  return (
    <div>
      <h1>홍익대학교 멋쟁이사자처럼 2024 대동제 프로젝트입니다. 🦁</h1>
      <Example>컴끼얏호우</Example>
      {/* 😽 윤서 ---------- */}
    </div>
  );
}

export default App;

const Example = styled.div`
  width: 500px;
  height: 100px;
  border: solid 3px;
  border-radius: 10px;
`;
