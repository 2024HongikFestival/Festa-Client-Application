import PageTitle from '@/components/common/PageTitle';
import styled from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import FleamarketInfo from '@/components/booth/fleamarket/FleamarketInfo';
import { FleamarketList } from '@/constants/booth/fleamarketList';
import { useTranslation } from 'react-i18next';
import FleamarketMap from '@/components/booth/fleamarket/FleamarketMap';

const Fleamarket = () => {
  const { t } = useTranslation();
  const fleamarketList = FleamarketList(t);
  return (
    <Container>
      <PageTitle title={t('fleamarket.pageTitle')} />
      {/* 플리마켓 지도 컴포넌트 */}
      <FleamarketMap />
      {/* 플리마켓 리스트 컴포넌트 */}
      <FleamarketListWrapper>
        {fleamarketList.map((item, index) => (
          <div key={item.key} data-aos="fade-down" data-aos-delay={index * 100}>
            <ContentContainer>
              <FleamarketInfo item={item} />
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
