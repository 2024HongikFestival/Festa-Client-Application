import PropTypes from 'prop-types';
import styled from 'styled-components';

const PreviewContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  position: relative;
`;

const PreviewImage = styled.img`
  width: 28.7rem;
  height: 28.7rem;
  border-radius: 10px;
  object-fit: cover;
`;

const Preview = ({ image }) => {
  return (
    <PreviewContainer>
      <PreviewImage src={image} alt="Captured" />
    </PreviewContainer>
  );
};

Preview.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Preview;
