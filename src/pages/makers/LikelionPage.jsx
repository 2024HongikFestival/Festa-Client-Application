import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import LikelionCard from '@/components/makers/LikelionCard';
import { contributors } from '@/constants/makers/LikelionContributors';
import likelionBgImg from '@/assets/webps/makers/likelionBgImg.webp';

const LikelionPage = () => {
  const contributorsData = contributors();
  const pm = contributorsData.pm;
  const plan = contributorsData.plan;
  const design = contributorsData.design;
  const frontend = contributorsData.frontend;
  const backend = contributorsData.backend;

  useEffect(() => {
    // 페이지뷰 이벤트 발송
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Makers Likelion Page',
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

  return (
    <LikelionLayout>
      <LikelionBgImg>
        <Title>
          홍익대학교
          <br />
          멋쟁이사자처럼
        </Title>
      </LikelionBgImg>
      <BlackBar />
      <WhoWeAreBg>
        <WhoWeAre>
          &apos;누구나 프로그래밍 기초 지식을 배워
          <br />
          자신만의 웹서비스를 만들어 낼 수 있다!&apos;
          <br />
          <br />
          멋쟁이사자처럼의 궁극적인 목표는
          <br />
          모두에게 열린 배움의 기회입니다.
          <br />
          <br />
          홍익대학교 멋쟁이사자처럼 12기 구성원들이
          <br />
          2024 대동제 [화양연화; 만개] 사이트의
          <br />
          기획, 디자인, 개발을 주도했습니다.
          <br />
          더 즐거운 축제가 될 수 있도록,
          <br />
          <br />그 찬란한 무대에 여러분을 초대합니다!
        </WhoWeAre>
        <Slogan># Possibility to Reality</Slogan>
      </WhoWeAreBg>
      <Divider />
      <RoleSection>
        <RoleName>총괄</RoleName>
        <RoleDescription>
          프로젝트의 계획, 실행, 관리를 담당하며,
          <br />
          팀을 이끌어 목표 달성과 일정 준수를 책임집니다.
        </RoleDescription>
        <CardWrapper $cardCount={pm.length}>
          {contributorsData.pm.map((contributor, index) => (
            <LikelionCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>기획</RoleName>
        <RoleDescription>
          사용자 경험을 바탕으로 서비스를 기획하여
          <br />
          사용자가 만족할 수 있는 서비스를 제공합니다.
        </RoleDescription>
        <CardWrapper $cardCount={plan.length}>
          {contributorsData.plan.map((contributor, index) => (
            <LikelionCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>디자인</RoleName>
        <RoleDescription>
          사용자가 원하는 정보를 쉽게 얻을 수 있도록
          <br />
          화면의 디자인을 담당합니다.
        </RoleDescription>
        <CardWrapper $cardCount={design.length}>
          {contributorsData.design.map((contributor, index) => (
            <LikelionCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>프론트엔드</RoleName>
        <RoleDescription>
          사용자와 가장 밀접하게 맞닿는
          <br />
          서비스의 인터페이스를 구현하여,
          <br />
          최적의 사용자 경험을 제공합니다.
        </RoleDescription>
        <CardWrapper $cardCount={frontend.length}>
          {contributorsData.frontend.map((contributor, index) => (
            <LikelionCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>백엔드</RoleName>
        <RoleDescription>
          눈에 보이지 않는 비지니스 로직을 담당하며
          <br />
          서비스가 원활히 동작할 수 있도록 뒷받침합니다.
        </RoleDescription>
        <CardWrapper $cardCount={backend.length}>
          {contributorsData.backend.map((contributor, index) => (
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
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.makersBackgroundColor};
  margin-bottom: 6.4rem;
`;

const LikelionBgImg = styled.div`
  width: 100%;
  padding-bottom: 90%;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(18, 18, 18, 0.4) 0%, #121212 100%), url(${likelionBgImg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const BlackBar = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.makersBackgroundColor};
  height: 0.4rem;
  margin-top: -0.3rem;
  z-index: 0;
`;

const Title = styled.h1`
  position: absolute;
  top: 45%;
  ${(props) => props.theme.fontStyles.basic.headline1};
  color: ${(props) => props.theme.colors.white};
`;

const WhoWeAreBg = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
`;

const WhoWeAre = styled.div`
  margin-top: -0.3rem;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray20};
`;

const Slogan = styled.div`
  margin-top: 5.4rem;
  margin-bottom: 5.1rem;
  color: ${(props) => props.theme.colors.white};
  font-family: 'Inconsolata', san-serif;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.032rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 1.2rem;
  background-color: ${(props) => props.theme.colors.gray100};
`;

const RoleSection = styled.section`
  width: 100%;
  /* height: auto; */
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
  margin-bottom: 3.6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4rem;
  row-gap: 2.8rem;
  ${({ $cardCount }) =>
    $cardCount % 2 === 1 &&
    css`
      & > *:nth-child(odd):first-of-type {
        grid-column: span 2;
        justify-self: center;
      }
    `}
`;
