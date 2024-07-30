import { useTranslation } from "react-i18next";
import styled from "styled-components";
import MoveToWdfBtn from "../../components/main/MoveToWDFBtn";

export default function MainPage() {
  const { t, i18n } = useTranslation("translations");

  const clickHandler = (lang) => {
    console.log(`conver to ${lang}`);
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <div
        style={{
          width: "50rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "60rem",
          border: "solid 2px",
          borderColor: "black",
        }}
      >
        <p>홍익 대동제 메인 페이지!</p>
        <div>아이오에오</div>
        <p>{t("hello")}</p>
        <p>{t("goodbye")}</p>
        <button onClick={() => clickHandler("ko")}>ko</button>
        <button onClick={() => clickHandler("en")}>en</button>
        <MoveToWdfBtn />
      </div>
    </>
  );
}
