import Country from './Country'
import Countries from './Countries'

const Result = ({ countries }) => {
  if (countries === null) {
    return null
  } else if (countries.length === 0) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  } else if (countries.length === 1) {
    return (
      <Country country={countries[0]} />
    )
  } else {
    return (
      <ul>
        {countries.map(country => <Countries key={country.ccn3} name={country.name.common} />)}
      </ul>
    )
  }
}

export default Result
