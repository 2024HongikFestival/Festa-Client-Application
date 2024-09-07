// 대동제 응모 (완료)
// url: /event/submit

import styled from 'styled-components';
import graphicBg from '@/assets/webps/event/graphic.webp';

const SubmitEvent = () => {
  return (
    <Wrapper>
      <BackGroundContainer>
        <BackGroundImage src={graphicBg} alt="graphic" />
      </BackGroundContainer>
    </Wrapper>
  );
};

export default SubmitEvent;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.flameBackgroundColor};
`;

const BackGroundContainer = styled.div`
  width: 37.5rem;
  height: 70.7rem;
`;

const BackGroundImage = styled.img`
  width: 100%;
  height: 100%;
`;
