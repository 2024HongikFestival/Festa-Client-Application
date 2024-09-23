import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import * as S from './DropDown.styled';

const DropDown = ({ setSelectedDay }) => {
  const { t } = useTranslation();

  const dates = [
    { label: t('DropDown.AllTime'), value: '' },
    { label: t('DropDown.Day1'), value: '2024-09-25' },
    { label: t('DropDown.Day2'), value: '2024-09-26' },
    { label: t('DropDown.Day3'), value: '2024-09-27' },
  ];

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
