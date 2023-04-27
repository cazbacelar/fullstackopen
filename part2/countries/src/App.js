import { useState, useEffect } from "react"
import axios from "axios"
import Search from "./components/Search"
import Result from "./components/Result"

const App = () => {
  const [searchValue, setSearchValue] = useState("")
  // this list will never change
  const [allCountries, setAllCountries] = useState([])
  // this list will keep the results to be shown accordingly to the user search
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data)
    })
  }, [])

  const handleSearchChange = (event) => {
    const currentValue = event.target.value
    setSearchValue(currentValue)
    if (currentValue) {
      const regex = new RegExp(currentValue, "i")
      setFilteredCountries(
        allCountries.filter((country) => country.name.common.match(regex))
      )
    } else {
      setFilteredCountries([])
    }
  }

  const handleShowButton = (country) => {
    setFilteredCountries([country])
    setSearchValue(country.name.common)
  }

  return (
    <div>
      <h1>Countries Information</h1>
      <Search
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />
      <Result
        countries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
        setSearchValue={setSearchValue}
        handleShowButton={handleShowButton}
      />
      <p>Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>
      </p>
    </div>
  )
}

export default App
