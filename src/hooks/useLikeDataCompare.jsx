// import { useState, useEffect } from 'react';

// export default function useLikeDataCompare() {
//   const [previousLikeData, setPreviousLikeData] = useState(null); // 이전 데이터를 저장
//   const [likeDifferences, setLikeDifferences] = useState({}); // 변화량 저장

//   // 각 카테고리의 좋아요 수를 합산하는 함수
//   const sumLikesForCategory = (categoryData) => {
//     if (!Array.isArray(categoryData)) return 0; // 배열이 아니면 0 반환
//     return categoryData.reduce((sum, booth) => {
//       //   console.log('부스 데이터:', booth); // booth 객체 로그로 출력
//       return sum + (booth.totalLike || 0); // 각 부스의 totalLike 값을 합산
//     }, 0);
//   };

//   // 이전 데이터와 새로운 데이터를 비교하는 함수
//   const compareLikeData = (previousData, newData) => {
//     const differences = {};

//     if (previousData) {
//       Object.keys(newData).forEach((key) => {
//         // console.log(`카테고리: ${key}`);
//         const oldCategoryTotalLikes = sumLikesForCategory(previousData[key] || []);
//         const newCategoryTotalLikes = sumLikesForCategory(newData[key] || []);

//         // console.log(`이전 총 좋아요 수: ${oldCategoryTotalLikes}, 새로운 총 좋아요 수: ${newCategoryTotalLikes}`);

//         const likeDifference = newCategoryTotalLikes - oldCategoryTotalLikes; // 이전 데이터와 새 데이터 비교
//         differences[key] = likeDifference;
//       });
//     }

//     console.log('변화량:', differences);
//     setLikeDifferences(differences); // 변화량 저장
//   };

//   return { likeDifferences, compareLikeData, setPreviousLikeData };
// }

import { useState, useEffect } from 'react';

export default function useLikeDataCompare() {
  const [previousLikeData, setPreviousLikeData] = useState(null); // 이전의 좋아요 데이터를 저장
  const [likeDifferences, setLikeDifferences] = useState({}); // 변화량 저장

  // 각 카테고리의 좋아요 수를 합산하는 함수
  const sumLikesForCategory = (categoryData) => {
    if (!Array.isArray(categoryData)) return 0; // 배열이 아닐 경우 0 반환
    return categoryData.reduce((sum, booth) => sum + (booth.totalLike || 0), 0); // 각 부스의 totalLike 값을 합산
  };

  // 새로운 데이터와 이전 데이터를 비교하는 함수
  const compareLikeData = (previousData, newData) => {
    const differences = {};

    if (previousData) {
      Object.keys(newData).forEach((key) => {
        const oldCategoryTotalLikes = sumLikesForCategory(previousData[key] || []);
        const newCategoryTotalLikes = sumLikesForCategory(newData[key] || []);
        const likeDifference = newCategoryTotalLikes - oldCategoryTotalLikes;

        differences[key] = likeDifference;
      });
    }

    setLikeDifferences(differences); // 변화량 저장

    // 1초 후 변화량을 초기화
    setTimeout(() => {
      setLikeDifferences({});
    }, 1000); // 1초 후 초기화
  };

  return { likeDifferences, compareLikeData, setPreviousLikeData };
}
