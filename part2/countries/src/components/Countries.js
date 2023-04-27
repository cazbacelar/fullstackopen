const Countries = ({ country, handleShowButton }) => {
  return (
    <>
      <li>{country.name.common} <button onClick={() => handleShowButton(country)}>show</button></li>
    </>
  )
}

export default Countries
