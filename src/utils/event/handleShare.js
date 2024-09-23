export const handleShare = async (url) => {
  try {
    await navigator.share({
      title: '🎁 2024 홍익 대동제 래플 🎁',
      text: '홍익대학교 가을 축제 즐기고, TVING 3개월 이용권 응모 기회 받아가세요!',
      url: 'https://www.2024hongikfestival.com/event',
    });
  } catch (error) {
    navigator.clipboard.writeText(url).then(() => {
      alert('링크가 복사되었습니다!');
    });
  }
};
