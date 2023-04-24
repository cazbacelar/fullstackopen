const Input = ({ value, onChange, label }) => {
  return (
    <div>
      {label} <input value={value} onChange={onChange} />
    </div>
  )
}

const Button = ({ text }) => {
  return (
    <div>
      <button>{text}</button>
    </div>
  )
}

const PersonForm = (props) => {
  const {
    handleSubmit,
    newName,
    newNumber,
    handleNameChange,
    handleNumberChange,
  } = props

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input value={newName} onChange={handleNameChange} label="Name:" />
        <Input value={newNumber} onChange={handleNumberChange} label="Number:" />
        <Button type="submit" text="Add" />
      </form>
    </div>
  )
}

export default PersonForm
