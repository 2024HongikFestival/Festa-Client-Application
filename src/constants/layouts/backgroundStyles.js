import AddLostItemBg from '@/assets/webps/lost/AddLostItemBg.webp';
import LostAndFoundBg from '@/assets/webps/lost/LostAndFoundBg.webp';
import facilitiesBg from '@/assets/svgs/facilities/facilitiesBg.svg';
import fleamarketBg1 from '@/assets/svgs/booth/background/fleamarketMainBackground.svg';
import fleamarketBg2 from '@/assets/svgs/booth/background/fleamarketCommonBackground.svg';
import fleamarketBg3 from '@/assets/svgs/booth/background/fleamarketSangsuBackground.svg';
import mdBg from '@/assets/svgs/booth/background/mdBackground.svg';
import boothBg from '@/assets/svgs/booth/background/boothBackground.svg';
import stageBg from '@/assets/webps/stage/background.webp';
import { css } from 'styled-components';

// 공통 스타일 정의
const commonBackgroundStyle = css`
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`;

// 경로 props로 받아서 backgroundStyles에서 순회
export const getBackgroundStyle = (path) => {
  for (const key in backgroundStyles) {
    if (backgroundStyles[key].paths.some((p) => path.startsWith(p))) {
      return backgroundStyles[key].style;
    }
  }
  return null;
};

const backgroundStyles = {
  flame: {
    paths: ['/flame', '/oauth/events', '/event', '/event/', '/event/enter', '/event/submit'],
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
      background-image: url(${facilitiesBg});
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
};
