import styled from 'styled-components';
import gaehwaBgImg from '@/static/image/makers/gaehwaBgImg.svg';
import gaehwaLogo from '@/static/image/makers/gaehwaLogo.svg';
import GaehwaCard from './GaehwaCard';
import { useTranslation } from 'react-i18next';

const GaehwaPage = () => {
  const { t } = useTranslation();

  return (
    <GaehwaLayout>
      <GaehwaBgImg>
        <Title>
          {t('gaehwa.title1')}
          <br />
          {t('gaehwa.title2')}
        </Title>
      </GaehwaBgImg>
      <WhoWeAreBg>
        <WhoWeAre>
          {t('gaehwa.whoWeAre1')}
          <br />
          {t('gaehwa.whoWeAre2')}
          <br />
          {t('gaehwa.whoWeAre3')}
          <br />
          <br />
          {t('gaehwa.whoWeAre4')}
          <br />
          {t('gaehwa.whoWeAre5')}
          <br />
          {t('gaehwa.whoWeAre6')}
        </WhoWeAre>
        <Slogan>
          <img src={gaehwaLogo} alt="gaehwaLogo" />
        </Slogan>
      </WhoWeAreBg>
      <Devider />
      <RoleSection>
        <RoleName>회장단</RoleName>
        <CardWrapper>
          <GaehwaCard />
          <GaehwaCard />
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>집행위원회</RoleName>
        <RoleDescription>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </RoleDescription>
        <CardWrapper>
          <GaehwaCard />
          <GaehwaCard />
          <GaehwaCard />
          <GaehwaCard />
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>전략정책국</RoleName>
        <RoleDescription>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </RoleDescription>
        <CardWrapper>
          <GaehwaCard />
          <GaehwaCard />
          <GaehwaCard />
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>문화기획국</RoleName>
        <RoleDescription>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </RoleDescription>
        <CardWrapper>
          <GaehwaCard />
          <GaehwaCard />
          <GaehwaCard />
          <GaehwaCard />
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>미디어홍보국</RoleName>
        <RoleDescription>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </RoleDescription>
        <CardWrapper>
          <GaehwaCard />
          <GaehwaCard />
          <GaehwaCard />
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>재정사무국</RoleName>
        <RoleDescription>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </RoleDescription>
        <CardWrapper>
          <GaehwaCard />
          <GaehwaCard />
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>권리연대국</RoleName>
        <RoleDescription>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </RoleDescription>
        <CardWrapper>
          <GaehwaCard />
          <GaehwaCard />
          <GaehwaCard />
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>학생복지위원회</RoleName>
        <RoleDescription>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </RoleDescription>
        <CardWrapper>
          <GaehwaCard />
          <GaehwaCard />
          <GaehwaCard />
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>총졸업준비위원회</RoleName>
        <RoleDescription>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </RoleDescription>
        <CardWrapper>
          <GaehwaCard />
          <GaehwaCard />
        </CardWrapper>
      </RoleSection>
    </GaehwaLayout>
  );
};

export default GaehwaPage;

const GaehwaLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.makersBackgroundColor};
`;

const GaehwaBgImg = styled.div`
  width: 100%;
  padding-bottom: 78.67%;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(18, 18, 18, 0.4) 0%, #121212 100%), url(${gaehwaBgImg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  position: absolute;
  top: 44%;
  ${(props) => props.theme.fontStyles.basic.headline1};
  color: ${(props) => props.theme.colors.white};
`;

const WhoWeAreBg = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WhoWeAre = styled.div`
  position: absolute;
  margin-top: -1.2rem;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.white};
`;

const Slogan = styled.p`
  margin-top: 22.4rem;
  margin-bottom: 15.3rem;
  width: 6.2rem;
`;

const Devider = styled.div`
  width: 100%;
  padding-bottom: 3.2%;
  background-color: ${(props) => props.theme.colors.gray100};
`;

const RoleSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const RoleName = styled.h3`
  margin-top: 3.6rem;
  ${(props) => props.theme.fontStyles.basic.headline3};
  color: ${(props) => props.theme.colors.white};
`;

const RoleDescription = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray40};
`;

const CardWrapper = styled.div`
  margin-bottom: 3.2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.4rem;
  row-gap: 3.2rem;

  & > *:nth-child(odd):first-of-type {
    grid-column: span 2;
    justify-self: center;
  }
`;
