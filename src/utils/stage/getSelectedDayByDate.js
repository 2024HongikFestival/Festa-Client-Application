// 날짜에 따른 Day 선택 함수
export const getSelectedDayByDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  if (month === 9) {
    switch (day) {
      case 25:
        return 'Day1';
      case 26:
        return 'Day2';
      case 27:
        return 'Day3';
      default:
        return 'Day1';
    }
  } else {
    return 'Day1';
  }
};
