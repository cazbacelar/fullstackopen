const Search = ({ searchValue, handleSearchChange }) => {
  return (
    <div>
      Search: <input value={searchValue} onChange={handleSearchChange} />
    </div>
  )
}

export default Search
