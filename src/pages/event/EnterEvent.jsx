// // 대동제 이벤트 (응모)
// // url: /event/enter

import { useState, useEffect } from 'react';
import { axiosInstance } from '@/api/axios';
import { useNavigate } from 'react-router-dom';

const EnterEvent = () => {
  const [eventId, setEventId] = useState(1);
  const [textCount, setTextCount] = useState(0);
  const navigate = useNavigate();

  // input & textarea 상태 관리
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  // 이름 입력 관리
  const handleName = (e) => {
    setName(e.target.value);
  };
  // 전화번호 입력 관리
  const handlePhone = (e) => {
    // 유효성 검사
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };
  // 후기 입력 관리
  const handleComment = (e) => {
    e.preventDefault();
    setTextCount(e.target.value.length); // 글자수 세기
    setComment(e.target.value);
  };

  const handleEventEntry = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        `/events/${eventId}/entries`,
        {
          name: name,
          phone: phone,
          comment: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('event_access_token')}`,
          },
        }
      );
      console.log(response.data.message);
      // 응모 완료 시 응모 관련 localStorage 초기화 후 응모 완료 페이지로 이동
      localStorage.removeItem('kakao_code');
      localStorage.removeItem('event_access_token');
      navigate('/event/submit');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // 전화번호 하이픈 자동 생성
    if (phone.length === 10) {
      setPhone(phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (phone.length === 13) {
      setPhone(phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [phone]);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '60rem',
        border: 'solid 1px',
        borderColor: 'black',
        position: 'relative',
      }}
    >
      {/* body */}
      <div
        style={{
          marginTop: '3.4375rem',
        }}
      >
        {/* title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          이벤트 응모하기
        </div>
        {/* form */}
        <form>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div>
              <p>이름</p>
              <input type="text" placeholder="ex. 홍길동" onChange={handleName} value={name} />
            </div>
            <div>
              <p>당첨 시 연락처</p>
              <input type="text" placeholder="‘-’ 없이 숫자만 (ex. 01012341234)" onChange={handlePhone} value={phone} />
            </div>
            <div>
              <p>축제 후기를 들려주세요! (선택)</p>
              <textarea
                type="text"
                placeholder="당첨과 상관없다~~"
                maxLength="100"
                onChange={handleComment}
                value={comment}
              />
            </div>
            <div>({textCount}/100)</div>
          </div>
          {/* 하단 고정 플로팅 버튼 */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  border: 'none',
                  width: '20rem',
                  height: '3rem',
                  cursor: 'pointer',
                }}
                onClick={handleEventEntry}
              >
                응모 완료
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnterEvent;
