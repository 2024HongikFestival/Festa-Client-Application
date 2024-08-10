import PM from '@/assets/makers/PM.svg';
import styled from 'styled-components';
import instaIcon from '@/assets/makers/instaIcon.svg';
import githubIcon from '@/assets/makers/githubIcon.svg';

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
  width: 95px;
  height: 95px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.h5`
  margin-top: 12px;

  /* 기본_Headline/Headline 5 */
  font-size: 20px;
  font-weight: 800;
  line-height: 1.6;
  letter-spacing: -0.02px;
  color: white;
`;

const Department = styled.div`
  margin-top: 8px;
  width: 109px;
  height: 29px;
  border: 1px solid #888e94;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Body/Body_2_med */
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.014px;
  color: #888e94;
`;

const Ment = styled.p`
  margin-top: 8px;

  /* Caption/Caption_med */
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.012px;
  color: #888e94;
`;

const Icons = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
