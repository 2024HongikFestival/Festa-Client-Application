import { useEffect } from 'react';

export const useUpdateBeforeHeight = (menuRef) => {
  useEffect(() => {
    const menuElement = menuRef.current;

    const updateBeforeHeight = () => {
      if (menuElement) {
        const scrollHeight = menuElement.scrollHeight;
        menuElement.style.setProperty('--before-height', `${scrollHeight}px`);
      }
    };
    // 초기 높이 설정
    updateBeforeHeight();

    // 스크롤이나 윈도우 크기 변경 시 높이 업데이트
    window.addEventListener('resize', updateBeforeHeight);
    menuElement.addEventListener('scroll', updateBeforeHeight);

    return () => {
      window.removeEventListener('resize', updateBeforeHeight);
      if (menuElement) {
        menuElement.removeEventListener('scroll', updateBeforeHeight);
      }
    };
  }, [menuRef]);
};
