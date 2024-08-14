// 와디페 타임테이블
// url: /flame/timetable

import React from 'react';
import TimeTableWrapper, { TTConcert, TTDay, TTDays, TTHeader, TTNotice } from './styles';

const FlameTimeTablePage = () => {
  return (
    <TimeTableWrapper>
      <TTHeader>타임테이블</TTHeader>
      <TTDays>
        <TTDay>
          <p>Day1</p>
          9.25(수)
        </TTDay>
        <TTDay>
          <p>Day2</p>
          9.26(목)
        </TTDay>
        <TTDay>
          <p>Day1</p>
          9.27(금)
        </TTDay>
      </TTDays>
      <TTConcert>잔나비</TTConcert>
      <TTNotice></TTNotice>
    </TimeTableWrapper>
  );
};

export default FlameTimeTablePage;
