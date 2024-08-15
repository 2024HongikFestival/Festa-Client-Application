import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { adminAxiosInstance } from '@/api/axios';
import arrowDown from '../../assets/svgs/arrow_down.svg';
import arrowUp from '../../assets/svgs/arrow_up.svg';

const BlockList = () => {
  const [list, setList] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);
  useEffect(() => {
    getLists();
  }, []);

  const getAdminToken = () => {
    return localStorage.getItem('token');
  };

  const getLists = async () => {
    try {
      const token = getAdminToken();
      const response = await adminAxiosInstance.get('/blacklist', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setList(response.data.data);
    } catch (error) {
      console.error('Error fetching blacklist:', error.response?.data || error.message);
    }
  };

  const deleteBlackLists = async (userId) => {
    try {
      const token = getAdminToken();
      const response = await adminAxiosInstance.delete(`/blacklist/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 204) {
        alert('차단 해제가 완료되었습니다.');
        setList(list.filter((item) => item.userId !== userId)); // 차단 해제된 사용자 리스트에서 제거
      }
    } catch (error) {
      console.error('Error unblocking user: ', error);
      alert('차단 해제에 실패했습니다.');
    }
  };

  const formatUserId = (userId) => {
    return userId.toString().padStart(6, '0');
  };

  const formatBlockedDate = (dateString) => {
    const options = { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Date(dateString).toLocaleString('ko-KR', options);
  };

  const toggleExpand = (userId) => {
    setExpandedItem(expandedItem === userId ? null : userId);
  };

  return (
    <ListContainer>
      <Container>
        <TitleSection>
          <SubTitle>작성자</SubTitle>
          <SubTitle>차단 일시</SubTitle>
        </TitleSection>
        {list.length > 0 ? (
          list.map((item) => (
            <div key={item.userId}>
              <List>
                <UserId>{formatUserId(item.userId)}</UserId>
                <BlockDate>{formatBlockedDate(item.blockedAt)}</BlockDate>
                <BlockBtn onClick={() => deleteBlackLists(item.userId)}>차단 해제</BlockBtn>
                <ArrowIcon
                  src={expandedItem === item.userId ? arrowUp : arrowDown}
                  alt="Toggle Arrow"
                  onClick={() => toggleExpand(item.userId)}
                />
              </List>
              {expandedItem === item.userId && (
                <PostDetails>
                  <p>작성자가 작성한 게시물 정보</p>
                </PostDetails>
              )}
            </div>
          ))
        ) : (
          <p>No blocked users found.</p>
        )}
      </Container>
    </ListContainer>
  );
};

export default BlockList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Container = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.span`
  width: 5rem;
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fontStyles.body2Bold};
  font-size: 0.875rem;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.gray80};
`;

const UserId = styled.span`
  width: 5rem;
  color: ${(props) => props.theme.colors.gray30};
  font-size: 0.875rem;
  text-decoration: line-through;
`;

const BlockDate = styled.span`
  ${(props) => props.theme.fontStyles.body2Med};
  color: ${(props) => props.theme.colors.gray40};
  font-size: 0.875rem;
  width: 8.5rem;
`;
const ArrowIcon = styled.img`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;
const BlockBtn = styled.button`
  ${(props) => props.theme.fontStyles.captionBold};
  color: ${(props) => props.theme.colors.gray70};
  font-size: 0.75rem;
  text-decoration: underline;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.white};
  box-sizing: border-box;
  border-bottom: 0.063rem solid ${(props) => props.theme.colors.gray10};
`;

const PostDetails = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.gray10};
  border-left: 2px solid ${(props) => props.theme.colors.gray30};
  margin-left: 1rem;
`;
