import styled from 'styled-components';
import MoveToWdfBtn from '@/components/main/MoveToWdfBtn';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const { t, i18n } = useTranslation();

  const clickHandler = (lng) => {
    console.log(`conver to ${lng}`);
    localStorage.setItem('language', lng);
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <p>홍익 대동제 메인 페이지!</p>
      <div>아이오에오</div>
      <p>{t('hello')}</p>
      <p>{t('goodbye')}</p>
      <p>{t('main.sorry')}</p>
      <button onClick={() => clickHandler('ko')}>ko</button>
      <button onClick={() => clickHandler('en')}>en</button>
      <MoveToWdfBtn />
      <div>출근하기 싫어요</div>
      <p>2024 hongik fetival</p>
      <p>힝구힝구</p>
      <Text>라인업</Text>
      <Text2>와디페 타이포 적용 중</Text2>
      <Text3>히히히히</Text3>
      <Text4>헤헤ㅔ헤헤</Text4>
      <Text5>개귀찮다진짜</Text5>
      <Text6>럭키비키잔앙</Text6>
    </>
  );
}

const Text = styled.p`
  ${(props) => props.theme.fontStyles.main.headline1}
`;

const Text2 = styled.p`
  ${(props) => props.theme.fontStyles.main.headline2}
`;

const Text3 = styled.p`
  ${(props) => props.theme.fontStyles.main.headline3}
`;

const Text4 = styled.p`
  ${(props) => props.theme.fontStyles.main.headline4}
`;

const Text5 = styled.p`
  ${(props) => props.theme.fontStyles.main.headline5}
`;

const Text6 = styled.p`
  ${(props) => props.theme.fontStyles.main.headline6}
`;
