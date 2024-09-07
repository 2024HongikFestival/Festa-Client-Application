import PropTypes from 'prop-types';
import * as S from '@/components/layouts/HeaderStyles';

const RenderMenuItem = ({ item, index, openAccordion, setOpenAccordion, flame, nav, closeMenu, t }) => {
  const isAccordionOpen = openAccordion === index;
  const label = flame ? t(item.flameLabel) : t(item.daedongjeLabel);

  // 아코디언 메뉴 toggle
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div key={index}>
      <S.MenuItem $flame={flame} $isOpen={isAccordionOpen}>
        <span
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
          {label}
        </span>
      </S.MenuItem>

      {/* 아코디언 메뉴 */}
      {item.accordion && !flame && isAccordionOpen && (
        <S.AccordionContent>
          {item.daedongjeAccordion.map((subItem, subIndex) => (
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
        </S.AccordionContent>
      )}
      <S.Divider $flame={flame} />
    </div>
  );
};

RenderMenuItem.propTypes = {
  item: PropTypes.shape({
    flamePath: PropTypes.string,
    flameLabel: PropTypes.string.isRequired,
    daedongjePath: PropTypes.string,
    daedongjeLabel: PropTypes.string.isRequired,
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
