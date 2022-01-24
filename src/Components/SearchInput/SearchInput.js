import PropTypes from 'prop-types';

import './SearchInput.css';

const SearchInput = ({
  search_word,
  searchEmployeeHandler,
  search_name,
  search_value,
  addTagWithEnter,
}) => {
  return (
    <div className="search-employee p-3">
      <input
        placeholder={search_word}
        onChange={searchEmployeeHandler}
        onKeyDown={addTagWithEnter}
        type="text"
        name={search_name}
        value={search_value}
      />
    </div>
  );
};

SearchInput.propTypes = {
  search_word: PropTypes.string,
  searchEmployeeHandler: PropTypes.func,
  search_name: PropTypes.string,
  search_value: PropTypes.string,
  addTagWithEnter: PropTypes.func,
};

export default SearchInput;
