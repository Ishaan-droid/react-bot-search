import './SearchInput.css';

const SearchEmployee = ({
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

export default SearchEmployee;
