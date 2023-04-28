const Footer = () => {
  const FooterStyle = {
    color: 'grey',
  }

  return (
    <footer style={FooterStyle}>
      Powered by{" "}
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        WeatherAPI.com
      </a>
    </footer>
  )
}

export default Footer
