import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as S from './DropDown.styled';

//바뀔 일 없으니 하드코딩
const DropDown = ({ setSelectedDay }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('전체 기간');

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectItem = (itemName) => () => {
    setSelectedItem(itemName);
    setIsOpen(false);
  };

  useEffect(() => {
    switch (selectedItem) {
      case '9월 25일':
        setSelectedDay('2024-09-25');
        return;
      case '9월 26일':
        setSelectedDay('2024-09-26');
        return;
      case '9월 27일':
        setSelectedDay('2024-09-27');
        return;
      default: //전체 기간
        setSelectedDay('');
        return;
    }
  }, [selectedItem]);

  return (
    <S.DropDownContainer>
      <S.DropDownToggle onClick={handleToggle}>
        {selectedItem}
        <S.DropDownIcon />
      </S.DropDownToggle>
      {isOpen && (
        <S.DropDownMenu>
          <S.DropDownItem onClick={handleSelectItem('전체 기간')} $isSelected={selectedItem === '전체 기간'}>
            전체 기간
          </S.DropDownItem>
          <S.ItemLine />
          <S.DropDownItem onClick={handleSelectItem('9월 25일')} $isSelected={selectedItem === '9월 25일'}>
            9월 25일
          </S.DropDownItem>
          <S.ItemLine />
          <S.DropDownItem onClick={handleSelectItem('9월 26일')} $isSelected={selectedItem === '9월 26일'}>
            9월 26일
          </S.DropDownItem>
          <S.ItemLine />
          <S.DropDownItem onClick={handleSelectItem('9월 27일')} $isSelected={selectedItem === '9월 27일'}>
            9월 27일
          </S.DropDownItem>
        </S.DropDownMenu>
      )}
    </S.DropDownContainer>
  );
};

DropDown.propTypes = {
  setSelectedDay: PropTypes.func.isRequired,
};

export default DropDown;
