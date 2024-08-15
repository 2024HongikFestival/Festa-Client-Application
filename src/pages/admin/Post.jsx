import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { adminAxiosInstance } from '@/api/axios';

const Post = () => {
  const [losts, setLosts] = useState([]);
  const [selectedLost, setSelectedLost] = useState(null);

  const getLosts = async () => {
    try {
      const response = await adminAxiosInstance.get('/losts');
      console.log(response);
      setLosts(response.data.data);
    } catch (error) {
      console.error('Error fetching URL: ', error);
    }
  };

  useEffect(() => {
    getLosts();
  }, []);

  const handleClick = (lost) => {
    setSelectedLost(lost);
  };

  const formatId = (id) => {
    return String(id).padStart(6, '0');
  };

  return (
    <PostContainer>
      {Array.isArray(losts) && losts.length > 0 ? ( // 배열인지 확인
        losts.map((lost) => (
          <Container key={lost.lostId} onClick={() => handleClick(lost)}>
            <Img src={lost.imageUrl} alt={lost.content} />
            <PostInfo>
              <Status>&middot; {lost.lostStatus === 'PUBLISHED' ? '게시중' : '삭제됨'}</Status>
              <UserInfo>
                <UserName>작성자</UserName>
                <UserId>{formatId(lost.lostId)}</UserId>
              </UserInfo>
              <PostDate>{new Date(lost.createdAt).toLocaleString()}</PostDate>
            </PostInfo>
          </Container>
        ))
      ) : (
        <p>No lost items found.</p> // 데이터를 못 가져왔을 때 보여줄 메시지
      )}
      {selectedLost && (
        <DetailContainer>
          <h2>상세 정보</h2>
          <p>분실물 내용: {selectedLost.content}</p>
          <p>분실 위치: {selectedLost.foundLocation}</p>
          <p>보관 위치: {selectedLost.storageLocation}</p>
          <p>상태: {selectedLost.lostStatus === 'PUBLISHED' ? '게시중' : '삭제됨'}</p>
          <p>게시일: {new Date(selectedLost.createdAt).toLocaleString()}</p>
        </DetailContainer>
      )}
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
`;

const Container = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  width: 20rem;
  height: 5rem;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
`;

const Img = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
`;

const UserInfo = styled.span`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const UserName = styled.span`
  height: 1.5rem;
  ${(props) => props.theme.fontStyles.body2Bold};
  color: ${(props) => props.theme.colors.gray60};
  font-size: 0.875rem;
  font-weight: 700;
`;

const UserId = styled.span`
  height: 1.5rem;
  ${(props) => props.theme.fontStyles.body2Med};
  color: ${(props) => props.theme.colors.gray80};
  font-size: 0.875rem;
`;

const PostDate = styled.span`
  display: flex;
  ${(props) => props.theme.fontStyles.body2Med};
  color: ${(props) => props.theme.colors.gray40};
  font-size: 0.875rem;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  padding: 0.5rem 1rem;
`;

const Status = styled.span`
  display: flex;
  height: 1.125rem;
  justify-content: flex-end;
  align-items: center;
  ${(props) => props.theme.fontStyles.captionBold};
  text-align: right;
  font-size: 0.75rem;
  color: #53cc7c;
`;

const DetailContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
`;
