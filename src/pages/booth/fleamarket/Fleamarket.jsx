import PageTitle from '@/components/common/PageTitle';
import styled from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import FleamarketInfo from '@/components/booth/fleamarket/FleamarketInfo';
import { FleamarketList } from '@/constants/booth/fleamarketList';
import { useTranslation } from 'react-i18next';

const Fleamarket = () => {
  const { t } = useTranslation();
  const fleamarketList = FleamarketList(t);
  return (
    <Container>
      <PageTitle title={t('fleamarket.pageTitle')} />
      {/* 플리마켓 지도 컴포넌트 */}
      <ContentContainer>
        <MapTitle>{t('fleamarket.location')}</MapTitle>
        <MapImage src="src/assets/webps/booth/mapExample.webp" />
      </ContentContainer>
      {/* 플리마켓 리스트 컴포넌트 */}
      <FleamarketListWrapper>
        {fleamarketList.map((item, index) => (
          <div key={item.key} data-aos="fade-down" data-aos-delay={index * 100}>
            <ContentContainer>
              <FleamarketInfo index={index} item={item} />
            </ContentContainer>
          </div>
        ))}
      </FleamarketListWrapper>
    </Container>
  );
};

export default Fleamarket;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MapTitle = styled.div`
  width: 33.5rem;
  height: 3.2rem;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  ${(props) => props.theme.fontStyles.main.headline6};
`;

const MapImage = styled.img`
  width: 33.5rem;
  height: 25.2rem;
  margin-bottom: 2.4rem;
  border-top: 0.1rem solid ${(props) => props.theme.colors.gray30};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray30};
`;

const FleamarketListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2.8rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 6.4rem;
`;
