import styled from 'styled-components';
import likelionBgImg from '@/static/image/makers/likelionBgImg.svg';
import LikelionCard from './LikelionCard';
import { useTranslation } from 'react-i18next';
import { contributors } from './LikelionContributors';

const LikelionPage = () => {
  const { t } = useTranslation();

  return (
    <LikelionLayout>
      <LikelionBgImg>
        <Title>
          {t('likelion.title1')}
          <br />
          {t('likelion.title2')}
        </Title>
      </LikelionBgImg>
      <WhoWeAreBg>
        <WhoWeAre>
          {t('likelion.whoWeAre1')}
          <br />
          {t('likelion.whoWeAre2')}
          <br />
          <br />
          {t('likelion.whoWeAre3')}
          <br />
          {t('likelion.whoWeAre4')}
          <br />
          <br />
          {t('likelion.whoWeAre5')}
          <br />
          {t('likelion.whoWeAre6')}
          <br />
          {t('likelion.whoWeAre7')}
          <br />
          {t('likelion.whoWeAre8')}
          <br />
          <br />
          {t('likelion.whoWeAre9')}
        </WhoWeAre>
        <Slogan> {t('likelion.slogan')}</Slogan>
      </WhoWeAreBg>
      <Devider />
      <RoleSection>
        <RoleName>총괄</RoleName>
        <RoleDescription>
          프로젝트의 계획, 실행, 관리를 담당하며,
          <br />
          팀을 이끌어 목표 달성과
          <br />
          일정 준수를 책임집니다.
        </RoleDescription>
        <CardWrapper>
          {contributors.pm.map((contributor, index) => (
            <LikelionCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>기획</RoleName>
        <RoleDescription>
          사용자 경험을 바탕으로
          <br />
          서비스를 기획하여
          <br />
          사용자가 만족할 수 있는 서비스를 제공합니다.
        </RoleDescription>
        <CardWrapper>
          {contributors.plan.map((contributor, index) => (
            <LikelionCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>디자인</RoleName>
        <RoleDescription>
          사용자가 원하는 정보를
          <br />
          쉽게 얻을 수 있도록
          <br />
          화면의 디자인을 담당합니다.
        </RoleDescription>
        <CardWrapper>
          {contributors.design.map((contributor, index) => (
            <LikelionCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>프론트엔드</RoleName>
        <RoleDescription>
          사용자와 가장 밀접하게 맞닿는
          <br />
          서비스의 인터페이스를 구현하여,
          <br />
          최적의 사용자 경험을 제공합니다.
        </RoleDescription>
        <CardWrapper>
          {contributors.frontend.map((contributor, index) => (
            <LikelionCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>백엔드</RoleName>
        <RoleDescription>
          눈에 보이지 않는
          <br />
          비지니스 로직을 담당하며
          <br />
          서비스가 원활히 동작할 수 있도록 뒷받침합니다.
        </RoleDescription>
        <CardWrapper>
          {contributors.backend.map((contributor, index) => (
            <LikelionCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
    </LikelionLayout>
  );
};

export default LikelionPage;

const LikelionLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.makersBackgroundColor};
`;

const LikelionBgImg = styled.div`
  width: 100%;
  padding-bottom: 128%;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(18, 18, 18, 0.4) 0%, #121212 100%), url(${likelionBgImg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  position: absolute;
  top: 32%;
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
  margin-top: -14.1rem;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.white};
`;

const Slogan = styled.p`
  margin-top: 20.1rem;
  color: ${(props) => props.theme.colors.white};
  font-family: 'Inconsolata', san-serif;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.032rem;
  margin-bottom: 5.1rem;
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
  column-gap: 4rem;
  row-gap: 2.8rem;

  & > *:nth-child(odd):first-of-type {
    grid-column: span 2;
    justify-self: center;
  }
`;
