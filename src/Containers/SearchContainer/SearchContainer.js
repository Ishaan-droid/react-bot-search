import SearchInput from '../../Components/SearchInput/SearchInput';
import PropTypes from 'prop-types';

const SearchContainer = ({
  searchNameHandler,
  searchNameQuery,
  searchTagHandler,
  searchTagQuery,
}) => {
  return (
    <>
      <SearchInput
        searchEmployeeHandler={searchNameHandler}
        search_word="Search by name"
        search_name="seachEmployee"
        search_value={searchNameQuery}
      />
      <SearchInput
        searchEmployeeHandler={searchTagHandler}
        search_word="Search by tag"
        search_name="seachTag"
        search_value={searchTagQuery}
      />
    </>
  );
};

SearchContainer.propTypes = {
  searchNameHandler: PropTypes.func,
  searchNameQuery: PropTypes.string,
  searchTagHandler: PropTypes.func,
  searchTagQuery: PropTypes.string,
};

export default SearchContainer;
