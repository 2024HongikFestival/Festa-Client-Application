import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from '@/components/layouts/HeaderStyles';

const RenderMenuItem = ({ item, index, openAccordion, setOpenAccordion, flame, nav, closeMenu, t }) => {
  const isAccordionOpen = openAccordion === index;
  const contentRef = useRef(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  useEffect(() => {
    if (contentRef.current) {
      const newHeight = isAccordionOpen ? `${contentRef.current.scrollHeight}px` : '0';
      contentRef.current.style.setProperty('--accordion-height', newHeight);
    }
  }, [isAccordionOpen]);

  return (
    <div key={index}>
      <S.MenuItem
        $flame={flame}
        $isOpen={isAccordionOpen}
        onClick={() => {
          if (flame) {
            nav(item.flamePath);
            closeMenu();
          } else if (item.accordion) {
            toggleAccordion(index);
          } else {
            nav(item.daedongjePath);
            closeMenu();
          }
        }}
      >
        <span>{flame ? t(item.flameLabel) : t(item.daedongjeLabel)}</span>
      </S.MenuItem>

      <S.AccordionContent ref={contentRef}>
        <S.SubMenuItemWrapper>
          {item.accordion &&
            item.daedongjeAccordion.map((subItem, subIndex) => (
              <S.SubMenuItem
                key={subIndex}
                onClick={() => {
                  nav(subItem.path);
                  closeMenu();
                }}
              >
                {t(subItem.label)}
              </S.SubMenuItem>
            ))}
        </S.SubMenuItemWrapper>
      </S.AccordionContent>

      <S.Divider $flame={flame} />
    </div>
  );
};

RenderMenuItem.propTypes = {
  item: PropTypes.shape({
    flamePath: PropTypes.string,
    flameLabel: PropTypes.string,
    daedongjePath: PropTypes.string,
    daedongjeLabel: PropTypes.string,
    accordion: PropTypes.bool,
    daedongjeAccordion: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  index: PropTypes.number.isRequired,
  openAccordion: PropTypes.number,
  setOpenAccordion: PropTypes.func.isRequired,
  flame: PropTypes.bool.isRequired,
  nav: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default RenderMenuItem;
