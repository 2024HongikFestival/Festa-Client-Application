// 이모지 및 이모지 조합을 올바르게 인식하는 함수
export const splitGraphemes = (str) => {
  const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
  const segments = segmenter.segment(str);
  return Array.from(segments, (segment) => segment.segment);
};
