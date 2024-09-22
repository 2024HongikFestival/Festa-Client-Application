import styled from 'styled-components';
import ContentContainer from '@/components/common/ContentContainer';
import PropTypes from 'prop-types';

RecordList.propTypes = {
  record: PropTypes.arrayOf(
    PropTypes.shape({
      headTitle: PropTypes.string.isRequired,
      recordList: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default function RecordList({ record }) {
  return (
    <RecordContainer>
      {record.map((recordItem, index) => (
        <div key={index} data-aos="fade-down" data-aos-delay={index * 100}>
          <ContentContainer>
            <RecordWrapper>
              <HeadTitle>{recordItem.headTitle}</HeadTitle>
              <RecordListWrapper>
                {recordItem.recordList.map((item, index) => (
                  <Record key={index}>{item}</Record>
                ))}
              </RecordListWrapper>
            </RecordWrapper>
          </ContentContainer>
        </div>
      ))}
    </RecordContainer>
  );
}

const RecordContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  justify-content: center;
  align-items: center;
`;

const RecordWrapper = styled.div`
  margin: 2.6rem 2.9rem 2.6rem 2.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const HeadTitle = styled.div`
  ${({ theme }) => theme.fontStyles.basic.subHeadBold};
  width: 28rem;
  height: 2.7rem;
`;

const RecordListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 28rem;
  color: ${({ theme }) => theme.colors.gray100};
`;

const Record = styled.div`
  width: 28rem;
  ${({ theme }) => theme.fontStyles.basic.body2Med};
`;
