// 와디페 타임테이블
// url: /flame/timetable

import React from 'react';
import TimeTableWrapper, { TTConcert, TTDay, TTDays, TTHeader, TTNotice } from './styles';

// 날짜가 지정한 시간 단위에서 특정 날짜와 일치하는지 구하기 - isSame()

// const fromDt = moment('2022-10-19 10:23:09', 'YYYY-MM-DD HH:mm:ss');
// const toDt = moment('2022-10-21 12:10:15', 'YYYY-MM-DD HH:mm:ss');

// fromDt.isSame(moment('2022-10-19 10:23:09', 'YYYY-MM-DD HH:mm:ss'));
//   >> true

// fromDt.isSame(toDt);
//   >> false
// moment('20221010').isSame(moment('20221010'));
//   >> true

// moment('20221010').isSame(moment('20221022'));
//   >> false

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
