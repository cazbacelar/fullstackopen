import { useState } from 'react'
import axios from 'axios'
import Result from './components/Result'
import Title from './components/Title'
import Search from './components/Search'

const App = () => {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCountries] = useState(null)

  const baseURL = 'https://restcountries.com/v3.1/'

  const handleSearchChange = (event) => {
    const currentValue = event.target.value
    setSearchValue(currentValue)

    if (currentValue === '') {
      setCountries(null)
      return
    }

    axios
      .get(`${baseURL}name/${currentValue}`)
      .then(response => {
        if (response.data.length > 10) {
          console.log('Too many matches, specify another filter')
          setCountries([])
        } else if (response.data.length > 1) {
          setCountries(response.data)
        } else {
          setCountries(response.data)
        }
      })
  }

  return (
    <div>
      <Title text={'Countries information'} />
      <Search searchValue={searchValue} handleSearchChange={handleSearchChange} />
      <Result countries={countries} />
    </div>
  )
}

export default App
