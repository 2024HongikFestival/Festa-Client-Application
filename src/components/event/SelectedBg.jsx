import styled from 'styled-components';
import check from '@/assets/svgs/event/check.svg';

const SelectedBg = () => {
  return (
    <Wrapper>
      <CheckIcon src={check} alt="check" />
    </Wrapper>
  );
};

export default SelectedBg;

const Wrapper = styled.div`
  width: 6rem;
  height: 7.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid var(--on, #cdff3f);
  background: rgba(205, 255, 63, 0.4);
`;

const CheckIcon = styled.img`
  width: 2rem;
  height: 1.42rem;
`;
