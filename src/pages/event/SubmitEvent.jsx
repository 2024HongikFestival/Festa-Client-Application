import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { handleShare } from '@/utils/event/handleShare';
import graphicBg from '@/assets/webps/event/graphic.webp';
import shareIcon from '@/assets/webps/event/shareIcon.webp';

const SubmitEvent = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState(false);
  const location = useLocation();

  const { date } = location.state || {};
  console.log(date);

  const instagramUrl = 'https://www.instagram.com/hiufestival_official/';

  useEffect(() => {
    setLang(!lang);
  }, [localStorage.getItem('i18nextLng')]);

  const renderContent = () => {
    if (date === 1 || date === 2) {
      return (
        <ContentBox1>
          {t(`event.result.description1`)}&nbsp;<span>{t(`event.result.description2`)}</span>
          {t(`event.result.description3`)}
          <br />
          {t(`event.result.description4`)}
        </ContentBox1>
      );
    } else if (date === 3) {
      return (
        <ContentBox2>
          <p>{t(`event.result.last.description1`)}</p>
          {t(`event.result.last.description2`)}
          <span>
            {t(`event.result.last.description3`)}
            <br />
            <span
              onClick={() => {
                window.open(instagramUrl);
              }}
              style={{ textDecoration: 'underline', textUnderlineOffset: '2px', cursor: 'pointer' }}
            >
              @hiufestival_official
            </span>
            &nbsp;{t(`event.result.last.description4`)}
          </span>
          {t(`event.result.last.description5`)}
        </ContentBox2>
      );
    } else {
      // 축제 기간이 아닌 경우 (지금 date === 0) 임의로 3일차와 동일하게 설정
      return (
        <ContentBox2>
          <p>{t(`event.result.last.description1`)}</p>
          {t(`event.result.last.description2`)}
          <span>
            {t(`event.result.last.description3`)}
            <br />
            <span
              onClick={() => {
                window.open(instagramUrl);
              }}
              style={{ textDecoration: 'underline', textUnderlineOffset: '2px', cursor: 'pointer' }}
            >
              @hiufestival_official
            </span>
            &nbsp;{t(`event.result.last.description4`)}
          </span>
          {t(`event.result.last.description5`)}
        </ContentBox2>
      );
    }
  };

  return (
    <Wrapper>
      <BackGroundContainer>
        <BackGroundImage src={graphicBg} alt="graphic" />
      </BackGroundContainer>
      <TitleBox>
        {lang ? <EngTitle> {t(`event.result.title`)}</EngTitle> : <Title> {t(`event.result.title`)}</Title>}
      </TitleBox>
      {renderContent()}
      <ShareButton
        onClick={() => {
          handleShare('https://www.2024hongikfestival.com/event');
        }}
      >
        <ShareIcon src={shareIcon} alt="shareIcon" />
        <p> {t(`event.main.button.share`)}</p>
      </ShareButton>
    </Wrapper>
  );
};

export default SubmitEvent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
  min-height: 100vh;
  margin: 0;
  box-sizing: border-box;
`;

const BackGroundContainer = styled.div`
  width: 37.5rem;
  height: 70.7rem;
  position: relative;
`;

const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

const TitleBox = styled.div`
  position: absolute;
  top: 13.4rem;
`;

const Title = styled.h1`
  font-family: 'M PLUS 1';
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
  color: var(---on, #cdff3f);
  text-align: center;
`;

const EngTitle = styled(Title)`
  font-size: 2.9rem;
`;

const ContentBox1 = styled.div`
  position: absolute;
  top: 45.4rem;

  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.white};

  text-align: center;

  span {
    ${(props) => props.theme.fontStyles.basic.body1Med};
    color: var(--Schemes-On-Primary, #cdff3f);
  }
`;

const ContentBox2 = styled(ContentBox1)`
  top: 43.7rem;

  p {
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    ${(props) => props.theme.fontStyles.basic.headline5};
    padding-bottom: 2rem;
  }
`;

const ShareButton = styled.button`
  position: absolute;
  top: 61.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;
  width: 33.5rem;
  height: 5.2rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 0.1rem solid #ffff24;
  background: ${(props) => props.theme.colors.gray100};

  p {
    color: #ffff24;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const ShareIcon = styled.img`
  width: 3.9rem;
  height: 3.9rem;
  position: absolute;
  left: 8.3rem;
`;
