import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as S from './NewPagination.styled';

const NewPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    if (currentPage > 1) {
      navigate(`?page=${currentPage - 1}`);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickFront = () => {
    if (currentPage < totalPages) {
      navigate(`?page=${currentPage + 1}`);
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <S.PaginationWrapper>
      <S.LeftPageButton onClick={handleClickBack} />
      <S.PageNumberWrapper>
        <S.CurrentPageNumber>{`${currentPage}`}</S.CurrentPageNumber>
        <S.TotalPagesNumber>{`${totalPages}`}</S.TotalPagesNumber>
      </S.PageNumberWrapper>
      <S.RightPageButton onClick={handleClickFront} />
    </S.PaginationWrapper>
  );
};

NewPagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default NewPagination;
