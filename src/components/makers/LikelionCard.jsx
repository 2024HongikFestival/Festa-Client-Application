import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import instaIcon from '@/assets/webps/makers/instaIcon.webp';
import githubIcon from '@/assets/webps/makers/githubIcon.webp';

const LikelionCard = ({ profileImg, name, department, ment, instaLink, githubLink }) => {
  return (
    <LikelionCardLayout>
      <ProfileImg>
        <img src={profileImg} alt="Profile" />
      </ProfileImg>
      <Name>{name}</Name>
      <Department>
        <span>{department}</span>
      </Department>
      <Ment>{ment}</Ment>
      <Icons>
        <Link to={instaLink} target="_blank" rel="noopener noreferrer">
          <img src={instaIcon} alt="Instagram" />
        </Link>
        {githubLink && (
          <Link to={githubLink} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </Link>
        )}
      </Icons>
    </LikelionCardLayout>
  );
};

LikelionCard.propTypes = {
  profileImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  ment: PropTypes.string.isRequired,
  instaLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
};

export default LikelionCard;

const LikelionCardLayout = styled.div`
  width: 10.9rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImg = styled.div`
  width: 9.5rem;
  height: 9.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.h5`
  margin-top: 1.2rem;
  ${(props) => props.theme.fontStyles.basic.headline5};
  color: ${(props) => props.theme.colors.white};
`;

const Department = styled.div`
  margin-top: 0.8rem;
  padding: 0.4rem 0.8rem;
  width: auto;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 0 0 0.1rem ${(props) => props.theme.colors.gray50} inset;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.gray50};

  span {
    ${(props) => props.theme.fontStyles.basic.body2Med};
  }
`;

const Ment = styled.p`
  margin-top: 0.8rem;
  ${(props) => props.theme.fontStyles.basic.captionMed};
  color: ${(props) => props.theme.colors.gray50};
  text-align: center;
  white-space: nowrap;
`;

const Icons = styled.div`
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  a {
    width: 2.4rem;
    height: 2.4rem;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
