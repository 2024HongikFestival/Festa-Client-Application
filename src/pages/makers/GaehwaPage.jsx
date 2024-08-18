<<<<<<< HEAD
import styled from 'styled-components';
import gaehwaBgImg from '@/static/image/makers/gaehwaBgImg.svg';
import gaehwaLogo from '@/static/image/makers/gaehwaLogo.svg';
=======
import styled, { css } from 'styled-components';
<<<<<<< HEAD
import gaehwaBgImg from '@/assets/svgs/makers/gaehwaBgImg.svg';
import gaehwaLogo from '@/assets/svgs/makers/gaehwaLogo.svg';
>>>>>>> abea1b2 ([Feat] 짝수, 홀수 따라 grid 변경)
=======
import gaehwaBgImg from '@/assets/webps/makers/gaehwaBgImg.webp';
import gaehwaLogo from '@/assets/webps/makers/gaehwaLogo.webp';
<<<<<<< HEAD
>>>>>>> 9f489da ([Fix] svg -> webp로 변경)
import GaehwaCard from './GaehwaCard';
import { useTranslation } from 'react-i18next';
<<<<<<< HEAD
import Footer from '@/components/layouts/Footer';
import { contributors } from './GaehwaContributors';
=======
import { contributors } from '@/pages/makers/GaehwaContributors';
>>>>>>> 44f61ef ([Feat] Footer 모든 페이지에 적용)
=======
import GaehwaCard from '@/components/makers/GaehwaCard';
import { useTranslation } from 'react-i18next';
import { contributors } from '@/constants/makers/GaehwaContributors';
>>>>>>> 099409f ([Fix] 폴더구조 변경, border, color, instaLink 수정)

const GaehwaPage = () => {
  const { t } = useTranslation();
  const contributorsData = contributors(t);

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
      <Divider />
      <RoleSection>
        <RoleName>{t('gaehwa.presidency')}</RoleName>
        <PresidencyWrapper>
          {contributorsData.presidency.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </PresidencyWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>{t('gaehwa.executive')}</RoleName>
        <RoleDescription>
          {t('gaehwa.executiveDescription1')}
          <br />
          {t('gaehwa.executiveDescription2')}
          <br />
          {t('gaehwa.executiveDescription3')}
        </RoleDescription>
        <CardWrapper $cardCount={executive.length}>
          {contributorsData.executive.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>{t('gaehwa.strategicPolicy')}</RoleName>
        <RoleDescription>
          {t('gaehwa.strategicPolicyDescription1')}
          <br />
          {t('gaehwa.strategicPolicyDescription2')}
          <br />
          {t('gaehwa.strategicPolicyDescription3')}
          <br />
          {t('gaehwa.strategicPolicyDescription4')}
        </RoleDescription>
        <CardWrapper $cardCount={strategicPolicy.length}>
          {contributorsData.strategicPolicy.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>{t('gaehwa.culturalPlanning')}</RoleName>
        <RoleDescription>
          {t('gaehwa.culturalPlanningDescription1')}
          <br />
          {t('gaehwa.culturalPlanningDescription2')}
          <br />
          {t('gaehwa.culturalPlanningDescription3')}
          <br />
          {t('gaehwa.culturalPlanningDescription4')}
        </RoleDescription>
        <CardWrapper $cardCount={culturalPlanning.length}>
          {contributorsData.culturalPlanning.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>{t('gaehwa.mediaRelations')}</RoleName>
        <RoleDescription>
          {t('gaehwa.mediaRelationsDescription1')}
          <br />
          {t('gaehwa.mediaRelationsDescription2')}
          <br />
          {t('gaehwa.mediaRelationsDescription3')}
          <br />
          {t('gaehwa.mediaRelationsDescription4')}
        </RoleDescription>
        <CardWrapper $cardCount={mediaRelations.length}>
          {contributorsData.mediaRelations.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>{t('gaehwa.finance')}</RoleName>
        <RoleDescription>
          {t('gaehwa.financeDescription1')}
          <br />
          {t('gaehwa.financeDescription2')}
          <br />
          {t('gaehwa.financeDescription3')}
        </RoleDescription>
        <CardWrapper $cardCount={finance.length}>
          {contributorsData.finance.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>{t('gaehwa.rightsSolidarity')}</RoleName>
        <RoleDescription>
          {t('gaehwa.rightsSolidarityDescription1')}
          <br />
          {t('gaehwa.rightsSolidarityDescription2')}
          <br />
          {t('gaehwa.rightsSolidarityDescription3')}
          <br />
          {t('gaehwa.rightsSolidarityDescription4')}
          <br />
          {t('gaehwa.rightsSolidarityDescription5')}
        </RoleDescription>
        <CardWrapper $cardCount={rightsSolidarity.length}>
          {contributorsData.rightsSolidarity.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>{t('gaehwa.studentWelfare')}</RoleName>
        <RoleDescription>
          {t('gaehwa.studentWelfareDescription1')}
          <br />
          {t('gaehwa.studentWelfareDescription2')}
          <br />
          {t('gaehwa.studentWelfareDescription3')}
          <br />
          {t('gaehwa.studentWelfareDescription4')}
        </RoleDescription>
        <CardWrapper $cardCount={studentWelfare.length}>
          {contributorsData.studentWelfare.map((contributor, index) => (
            <GaehwaCard key={index} {...contributor} />
          ))}
        </CardWrapper>
      </RoleSection>
      <Divider />
      <RoleSection>
        <RoleName>{t('gaehwa.graduationPreparation')}</RoleName>
        <RoleDescription>
          {t('gaehwa.graduationPreparationDescription1')}
          <br />
          {t('gaehwa.graduationPreparationDescription2')}
          <br />
          {t('gaehwa.graduationPreparationDescription3')}
          <br />
          {t('gaehwa.graduationPreparationDescription4')}
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
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.makersBackgroundColor};
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
  position: absolute;
  margin-top: -0.3rem;
  ${(props) => props.theme.fontStyles.basic.body1Med};
  color: ${(props) => props.theme.colors.gray20};
`;

const Slogan = styled.p`
  margin-top: 23.3rem;
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
