import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Popup = ({ message, onConfirm, onCancel, confirmText, cancelText }) => (
  <PopupOverlay>
    <PopupContainer>
      <Message>{message}</Message>
      <Buttons $hasCancel={!!onCancel}>
        {onCancel && <Button onClick={onCancel}>{cancelText}</Button>}
        <Button onClick={onConfirm}>{confirmText}</Button>
      </Buttons>
    </PopupContainer>
  </PopupOverlay>
);

Popup.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node, // JSX 요소도 허용
  ]).isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  confirmText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
};

export default Popup;
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 1000;
  align-items: center;
`;

const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.white};
  padding: 4rem 2.4rem 2.4rem 2.4rem;
  border-radius: 2rem;
  width: 28.8rem;
  text-align: center;
  z-index: 1001;
  gap: 1.6rem;
`;

const Message = styled.p`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  color: ${(props) => props.theme.colors.gray80};
  font-size: 1.6rem;
`;

const Buttons = styled.div`
  display: flex;
  text-align: center;
  justify-content: ${({ $hasCancel }) => ($hasCancel ? 'space-around' : 'center')};

  gap: 1rem;
`;

const Button = styled.button`
  border: none;
  width: 12rem;
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  color: ${(props) => props.theme.colors.gray80};
  padding: 1.2rem 0;
  cursor: pointer;
  font-size: 1.6rem;
`;
