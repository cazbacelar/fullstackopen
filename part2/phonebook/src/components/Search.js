const Search = ({ newSearch, handleSearchChange }) => {
  return (
    <div>
      Search <input value={newSearch} onChange={handleSearchChange} />
    </div>
  )
}

export default Search
