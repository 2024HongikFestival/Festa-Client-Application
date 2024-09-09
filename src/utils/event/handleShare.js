// 추가 예정 (아직 미구현)

export const handleShare = (url) => {
  navigator.clipboard.writeText(url).then(() => {
    alert('링크가 복사되었습니다!');
  });
};
