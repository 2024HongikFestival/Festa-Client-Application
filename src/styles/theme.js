import PretendardBold from '../assets/fonts/Pretendard-Bold.otf';
import PretendardMedium from '../assets/fonts/Pretendard-Medium.otf';
import PretendardExtraBold from '../assets/fonts/Pretendard-ExtraBold.otf';
import NanumSquareNeo from '../assets/fonts/NanumSquareNeoOTF-Hv.otf';

const theme = {
  colors: {
    white: '#ffffff',
    gray_5: '#fafafb',
    gray_10: '#edf1f5',
    gray_20: '#dde1e8',
    gray_30: '#bfc2c8',
    gray_40: '#a3a8ae',
    gray_50: '#888e94',
    gray_60: '#6b7276',
    gray_70: '#515356',
    gray_80: '#3c3e41',
    gray_90: '#2c2d30',
    gray_100: '#181a1b',
    black: '#000000',
    flameBackgroundColor: '#010304',
    flameSubBackgroundColor: 'rgba(24, 24, 24, 0.60)',
    flameMainColor: '#f20d0d',
  },
  fontStyles: {
    flameHeadline1: {
      font: "800 40px/150% 'NanumSquareNeo'",
      letterSpacing: '0%',
    },
    flameHeadline2: {
      font: "800 36px/150% 'NanumSquareNeo'",
      letterSpacing: '0%',
    },
    flameHeadline3: {
      font: "800 32px/150% 'NanumSquareNeo'",
      letterSpacing: '0%',
    },
    flameHeadline4: {
      font: "800 28px/150% 'NanumSquareNeo'",
      letterSpacing: '0%',
    },
    flameHeadline5: {
      font: "800 24px/150% 'NanumSquareNeo'",
      letterSpacing: '0%',
    },
    flameHeadline6: {
      font: "800 20px/150% 'NanumSquareNeo'",
      letterSpacing: '0%',
    },
    mainHeadline1: {
      font: "800 36px/160% 'Pretendard'",
      letterSpacing: '-0.016px',
    },
    mainHeadline2: {
      font: "800 32px/160% 'Pretendard'",
      letterSpacing: '-0.016px',
    },
    mainHeadline3: {
      font: "800 28px/160% 'Pretendard'",
      letterSpacing: '-0.016px',
    },
    body_1_bold: {
      font: "700 16px/150% 'Pretendard'",
      letterSpacing: '-0.016px',
    },
    body_1_med: {
      font: "500 16px/150% 'Pretendard'",
      letterSpacing: '-0.016px',
    },
    body_2_med: {
      font: "500 14px/150% 'Pretendard'",
      letterSpacing: '-0.016px',
    },
    caption_med: {
      font: "500 12px/150% 'Pretendard'",
      letterSpacing: '-0.012px',
    },
    caption_bold: {
      font: "700 12px/150% 'Pretendard'",
      letterSpacing: '-0.012px',
    },
    subhead_bold: {
      font: "700 18px/150% 'Pretendard'",
      letterSpacing: '-0.016px',
    },
  },
  fontFaces: `
    @font-face {
      font-family: 'NanumSquareNeo';
      src: url(${NanumSquareNeo}) format('opentype');
      font-weight: 800;
      font-style: normal;
    }
    @font-face {
      font-family: 'Pretendard';
      src: url(${PretendardExtraBold}) format('opentype');
      font-weight: 800;
      font-style: normal;
    }
    @font-face {
      font-family: 'Pretendard';
      src: url(${PretendardBold}) format('opentype');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'Pretendard';
      src: url(${PretendardMedium}) format('opentype');
      font-weight: 500;
      font-style: normal;
    }
  `,
};

export default theme;
