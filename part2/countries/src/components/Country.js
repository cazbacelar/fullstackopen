import { useState, useEffect } from "react"
import axios from "axios"

const Country = ({ country }) => {
  const [weather, setWeather] = useState("")
  const [condition, setCondition] = useState("")
  const [icon, setIcon] = useState("")
  const [wind, setWind] = useState("")

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
    const city = country.capital
    const weatherURL = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`

    axios.get(weatherURL).then((response) => {
      const apiResponse = response.data.current
      setWeather(apiResponse.temp_c)
      setCondition(apiResponse.condition.text)
      setIcon(apiResponse.condition.icon)
      setWind(apiResponse.wind_mph)
    })
  }, [country.capital])

  return (
    <div>
      <h1>{country.name.common} {country.flag}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h2>Languages:</h2>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <h2>Weather in {country.capital}</h2>
      <p>Temperature: {weather} Celcius</p>
      <p>{condition}</p>
      <img src={icon} alt="Weather icon"></img>
      <p>Wind: {wind} mph</p>
    </div>
  )
}

export default Country
