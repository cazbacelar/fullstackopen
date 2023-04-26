const Country = ({ country }) => {
  const flagStyle = {
    fontSize: 50,
  }

  const titleStyle = {
    marginBottom: 0,
  }

  return (
    <div>
      <h1 style={titleStyle}>{country.name.common}</h1>
      <div style={flagStyle}>{country.flag}</div>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={country.ccn3}>{lang}</li>
        ))}
      </ul>
    </div>
  )
}

export default Country
