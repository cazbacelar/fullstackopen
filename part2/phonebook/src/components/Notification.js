const Notification = ({ message }) => {
  const notificationStyle = {
    background: 'lightgrey',
    fontSize: 20,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 3,
    padding: 10,
    marginBottom: 21,
  }

  const errorStyle = {
    color: 'red',
  }

  const successStyle = {
    color: 'green',
  }

  if (message === null) {
    return null
  } else if (message.includes("success")) {
    return (
      <div style={{...notificationStyle, ...successStyle}} >
        {message}
      </div>
    )
  } else {
    return (
      <div style={{...notificationStyle, ...errorStyle}}>
        {message}
      </div>
    )
  }
}

export default Notification
