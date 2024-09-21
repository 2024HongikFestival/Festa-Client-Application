import { css } from 'styled-components';

// 주점 배경 변경 필요
import boothBg from '@/assets/svgs/booth/background/boothBackground.svg';

// 확정 배경 이미지
import stageBg from '@/assets/webps/stage/background.webp';
import mainBackground from '@/assets/webps/main/mainBackground.webp';
import LostAndFoundBackgound from '@/assets/webps/lost/LostAndFoundBackgound.webp';
import AddLostBackground from '@/assets/webps/lost/AddLostBackground.webp';
import facilitiesBackground from '@/assets/webps/facilities/facilitiesBackground.webp';
import mdBackground from '@/assets/webps/booth/background/mdBackground.webp';
import fleamarketBg1 from '@/assets/webps/booth/background/fleamarketMainBackground.webp';
import fleamarketBg2 from '@/assets/webps/booth/background/fleamarketCommonBackground.webp';
import fleamarketBg3 from '@/assets/webps/booth/background/fleamarketSangsuBackground.webp';
import roadmapBackground from '@/assets/webps/map/background/roadmapBackground.webp';

// 공통 스타일 정의
const commonBackgroundStyle = css`
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`;

// 경로 props로 받아서 backgroundStyles에서 순회
export const getBackgroundStyle = (path) => {
  for (const key in backgroundStyles) {
    if (backgroundStyles[key].paths.some((p) => p === path)) {
      return backgroundStyles[key].style;
    }
  }
  return null;
};

const backgroundStyles = {
  flame: {
    paths: [
      '/flame',
      '/flame/map',
      '/flame/timetable',
      '/flame/reservation',
      '/flame/lineup',
      '/flame/md',
      '/flame/promotion',
      '/oauth/events',
      '/event',
      '/event/',
      '/event/enter',
      '/event/submit',
    ],
    style: css`
      background-color: ${(props) => props.theme.colors.flameBackgroundColor};
    `,
  },
  makers: {
    paths: ['/likelion', '/gaehwa'],
    style: css`
      background-color: ${(props) => props.theme.colors.makersBackgroundColor};
    `,
  },
  map: {
    paths: ['/map'],
    style: css`
      background-image: url(${roadmapBackground});
      ${commonBackgroundStyle}
    `,
  },
  stage: {
    paths: ['/lineup', '/stage-info', '/hongik-zone'],
    style: css`
      background-image: url(${stageBg});
      ${commonBackgroundStyle}
    `,
  },
  lostAndFound: {
    paths: ['/lost-and-found', '/lost-and-found/'],
    style: css`
      background-image: url(${LostAndFoundBackgound});
      ${commonBackgroundStyle}
    `,
  },
  addLostAndFound: {
    paths: ['/lost-and-found/add'],
    style: css`
      background-image: url(${AddLostBackground});
      ${commonBackgroundStyle}
    `,
  },
  facilities: {
    paths: ['/facilities'],
    style: css`
      background-image: url(${facilitiesBackground});
      ${commonBackgroundStyle}
    `,
  },
  booth: {
    paths: ['/booth'],
    style: css`
      background-image: url(${boothBg});
      ${commonBackgroundStyle}
    `,
  },
  md: {
    paths: ['/md'],
    style: css`
      background-image: url(${mdBackground});
      ${commonBackgroundStyle}
    `,
  },
  fleamarketMain: {
    paths: ['/fleamarket'],
    style: css`
      background-image: url(${fleamarketBg1});
      ${commonBackgroundStyle}
    `,
  },
  fleamarketCommon: {
    paths: [
      '/fleamarket/ccJuice',
      '/fleamarket/almak',
      '/fleamarket/henna',
      '/fleamarket/modori',
      '/fleamarket/sajuraplz',
      '/fleamarket/hypeBoy',
      '/fleamarket/kawaii',
      '/fleamarket/aiesec',
    ],
    style: css`
      background-image: url(${fleamarketBg2});
      ${commonBackgroundStyle}
    `,
  },
  fleamarketSangsu: {
    paths: ['/fleamarket/sangsu'],
    style: css`
      background-image: url(${fleamarketBg3});
      ${commonBackgroundStyle}
    `,
  },
  main: {
    paths: ['/'],
    style: css`
      background-image: url(${mainBackground});
      ${commonBackgroundStyle}
      background-position: top -4.9rem center;
    `,
  },
};
