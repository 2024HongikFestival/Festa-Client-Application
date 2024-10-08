import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { adminAxiosInstance } from '@/api/axios';
import Header from '@/components/layouts/Header';
import styled from 'styled-components';
import Popup from './Popup';

const PostDetail = ({ postId, onBack }) => {
  const [lostDetails, setLostDetails] = useState(null);

  const [showOptions, setShowOptions] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const getAdminToken = () => localStorage.getItem('accessToken');

  useEffect(() => {
    const getLostDetails = async () => {
      try {
        const response = await adminAxiosInstance.get(`/losts/${postId}`, {
          headers: {
            Authorization: `Bearer ${getAdminToken()}`,
          },
        });
        setLostDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching lost details: ', error);
      }
    };

    getLostDetails();
  }, [postId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lostDetails]);

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
      const token = getAdminToken();
      await adminAxiosInstance.delete(`/admin/losts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLostDetails((prev) => ({ ...prev, lostStatus: 'DELETED' }));
      setShowOptions(null);
      setShowPopup(false);
    } catch (error) {
      console.error('Error deleting post: ', error);
    }
  };

  const handleUndoDelete = async () => {
    try {
      const token = getAdminToken();
      await adminAxiosInstance.put(
        `/admin/losts/${postId}`,
        { lostStatus: 'PUBLISHED' },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLostDetails((prev) => ({ ...prev, lostStatus: 'PUBLISHED' }));
      setShowOptions(null);
      setShowPopup(false);
    } catch (error) {
      console.error('Error undoing delete: ', error);
    }
  };

  const handleBlockUser = async () => {
    try {
      const token = getAdminToken();
      await adminAxiosInstance.post(
        '/admin/blacklist',
        { userId: lostDetails.userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLostDetails((prev) => ({ ...prev, isUserBlocked: true }));
      setShowOptions(null);
      setShowPopup(false);
    } catch (error) {
      console.error('Error blocking user: ', error);
    }
  };

  const handleUnblockUser = async () => {
    try {
      const token = getAdminToken();
      await adminAxiosInstance.delete(`/admin/blacklist/${lostDetails.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLostDetails((prev) => ({ ...prev, isUserBlocked: false }));
      setShowOptions(null);
      setShowPopup(false);
    } catch (error) {
      console.error('Error unblocking user: ', error);
    }
  };

  const openPopup = (type) => {
    setPopupType(type);
    setShowPopup(true);
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
                <ActionButton onClick={() => openPopup('delete')}>게시글 삭제</ActionButton>
              ) : (
                <ActionButton onClick={() => openPopup('deleteUndo')}>삭제 취소</ActionButton>
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
              $isblocked={lostDetails.isUserBlocked}
              style={{
                justifyContent: 'space-between',
              }}
            >
              <UserId $isblocked={lostDetails.isUserBlocked}>{lostDetails.userId}</UserId>
              {lostDetails.isUserBlocked ? (
                <ActionButton onClick={() => openPopup('blockUndo')}>차단 해제</ActionButton>
              ) : (
                <ActionButton onClick={() => openPopup('block')}>사용자 차단</ActionButton>
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
      {showPopup && (
        <Popup
          message={
            popupType === 'delete'
              ? '글을 삭제할까요?'
              : popupType === 'block'
                ? '사용자를 차단할까요?'
                : popupType === 'blockUndo'
                  ? '사용자 차단을 해제할까요?'
                  : '삭제된 게시물을 복구할까요?'
          }
          onConfirm={
            popupType === 'delete'
              ? handleDelete
              : popupType === 'block'
                ? handleBlockUser
                : popupType === 'blockUndo'
                  ? handleUnblockUser
                  : handleUndoDelete
          }
          onCancel={() => setShowPopup(false)}
          confirmText={
            popupType === 'delete'
              ? '삭제'
              : popupType === 'block'
                ? '차단'
                : popupType === 'blockUndo'
                  ? '해제'
                  : '복구'
          }
          cancelText="취소"
        />
      )}
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
  width: 37.5rem;
  height: 37.5rem;
  object-fit: cover;
  margin-bottom: 2.5rem;
`;

const InfoSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 3.2rem;
`;

const InfoRow = styled.div`
  display: flex;
  width: 32rem;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray80};
  font-size: 1.4rem;
  flex-shrink: 0;
`;

const Value = styled.span`
  ${(props) => props.theme.fontStyles.basic.body2Med};
  display: flex;
  align-items: center;
  width: 20rem;
  text-align: left;
  color: ${(props) => props.theme.colors.gray80};
  font-size: 1.4rem;
`;

const BackButton = styled.button`
  margin-top: 5.4rem;
  margin-bottom: 7.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.fontStyles.basic.body1Bold};
  width: 32rem;
  height: 6.4rem;
  background: ${(props) => props.theme.colors.gray80};
  border: none;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: 1.6rem;
`;

const ActionButton = styled.button`
  width: 9.6rem;
  height: 3.2rem;
  ${(props) => props.theme.fontStyles.basic.body2Bold};
  text-align: center;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.gray70};
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;

const UserId = styled(Value)`
  font-weight: 500;
  color: ${(props) => (props.$isblocked ? props.theme.colors.gray30 : props.theme.colors.black)};
  text-decoration: ${(props) => (props.$isblocked ? 'line-through' : 'none')};
  width: 10.4rem;
`;
