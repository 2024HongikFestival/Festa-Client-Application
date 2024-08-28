import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminLogin from './AdminLogin';
import Participants from '@/components/admin/Participants';
import Winners from '@/components/admin/Winners';

const AdminEvent = () => {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const [activeComponent, setActiveComponent] = useState('posts');
  //   const [isDetailView, setIsDetailView] = useState(false);
  //   const [selectedPostId, setSelectedPostId] = useState(null);
  //   const [posts, setPosts] = useState([]);
  //   useEffect(() => {
  //     const accessToken = localStorage.getItem('accessToken');
  //     if (accessToken) {
  //       setIsLoggedIn(true);
  //     }
  //   }, []);
  //   if (!isLoggedIn) {
  //     return <AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />;
  //   }
  //   return (
  //     <>
  //       <Container>
  //         {!isDetailView && (
  //           <SelectBar>
  //             <Title onClick={() => setActiveComponent('participants')} $active={activeComponent === 'participants'}>
  //               응모 목록
  //             </Title>
  //             <Title onClick={() => setActiveComponent('winners')} $active={activeComponent === 'winners'}>
  //               당첨자
  //             </Title>
  //           </SelectBar>
  //         )}
  //         {activeComponent === 'participants' &&
  //           (isDetailView ? (
  //             <PostDetail
  //               postId={selectedPostId}
  //               onBack={() => {
  //                 setIsDetailView(false);
  //                 setSelectedPostId(null);
  //               }}
  //             />
  //           ) : (
  //             <Participants setIsDetailView={setIsDetailView} setPostId={setSelectedPostId} posts={posts} />
  //           ))}
  //         {activeComponent === 'winners' &&
  //           (isDetailView ? (
  //             <PostDetail
  //               postId={selectedPostId}
  //               onBack={() => {
  //                 setIsDetailView(false);
  //                 setSelectedPostId(null);
  //               }}
  //             />
  //           ) : (
  //             <Winners setIsDetailView={setIsDetailView} setPostId={setSelectedPostId} />
  //           ))}
  //       </Container>
  //     </>
  //   );
};
export default AdminEvent;

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray10};
`;

const SelectBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
`;

const Title = styled.div`
  cursor: pointer;
  ${(props) => props.theme.fontStyles.subHeadBold};
  font-size: 1.8rem;
  color: ${({ $active, theme }) => ($active ? theme.colors.gray80 : theme.colors.gray40)};
  transition: background-color 0.3s;
  font-weight: 700;
`;
