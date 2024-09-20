// 이모지 및 이모지 조합을 올바르게 인식하는 함수
export const splitGraphemes = (str) => {
  const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
  const segments = segmenter.segment(str);
  return Array.from(segments, (segment) => segment.segment);
};

// 글자수를 제한하는 함수
export const truncateToMaxLength = (str, maxLength) => {
  const graphemes = splitGraphemes(str);
  const truncateGraphemes = graphemes.slice(0, maxLength);
  return truncateGraphemes.join(''); //자른 결과를 다닥 다닥 붙여서 리턴
};

// 글자수를 판단하는 함수(세는 함수)
export const getGrapemeLength = (str) => {
  const graphemes = splitGraphemes(str);
  return graphemes.length;
};
