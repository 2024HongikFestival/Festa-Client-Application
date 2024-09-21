import { css } from 'styled-components';
import AddLostItemBg from '@/assets/webps/lost/AddLostItemBg.webp';
import LostAndFoundBg from '@/assets/webps/lost/LostAndFoundBg.webp';
import facilitiesBG from '@/assets/svgs/facilities/facilitiesBG.svg';
import fleamarketBg1 from '@/assets/svgs/booth/background/fleamarketMainBackground.svg';
import fleamarketBg2 from '@/assets/svgs/booth/background/fleamarketCommonBackground.svg';
import fleamarketBg3 from '@/assets/svgs/booth/background/fleamarketSangsuBackground.svg';
import mdBg from '@/assets/svgs/booth/background/mdBackground.svg';
import boothBg from '@/assets/svgs/booth/background/boothBackground.svg';
import stageBg from '@/assets/webps/stage/background.webp';
import mainBg from '@/assets/svgs/main/mainBg.svg';
import mapBg from '@/assets/svgs/map/mapBg.svg';

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
      background-image: url(${mapBg});
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
      background-image: url(${LostAndFoundBg});
      ${commonBackgroundStyle}
    `,
  },
  addLostAndFound: {
    paths: ['/lost-and-found/add'],
    style: css`
      background-image: url(${AddLostItemBg});
      ${commonBackgroundStyle}
    `,
  },
  facilities: {
    paths: ['/facilities'],
    style: css`
      background-image: url(${facilitiesBG});
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
      background-image: url(${mdBg});
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
      background-image: url(${mainBg});
      ${commonBackgroundStyle}
      background-position: top -4.9rem center;
    `,
  },
};
