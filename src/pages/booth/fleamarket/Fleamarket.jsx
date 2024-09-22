import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const PageTitle = lazy(() => import('@/components/common/PageTitle'));
const ContentContainer = lazy(() => import('@/components/common/ContentContainer'));
const FleamarketMap = lazy(() => import('@/components/booth/fleamarket/FleamarketMap'));
const FleamarketInfo = lazy(() => import('@/components/booth/fleamarket/FleamarketInfo'));

import { FleamarketList } from '@/constants/booth/fleamarketList';

const Fleamarket = () => {
  const { t } = useTranslation();
  const fleamarketList = FleamarketList(t);
  return (
    <Container>
      <PageTitle title={t('fleamarket.pageTitle')} />
      <Suspense fallback={<></>}>
        {/* 플리마켓 지도 컴포넌트 */}
        <FleamarketMap />
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
      </Suspense>
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
