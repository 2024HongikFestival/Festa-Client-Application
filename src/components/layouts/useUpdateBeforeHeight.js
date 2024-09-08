import { useEffect } from 'react';

export const useUpdateBeforeHeight = (menuRef) => {
  useEffect(() => {
    const updateBeforeHeight = () => {
      if (menuRef.current) {
        const scrollHeight = menuRef.current.scrollHeight;
        menuRef.current.style.setProperty('--before-height', `${scrollHeight}px`);
      }
    };

    // 초기 높이 설정
    updateBeforeHeight();

    // 스크롤이나 윈도우 크기 변경 시 높이 업데이트
    window.addEventListener('resize', updateBeforeHeight);
    menuRef.current.addEventListener('scroll', updateBeforeHeight);

    return () => {
      window.removeEventListener('resize', updateBeforeHeight);
      if (menuRef.current) {
        menuRef.current.removeEventListener('scroll', updateBeforeHeight);
      }
    };
  }, [menuRef]);
};
