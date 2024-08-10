import styled from 'styled-components';
import likelionBgImg from '@/assets/makers/likelionBgImg.svg';
import LikelionCard from './LikelionCard';

const LikelionPage = () => {
  return (
    <LikelionLayout>
      <LikelionBgImg>
        <Title>
          홍익대학교
          <br />
          멋쟁이 사자처럼
        </Title>
      </LikelionBgImg>
      <WhoWeAreBg>
        <WhoWeAre>
          &apos;멋쟁이사자처럼&apos;은
          <br />
          창업과 서비스 개발에 대한 독보적인 교육을 통해
          <br />
          자신만의 테크 기반 아이디어를 실현하는
          <br />
          전국 최대 규모의 대학 연합 IT 동아리입니다.
          <br />
          <br />
          홍익대학교 멋쟁이사자처럼 12기 구성원들이
          <br />
          화양연화 ; 만개 기획 및 개발에 참여하여
          <br />
          2024 홍익대학교 대동제 축제 사이트를
          <br />
          제작하였습니다.
        </WhoWeAre>
        <Slogan># Possibility to Reality</Slogan>
      </WhoWeAreBg>
      <Devider />
      <RoleSection>
        <RoleName>총괄</RoleName>
        <RoleDescription>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </RoleDescription>
        <CardWrapper>
          <LikelionCard />
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>디자인</RoleName>
        <RoleDescription>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </RoleDescription>
        <CardWrapper>
          <LikelionCard />
          <LikelionCard />
          <LikelionCard />
          <LikelionCard />
          <LikelionCard />
        </CardWrapper>
      </RoleSection>
      <Devider />

      <RoleSection>
        <RoleName>프론트엔드</RoleName>
        <RoleDescription>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </RoleDescription>
        <CardWrapper>
          <LikelionCard />
          <LikelionCard />
          <LikelionCard />
          <LikelionCard />
          <LikelionCard />
        </CardWrapper>
      </RoleSection>
      <Devider />
      <RoleSection>
        <RoleName>백엔드</RoleName>
        <RoleDescription>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </RoleDescription>
        <CardWrapper>
          <LikelionCard />
          <LikelionCard />
          <LikelionCard />
          <LikelionCard />
          <LikelionCard />
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
  background-color: #121212;
  margin-top: 56px;
`;

const LikelionBgImg = styled.div`
  width: 100%;
  padding-bottom: 78.67%;
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
  top: 44%;

  // Headline 1
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.6;
  color: white;
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
  margin-top: -0.75rem;

  // Body_1_med
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  color: white;
  letter-spacing: -0.016px;
`;

const Slogan = styled.p`
  margin-top: 258px;
  font-family: Inconsolata;
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.32px;
  margin-bottom: 123px;
`;

const Devider = styled.div`
  width: 100%;
  /* height: 12px; */
  padding-bottom: 3.2%;
  background: #181a1b;
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
  margin-top: 36px;

  /* 기본_Headline/Headline 3 */
  font-size: 28px;
  font-weight: 800;
  line-height: 1.6;
  letter-spacing: -0.028px;
  color: white;
`;

const RoleDescription = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;

  /* Body/Body_1_med */
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.016px;
  color: #a3a8ae;
`;

const CardWrapper = styled.div`
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 28px;

  & > *:nth-child(odd):first-of-type {
    grid-column: span 2;
    justify-self: center;
  }
`;
