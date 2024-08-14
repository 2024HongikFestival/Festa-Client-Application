import PM from '@/static/image/makers/PM.svg';
import styled from 'styled-components';
import instaIcon from '@/static/image/makers/instaIcon.svg';
import githubIcon from '@/static/image/makers/githubIcon.svg';

const LikelionCard = () => {
  return (
    <LikelionCardLayout>
      <CardImg>
        <img src={PM} alt="PM" />
      </CardImg>
      <Name>장윤영</Name>
      <Department>컴퓨터공학과 20</Department>
      <Ment>🩷 윤영이 짱</Ment>
      <Icons>
        <img src={instaIcon} />
        <img src={githubIcon} />
      </Icons>
    </LikelionCardLayout>
  );
};

export default LikelionCard;

const LikelionCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardImg = styled.div`
  width: 9.5rem;
  height: 9.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.h5`
  margin-top: 1.2rem;
  ${(props) => props.theme.fontStyles.basic.headline5};
  color: ${(props) => props.theme.colors.white};
`;

const Department = styled.div`
  margin-top: 0.8rem;
  width: 10.9rem;
  height: 2.9rem;
  border: 0.1rem solid ${(props) => props.theme.colors.gray50};
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.theme.fontStyles.basic.body2Med};
  color: ${(props) => props.theme.colors.gray50};
`;

const Ment = styled.p`
  margin-top: 0.8rem;
  ${(props) => props.theme.fontStyles.basic.captionMed};
  color: ${(props) => props.theme.colors.gray50};
`;

const Icons = styled.div`
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
