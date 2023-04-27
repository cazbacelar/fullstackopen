import { useState, useEffect } from "react"
import axios from "axios"

const Result = ({ countries }) => {
  // countries will be an array with objects and we display something depending on the length of the array (accordingly to how many countries were found)
  if (countries.length > 10) {
    return (
      <div><p>Too many matches, specify another filter</p></div>
    )
  } else if (countries.length > 1) {
    console.log(countries)
    return (
      <ul>
        {countries.map(country => <li key={country.ccn3}>{country.name.common}</li>)}
      </ul>
    )
  } else if (countries.length === 1) {
    // destructuring the array with only one object
    const [country] = countries
    console.log(country)
    return (
      <div>
        <h2>{country.name.common} {country.flag}</h2>
        <p>Capital: {country.capital} fix this some countries have more than one</p>
        <p>Area: {country.area}</p>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
      </div>
    )
  } else {
    return null
  }
}

const App = () => {
  const [searchValue, setSearchValue] = useState("")
  // this list will never change
  const [allCountries, setAllCountries] = useState([])
  // this list will keep the results to be shown
  const [filteredCountries, setFilteredCountries] = useState([])

  const api_key = process.env.REACT_APP_API_KEY
  const weatherURL = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q={London}`

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setAllCountries(response.data)
    })
  }, [])

  const handleSearchChange = (event) => {
    const currentValue = event.target.value
    setSearchValue(currentValue)
    if (currentValue) {
      const regex = new RegExp( currentValue, 'i' )
      setFilteredCountries(allCountries.filter(country => country.name.common.match(regex)))
    } else {
      setFilteredCountries([])
    }
  }

  return (
    <div>
      <h1>Countries Information</h1>
      <input value={searchValue} onChange={handleSearchChange} placeholder='Search country' autoFocus />
      <Result countries={filteredCountries} />
    </div>
  )
}

export default App
