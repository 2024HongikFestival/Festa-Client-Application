import styled from "styled-components";
import MoveToWdfBtn from "../../components/main/MoveToWDFBtn";
import { useTranslation } from "react-i18next";

export default function MainPage() {
  const { t, i18n } = useTranslation();

  const clickHandler = (lang) => {
    console.log(`conver to ${lang}`);
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <p>홍익 대동제 메인 페이지!</p>
      <div>아이오에오</div>
      <p>{t("hello")}</p>
      <p>{t("goodbye")}</p>
      <p>{t("main.sorry")}</p>
      <button onClick={() => clickHandler("ko")}>ko</button>
      <button onClick={() => clickHandler("en")}>en</button>
      <MoveToWdfBtn />
    </>
  );
}
