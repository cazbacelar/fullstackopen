import Countries from "./Countries"
import Country from "./Country"

const Result = ({ countries, handleShowButton }) => {
  // countries will be an array with objects and we display something depending on the length of the array (accordingly to how many countries were found)
  if (countries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  } else if (countries.length > 1) {
    return (
      <ul>
        {countries.map(country => <Countries key={country.ccn3} country={country} handleShowButton={handleShowButton} />)}
      </ul>
    )
  } else if (countries.length === 1) {
    // destructuring the array with only one object
    const [country] = countries
    return (
      <div>
        <Country country={country}/>
      </div>
    )
  } else {
    return null
  }
}

export default Result
