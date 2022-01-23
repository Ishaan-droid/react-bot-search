import SearchInput from '../../Components/SearchInput/SearchInput';

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

export default SearchContainer;
