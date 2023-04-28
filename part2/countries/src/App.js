import { useState, useEffect } from "react"
import axios from "axios"
import Search from "./components/Search"
import Result from "./components/Result"
import Footer from "./components/Footer"

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
    <div className="page-container">
      <div className="content-wrap">
        <h1 className="app-title">Country Explorer</h1>
        <Search
          searchValue={searchValue}
          handleSearchChange={handleSearchChange}
        />
        <Result
          countries={filteredCountries}
          handleShowButton={handleShowButton}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
