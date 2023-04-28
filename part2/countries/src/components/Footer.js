const Footer = () => {
  const FooterStyle = {
    color: 'grey',
  }

  return (
    <p style={FooterStyle}>
      Powered by{" "}
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        WeatherAPI.com
      </a>
    </p>
  )
}

export default Footer
