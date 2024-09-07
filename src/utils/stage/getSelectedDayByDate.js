// 날짜에 따른 Day 선택 함수
export const getSelectedDayByDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1; // 월 (0부터 시작하므로 1 더함)
  const day = today.getDate(); // 일

  // 날짜에 따른 Day 선택
  if (month === 9) {
    switch (day) {
      case 25:
        return 'Day1';
      case 26:
        return 'Day2';
      case 27:
        return 'Day3';
      default:
        return 'Day1'; // 9월 25-27일이 아닌 경우 Day1으로 설정
    }
  } else {
    return 'Day1'; // 9월이 아닌 경우 Day1으로 설정
  }
};
