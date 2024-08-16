import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Popup = ({ message, onConfirm, onCancel, confirmText, cancelText }) => (
  <PopupOverlay>
    <PopupContainer>
      <Message>{message}</Message>
      <Buttons>
        <Button onClick={onCancel}>{cancelText}</Button>
        <Button onClick={onConfirm}>{confirmText}</Button>
      </Buttons>
    </PopupContainer>
  </PopupOverlay>
);

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  confirmText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
};

export default Popup;

// Styled components for Popup
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 10000;
  align-items: center;
`;

const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2.5rem 1.5rem 1.5rem 1.5rem;
  border-radius: 1.25rem;
  width: 18rem;
  text-align: center;
  z-index: 100001;
  gap: 1rem;
`;

const Message = styled.p`
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  color: ${(props) => props.theme.colors.gray80};
  font-size: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  gap: 0.625rem;
`;

const Button = styled.button`
  border: none;
  width: 7.5rem;
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  color: ${(props) => props.theme.colors.gray80};
  padding: 0.75rem 0;
  cursor: pointer;
  font-size: 1rem;
`;
