import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as S from './DropDown.styled';

const dates = [
  { label: '전체 기간', value: '' }, //초기값
  { label: '9월 25일', value: '2024-09-25' },
  { label: '9월 26일', value: '2024-09-26' },
  { label: '9월 27일', value: '2024-09-27' },
  //만약 날짜 추가된다면 위의 형식대로 추가하면 됨
];

const DropDown = ({ setSelectedDay }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(dates[0].label);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectItem = (itemName) => () => {
    setSelectedItem(itemName);
    setIsOpen(false);
  };

  useEffect(() => {
    const selectedDate = dates.find((date) => date.label === selectedItem);
    setSelectedDay(selectedDate ? selectedDate.value : '');
  }, [selectedItem]);

  return (
    <S.DropDownContainer>
      <S.DropDownToggle onClick={handleToggle}>
        {selectedItem}
        <S.DropDownIcon />
      </S.DropDownToggle>
      {isOpen && (
        <S.DropDownMenu>
          {dates.map((date, idx) => (
            <React.Fragment key={date.value}>
              <S.DropDownItem onClick={handleSelectItem(date.label)} $isSelected={selectedItem === date.label}>
                {date.label}
              </S.DropDownItem>
              {idx < dates.length - 1 && <S.ItemLine />}
            </React.Fragment>
          ))}
        </S.DropDownMenu>
      )}
    </S.DropDownContainer>
  );
};

DropDown.propTypes = {
  setSelectedDay: PropTypes.func.isRequired,
};

export default DropDown;
