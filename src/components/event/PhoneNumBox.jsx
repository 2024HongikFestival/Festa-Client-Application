import { useRef } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const PhoneNumBox = ({ className, index, codeArr, onChange }) => {
  const inputRef = useRef(null);
  const value = codeArr[index];
  const setValue = (value, position = 0) => {
    const nextCodeArr = [...codeArr];
    nextCodeArr[index + position] = value;
    onChange(nextCodeArr);
  };

  const nextInput = inputRef.current?.parentElement?.querySelector(`input:nth-of-type(${index + 2})`);

  const previousInput = inputRef.current?.parentElement?.querySelector(`input:nth-of-type(${index})`);

  const _onChange = (e) => {
    const value = e.target.value;

    if (isNaN(Number(value))) return;

    if (String(value).length > 1) {
      if (nextInput && inputRef.current?.selectionStart === 2) {
        setValue(value[1], +1);
        nextInput.focus();
      } else if (inputRef.current?.selectionStart === 1) {
        setValue(value[0]);
      }
      return;
    }

    setValue(value);

    if (value && nextInput) {
      nextInput.focus();
    }
  };

  const _onKeyDown = (e) => {
    if ((e.key === 'ArrowRight' || e.key === 'arrowRight') && nextInput) {
      if (inputRef.current?.selectionStart === 0 && value !== '') {
        inputRef.current?.setSelectionRange(1, 1);
      } else {
        nextInput.focus();
      }
    }
    if ((e.key === 'ArrowLeft' || e.key === 'arrowLeft') && previousInput) {
      if (inputRef.current?.selectionStart === 1) {
        inputRef.current?.setSelectionRange(0, 0);
      } else {
        previousInput.focus();
      }
    }
    if (e.key === 'Backspace') {
      if (inputRef.current?.selectionStart === 1) {
        const nextCodeArr = [...codeArr];
        nextCodeArr[index] = '';
        onChange(nextCodeArr);
      } else if (previousInput) {
        setValue('', -1);
        previousInput.focus();
      }
    }
  };

  return (
    <InputBlockStyle
      className={className}
      type="text"
      ref={inputRef}
      value={value}
      $isInputValue={value.length > 0}
      onKeyDown={_onKeyDown}
      onChange={_onChange}
      inputMode="numeric"
    />
  );
};

PhoneNumBox.propTypes = {
  className: PropTypes.string,
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  codeArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default PhoneNumBox;

const InputBlockStyle = styled.input`
  width: 2rem;
  height: 3.2rem;
  border-radius: 0.4rem;
  border: 0.1rem solid #7b9a27;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  ${(props) => props.theme.fontStyles.basic.body2Reg}
  color: ${(props) => props.theme.colors.gray5};

  &.active {
    border: 0.1rem solid #cdff3f;
  }
`;
