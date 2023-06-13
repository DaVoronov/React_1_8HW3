const SearchBar = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Search contact"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default SearchBar;
