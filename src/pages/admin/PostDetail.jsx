import styled from 'styled-components';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { adminAxiosInstance } from '@/api/axios';
import Header from '@/components/layouts/Header';

const PostDetail = ({ postId, onBack }) => {
  const [lostDetails, setLostDetails] = useState(null);

  const getAdminToken = () => {
    return localStorage.getItem('token');
  };

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
  const handleDelete = async () => {
    try {
      await adminAxiosInstance.delete(`/losts/${postId}`);
      setLostDetails((prev) => ({ ...prev, lostStatus: 'DELETED' }));
    } catch (error) {
      console.error('Error deleting post: ', error);
    }
  };

  const handleUndoDelete = async () => {
    try {
      await adminAxiosInstance.post(`/losts/${postId}`, { lostStatus: 'PUBLISHED' });
      setLostDetails((prev) => ({ ...prev, lostStatus: 'PUBLISHED' }));
    } catch (error) {
      console.error('Error undoing delete: ', error);
    }
  };

  const handleBlockUser = async () => {
    try {
      const token = getAdminToken();
      await adminAxiosInstance.post(
        '/blacklist',
        { userId: lostDetails.userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLostDetails((prev) => ({ ...prev, isUserBlocked: true }));
    } catch (error) {
      console.error('Error blocking user: ', error);
    }
  };

  const handleUnblockUser = async () => {
    try {
      const token = getAdminToken();
      await adminAxiosInstance.post(`/blacklist/${lostDetails.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLostDetails((prev) => ({ ...prev, isUserBlocked: false }));
    } catch (error) {
      console.error('Error unblocking user: ', error);
    }
  };

  if (!lostDetails) return <p>Loading...</p>;

  return (
    <FullPageContainer>
      <Header />
      <DetailContainer>
        <LostImg src={lostDetails.imageUrl} alt={lostDetails.content} />
        <InfoSection>
          <InfoRow>
            <Label>게시글 상태</Label>
            <Value
              style={{
                color: lostDetails.lostStatus === 'PUBLISHED' ? '#53cc7c' : '#f04949',
                fontWeight: '700',
                justifyContent: 'space-between',
              }}
            >
              {lostDetails.lostStatus === 'PUBLISHED' ? '게시중' : '삭제됨'}
              {lostDetails.lostStatus === 'PUBLISHED' ? (
                <ActionButton onClick={handleDelete}>게시글 삭제</ActionButton>
              ) : (
                <ActionButton onClick={handleUndoDelete}>삭제 취소</ActionButton>
              )}
            </Value>
          </InfoRow>
          <InfoRow>
            <Label>작성일시</Label>
            <Value>{formatDate(lostDetails.createdAt)}</Value>
          </InfoRow>
          <InfoRow>
            <Label>작성자ID</Label>
            <Value
              isBlocked={lostDetails.isUserBlocked}
              style={{
                justifyContent: 'space-between',
              }}
            >
              {lostDetails.userId}
              {lostDetails.isUserBlocked ? (
                <ActionButton onClick={handleUnblockUser}>차단 해제</ActionButton>
              ) : (
                <ActionButton onClick={handleBlockUser}>사용자 차단</ActionButton>
              )}
            </Value>
          </InfoRow>
          <InfoRow>
            <Label>발견위치</Label>
            <Value>{lostDetails.foundLocation}</Value>
          </InfoRow>
          <InfoRow>
            <Label>보관위치</Label>
            <Value>{lostDetails.storageLocation}</Value>
          </InfoRow>
          <InfoRow>
            <Label>설명(선택)</Label>
            <Value>{lostDetails.content}</Value>
          </InfoRow>
          <BackButton onClick={onBack}>목록 보기</BackButton>
        </InfoSection>
      </DetailContainer>
    </FullPageContainer>
  );
};

PostDetail.propTypes = {
  postId: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default PostDetail;

const FullPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
`;

const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LostImg = styled.img`
  width: 23.438rem;
  height: 23.438rem;
  object-fit: cover;
  margin-bottom: 1.563rem;
`;

const InfoSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
`;

const InfoRow = styled.div`
  display: flex;
  width: 20rem;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray80};
  font-size: 0.875rem;
  flex-shrink: 0;
`;

const Value = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  display: flex;
  align-items: center;
  width: 12.5rem;
  height: 2rem;
  text-align: left;
  color: ${(props) => props.theme.colors.gray80};
  font-size: 0.875rem;
  color: ${(props) => (props.isDeleted ? props.theme.colors.gray30 : props.theme.colors.black)};
  text-decoration: ${(props) => (props.isDeleted ? 'line-through' : 'none')};
`;

const BackButton = styled.button`
  margin-top: 5.375rem;
  margin-bottom: 4.938rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  width: 20rem;
  height: 4rem;
  background: ${(props) => props.theme.colors.gray80};
  border: none;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: 1rem;
`;

const ActionButton = styled.button`
  width: 6rem;
  height: 2rem;
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  text-align: center;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.gray70};
  border: none;
  border-radius: 0.625rem;
  cursor: pointer;
`;
