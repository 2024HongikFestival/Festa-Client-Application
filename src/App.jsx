import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*
  경로 설정은 여기에서 합니다! 자신이 만들 경로들 위에 주석으로 이름 표기 부탁드립니다. 🙇‍♀️
  페이지 url은 모두 소문자로 작성합니다.
*/
function App() {
  const { t, i18n } = useTranslation("translations");

  const clickHandler = (lang) => {
    console.log(`conver to ${lang}`);
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => clickHandler("en")}>English</button>
      <button onClick={() => clickHandler("ko")}>Korean</button>
      <div>{t("hello")}</div>
      <div>{t("goodbye")}</div>
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
