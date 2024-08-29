import warningIcon from '@/assets/svgs/lost/red_error.svg?react';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegisterMain = styled.main`
  width: 37.5rem;
  min-height: 49.7rem; //852 - 55

  padding-top: 2.8rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 2.8rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fontStyles.main.headline2}; //SCORE 어쩌구로 바뀜
`;

//경고 박스
export const WarningBox = styled.div`
  width: 33.5rem;
  padding: 1.6rem 2.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
`;

export const WarningMainText = styled.h4`
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fontStyles.basic.body1Med};
  text-align: center;

  span {
    ${({ theme }) => theme.fontStyles.basic.body1Bold};
    color: #1833db;
    span {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
`;

export const WarningSubText = styled.p`
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fontStyles.basic.body2Med};
  text-align: center;
  span {
    ${({ theme }) => theme.fontStyles.basic.body2Bold};
  }

  white-space: nowrap;
`;

// 분실물 찾아주기 섹션
export const RegisterSection = styled.section`
  display: flex;
  width: 33.5rem;
  height: 91.2rem;
  padding-top: 2.4rem;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  flex-shrink: 0;

  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
`;

export const SectionTitle = styled.h3`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fontStyles.main.headline6};
  text-align: center;

  margin-bottom: 2.4rem;
`;

export const RegisterArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  align-self: stretch;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  //align-0self: stretch;
`;

export const InputText = styled.h5`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fontStyles.basic.body1Bold};

  //span은 inherit 하지 않는 이상 내부 css로 덮어씌워짐
  span {
    color: ${({ theme }) => theme.colors.gray50};
    ${({ theme }) => theme.fontStyles.basic.body1Bold};
  }
`;

export const Input = styled.input`
  display: flex;
  width: 28.7rem;
  height: ${({ $isExplain }) => ($isExplain ? '12.9rem' : '4.5rem')};
  padding: 1.2rem;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.gray10};

  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fontStyles.basic.body2Med};
  font-weight: 400; //body2reg

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray30};
  }
`;

export const InputWithCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
  align-self: stretch;
`;

export const TextArea = styled.textarea`
  display: flex;
  width: 28.7rem;
  height: 12.9rem;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.gray10};

  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fontStyles.basic.body2Med};
  font-weight: 400; //body2reg

  resize: none;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray30};
  }
`;

export const TextLength = styled.span`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.gray50};
  text-align: right;

  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InputWithWarn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  align-self: stretch;
`;

export const InputWarningTextBox = styled.div`
  color: #ff004c;
  ${({ theme }) => theme.fontStyles.basic.captionMed};

  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const InputWarningIcon = styled(warningIcon)`
  width: 1.4rem;
  height: 1.4rem;
  //fill: #ff004c;
`;

export const Picture = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28.7rem;
  height: 28.7rem;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  background: ${({ theme }) => theme.colors.gray30};

  object-fit: cover;
`;

export const BlueButton = styled.button`
  width: 33.5rem;
  height: 6.4rem;

  display: flex;
  padding: 2.4rem 4.3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;

  border-radius: 0px 0px 12px 12px;
  background: var(--HONGIK-BLUE, #1833db);
  box-shadow: 0px 0px 20px 0px rgba(255, 255, 255, 0.8);

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fontStyles.main.headline6};

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: not-allowed;
      background: rgba(24, 51, 219, 0.5);
    `};
`;
