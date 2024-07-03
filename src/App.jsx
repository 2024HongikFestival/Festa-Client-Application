import styled from "styled-components";

function App() {
  return (
    <div>
      <h1>홍익대학교 멋쟁이사자처럼 2024 대동제 프로젝트입니다. 🦁</h1>
      <Example>컴끼얏호우</Example>
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
