const Search = ({ searchValue, handleSearchChange }) => {
  return (
    <div>
      Search: <input value={searchValue} onChange={handleSearchChange} placeholder='Country' autoFocus />
    </div>
  )
}

export default Search
