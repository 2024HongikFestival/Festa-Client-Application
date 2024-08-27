//전역 객체 설정 파일

//ts의 namespace js로 구현
const Intl = {
  Segmenter: Segmenter,
  SegmentData: SegmentData,
};

window.Intl = Intl; //브라우저 환경에서 전역 객체에 네임스페이스 추가

class SegmentData {
  constructor(segment, index, input, isWordLike) {
    this.segment = segment;
    this.index = index;
    this.input = input;
    this.isWordLike = isWordLike;
  }
}

class Segmenter {
  constructor(locales = undefined, option = {}) {
    this.locales = locales;
    this.option = option;
  }

  segment(input) {
    const granularity = this.option.granularity || 'grapheme';
    const segments = [];

    if (granularity === 'grapheme') {
      //그래프임 단위로 세분화
      for (let i = 0; i < input.length; i++) {
        segments.push(new SegmentData(input[i], i, input, true));
      }
    } else if (granularity === 'word') {
      //단어 단휘로 세분화
      const words = input.split(/\s+/);
      let index = 0;
      for (const word of words) {
        segments.push(new SegmentData(word, index, input, true));
        index += word.length + 1;
      }
    } else if (granularity === 'sentence') {
      // 문장 단위로 세분화
      const sentences = input.split(/(?<=[.!?])\s+/);
      let index = 0;
      for (const sentence of sentences) {
        segments.push(new SegmentData(sentence, index, input, false));
        index += sentence.length + 1;
      }
    }

    return segments; //분할된 문자 배열 반환
  }

  //클래스로 직접 접근할 수 있는 메서드
  static supportedLocalesOf(locales = [], options = {}) {
    // 간단한 예제 구현: 모든 로케일을 지원하는 것으로 가정 (당장 사용할 일 x)
    return Array.isArray(locales) ? locales : [locales];
  }
}
