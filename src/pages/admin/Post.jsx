import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import morebtn from '../../assets/svgs/more_vert.svg';
import { adminAxiosInstance } from '@/api/axios';
import PropTypes from 'prop-types';

const Post = ({ setIsDetailView, setSelectedPostId }) => {
  const [allLosts, setAllLosts] = useState([]);
  const [displayedLosts, setDisplayedLosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const getLosts = async () => {
    setLoading(true);
    try {
      const response = await adminAxiosInstance.get('/losts');
      setAllLosts(response.data.data);
      setDisplayedLosts(response.data.data.slice(0, postsPerPage));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching URL: ', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getLosts();
  }, []);

  const handleClick = (lostId) => {
    setSelectedPostId(lostId);
    setIsDetailView(true); // 상세 조회 시작
  };

  const loadMore = () => {
    if (displayedLosts.length < allLosts.length && !loading) {
      setLoading(true);
      setCurrentPage((prevPage) => {
        const nextPage = prevPage + 1;
        const newDisplayedLosts = allLosts.slice(0, nextPage * postsPerPage);
        setDisplayedLosts(newDisplayedLosts);
        setLoading(false);
        return nextPage;
      });
    }
  };

  const formatId = (id) => {
    return String(id).padStart(6, '0');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <PostContainer>
      {Array.isArray(displayedLosts) && displayedLosts.length > 0 ? (
        displayedLosts.map((lost) => (
          <Container key={lost.lostId} onClick={() => handleClick(lost.lostId)}>
            <Img src={lost.imageUrl} alt={lost.content} />
            <PostInfo>
              <Status lostStatus={lost.lostStatus}>
                &middot; {lost.lostStatus === 'PUBLISHED' ? '게시중' : '삭제됨'}
              </Status>
              <UserInfo>
                <UserName>작성자</UserName>
                <UserId>{formatId(lost.lostId)}</UserId>
              </UserInfo>
              <Wrapper>
                <PostDate>{formatDate(lost.createdAt)}</PostDate>
                <MoreBtn />
              </Wrapper>
            </PostInfo>
          </Container>
        ))
      ) : (
        <p>No lost items found.</p>
      )}
      {displayedLosts.length < allLosts.length && (
        <LoadMoreButton onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : '더보기'}
        </LoadMoreButton>
      )}
    </PostContainer>
  );
};
Post.propTypes = {
  setIsDetailView: PropTypes.func.isRequired,
  setSelectedPostId: PropTypes.func.isRequired,
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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
  color: ${(props) => (props.lostStatus === 'PUBLISHED' ? '#53cc7c' : '#F04949')};
  font-weight: 700;
`;

const LoadMoreButton = styled.button`
  width: 20rem;
  height: 4rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const MoreBtn = styled.div`
  background: url(${morebtn});
  width: 1.5rem;
  height: 1.5rem;
  background-repeat: no-repeat;
  background-size: contain;
`;
