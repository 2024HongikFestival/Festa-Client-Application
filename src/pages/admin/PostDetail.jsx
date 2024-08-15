import styled from 'styled-components';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { adminAxiosInstance } from '@/api/axios';

const PostDetail = ({ postId, goBack }) => {
  const [lostDetails, setLostDetails] = useState(null);

  const getLostDetails = async () => {
    try {
      const response = await adminAxiosInstance.get(`/losts/${postId}`);
      setLostDetails(response.data.data);
    } catch (error) {
      console.error('Error fetching lost details: ', error);
    }
  };

  useEffect(() => {
    getLostDetails();
  }, [postId]);

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

  if (!lostDetails) return <p>Loading...</p>;

  return (
    <FullPageContainer>
      <DetailContainer>
        <LostImg src={lostDetails.imageUrl} alt={lostDetails.content} />
        <SubTitle>게시글 상태</SubTitle>
        <p>분실물 내용: {lostDetails.content}</p>
        <p>분실 위치: {lostDetails.foundLocation}</p>
        <p>보관 위치: {lostDetails.storageLocation}</p>
        <p>상태: {lostDetails.lostStatus === 'PUBLISHED' ? '게시중' : '삭제됨'}</p>
        <p>게시일: {formatDate(lostDetails.createdAt)}</p>
      </DetailContainer>
      <button onClick={goBack}>뒤로가기</button>
    </FullPageContainer>
  );
};
PostDetail.propTypes = {
  postId: PropTypes.number.isRequired,
  goBack: PropTypes.func.isRequired,
};
export default PostDetail;

const FullPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
`;

const DetailContainer = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-sizing: border-box;
  position: relative;
  h2 {
    margin-top: 0;
  }
  button {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: none;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 1rem;
  }
`;

const LostImg = styled.img`
  width: 23.438rem;
  height: 23.438rem;
`;

const SubTitle = styled.span`
  ${(props) => props.theme.fontStyles.body2Bold};
  font-size: 0.875rem;
  font-weight: 700;
`;
