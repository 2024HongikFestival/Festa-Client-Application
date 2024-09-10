import styled from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import PropTypes from 'prop-types';

FleamarketTop.propTypes = {
  item: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default function FleamarketTop({ item }) {
  return <TopWrapper></TopWrapper>;
}

const TopWrapper = styled.div`
  margin-top: 2.8rem;
  margin-bottom: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
