import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:3000',
  timeout: 1000,
});
const Post = () => {
  const [losts, setLosts] = useState();
  const [selectedLost, setSelectedLost] = useState(null);
  const getLosts = async () => {
    try {
      const response = await axiosInstance.get('/losts');
      setLosts(response.data);
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

  return (
    <PostContainer>
      <Container>
        <Img />
        <PostInfo>
          <Status>&middot; 게시중</Status>
          <UserInfo>
            <UserName>작성자</UserName>
            <UserId>00001</UserId>
          </UserInfo>
          <PostDate>2024.09.25 16:30:30</PostDate>
        </PostInfo>
      </Container>
      {/* {selectedLost && (
        <DetailContainer>
          <h2>상세 정보</h2>
          <p>작성자: {selectedLost.userName}</p>
          <p>아이디: {selectedLost.userId}</p>
          <p>게시일: {selectedLost.postDate}</p>
          <p>상태: {selectedLost.status}</p>
        </DetailContainer>
        )} */}
    </PostContainer>
  );
};
export default Post;

const PostContainer = styled.div`
  display: flex;
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
  color: white;
`;
const Img = styled.img`
  width: 5rem;
  height: 5rem;
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
