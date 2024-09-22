import styled, { css } from 'styled-components';
import GaehwaCard from '@/components/makers/GaehwaCard';
import { contributors } from '@/constants/makers/GaehwaContributors';
import gaehwaBgImg from '@/assets/webps/makers/gaehwaBgImg.webp';
import gaehwaLogo from '@/assets/webps/makers/gaehwaLogo.webp';

const GaehwaPage = () => {
  const contributorsData = contributors();

  const executiveCommittee = contributorsData.executiveCommittee;
  const operation = contributorsData.operation;
  const executive = contributorsData.executive;
  const strategicPolicy = contributorsData.strategicPolicy;
  const culturalPlanning = contributorsData.culturalPlanning;
  const mediaRelations = contributorsData.mediaRelations;
  const finance = contributorsData.finance;
  const rightsSolidarity = contributorsData.rightsSolidarity;
  const studentWelfare = contributorsData.studentWelfare;
  const graduationPreparation = contributorsData.graduationPreparation;

  return (
    <GaehwaLayout>
      <GaehwaBgImg>
        <Title>
          홍익대학교
          <br />
          개화 ; 開花
        </Title>
      </GaehwaBgImg>
      <BlackBar />
      <WhoWeAreBg>
        <WhoWeAre>
          홍익대학교 총학생회 &apos;개화 | 開花&apos; 는
          <br />
          민주적이고 자주적인 학생 자치 활동을 통해
          <br />
          안으로는 홍익인들의 이해와 요구를 실현하며,
          <br />
          <br />
          나아가 대학의 건학정신인 홍익인간의 이념을
          <br />
          바탕으로 사회 발전에 능동적으로 기여함을
          <br />그 목적으로 합니다.
        </WhoWeAre>
        <Slogan>
          <img src={gaehwaLogo} alt="gaehwaLogo" />
        </Slogan>
      </WhoWeAreBg>
      <Divider />
      <RoleSection>
        <RoleName>회장단</RoleName>
        <PresidencyWrapper>
          {contributorsData.presidency.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </PresidencyWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>집행위원회</RoleName>
        <RoleDescription>
          총학생회의 전반적인 업무 보조 등의 역할을 합니다.
          <br />
          교내 다양한 협의체 활동에서 나온
          <br />
          기록물들을 관리하고 게시합니다.
        </RoleDescription>
        <CardWrapper $cardCount={executiveCommittee.length}>
          {contributorsData.executiveCommittee.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>운영사무국</RoleName>
        <RoleDescription>
          총학생회에서 진행하는 주요 행사의 원활한 진행 및
          <br />
          운영을 위한 업무 지원을 담당하고
          <br />각 국의 기타 보조 업무를 처리합니다.
        </RoleDescription>
        <CardWrapper $cardCount={operation.length}>
          {contributorsData.operation.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>집행국</RoleName>
        <RoleDescription>
          총학생회의 전반적인 업무 보조 등의 역할을 합니다.
          <br />
          교내 다양한 협의체 활동에서 나온
          <br />
          기록물들을 관리하고 게시합니다.
        </RoleDescription>
        <CardWrapper $cardCount={executive.length}>
          {contributorsData.executive.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>전략정책국</RoleName>
        <RoleDescription>
          교내 교육환경과 학생사회 등의 문제점을 파악하여
          <br />
          학우들에게 필요한 정책 및 개선안을 마련합니다.
          <br />
          더 나은 홍익대학교를 이루어내기 위해
          <br />
          학교본부와 지속적으로 논의합니다.
        </RoleDescription>
        <CardWrapper $cardCount={strategicPolicy.length}>
          {contributorsData.strategicPolicy.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>문화기획국</RoleName>
        <RoleDescription>
          홍익대학교 학우들을 위한
          <br />
          문화 콘텐츠 기획 및 진행을 담당합니다.
          <br />
          홍익대학교만의 차별화된 새로운 대학 문화를
          <br />
          창조하고 진행합니다.
        </RoleDescription>
        <CardWrapper $cardCount={culturalPlanning.length}>
          {contributorsData.culturalPlanning.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>미디어홍보국</RoleName>
        <RoleDescription>
          총학생회의 정보들을 신속하게 전달하기 위한
          <br />
          홍보물을 제작합니다.
          <br />
          총학생회에서 진행하는 행사 및 사업의
          <br />
          시각 매체 제작을 총괄합니다.
        </RoleDescription>
        <CardWrapper $cardCount={mediaRelations.length}>
          {contributorsData.mediaRelations.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>재정사무국</RoleName>
        <RoleDescription>
          총학생회의 전반적인 회계와 사무 업무를 담당합니다.
          <br />
          학생회칙 및 세칙을 포함하여
          <br />
          총학생회 운영의 기반이 되는 자료를 관리합니다.
        </RoleDescription>
        <CardWrapper $cardCount={finance.length}>
          {contributorsData.finance.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>권리연대국</RoleName>
        <RoleDescription>
          홍익대학교 내 학우들의 권리를 위한
          <br />
          연대 활동을 진행합니다.
          <br />
          학우들의 편리한 학교 생활을 위하여
          <br />
          교내 시설 및 프로그램 소개를 진행하고
          <br />
          권리 증진을 위한 행사를 기획합니다.
        </RoleDescription>
        <CardWrapper $cardCount={rightsSolidarity.length}>
          {contributorsData.rightsSolidarity.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>학생복지위원회</RoleName>
        <RoleDescription>
          홍익대학교 학우들의 편의를 위해
          <br />
          대외 업체들과 제휴를 맺고,
          <br />
          편리를 위해 상시 복지 사업 및 다양한 사업을 진행하여
          <br />
          학우들의 복지문제를 해결합니다.
        </RoleDescription>
        <CardWrapper $cardCount={studentWelfare.length}>
          {contributorsData.studentWelfare.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>총졸업준비위원회</RoleName>
        <RoleDescription>
          홍익대학교 졸업 예정자들을 위한 업무를 총괄하며,
          <br />
          졸업 관련 제반 업무를 진행합니다.
          <br />
          졸업준비운영위원회, 졸업준비위원총회 등
          <br />
          의결기구를 운영하여 졸업 관련 논의를 진행합니다.
        </RoleDescription>
        <CardWrapper $cardCount={graduationPreparation.length}>
          {contributorsData.graduationPreparation.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
    </GaehwaLayout>
  );
};

export default GaehwaPage;

const GaehwaLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.makersBackgroundColor};
  margin-bottom: 6.4rem;
`;

const GaehwaBgImg = styled.div`
  width: 100%;
  padding-bottom: 90%;
  margin: 0 auto;
  background: linear-gradient(180deg, rgba(18, 18, 18, 0.4) 0%, #121212 100%), url(${gaehwaBgImg});
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
`;

const WhoWeAre = styled.div`
  margin-top: -0.3rem;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray20};
`;

const Slogan = styled.div`
  margin-top: 6.8rem;
  margin-bottom: 15.3rem;
  width: 6.2rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1.2rem;
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
  margin-bottom: 3.6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.4rem;
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

const PresidencyWrapper = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 3.6rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 2.4rem;
  row-gap: 2.8rem;
`;
