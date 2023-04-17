const Input = ({ value, onChange }) => {
  return (
    <div>
      <input value={value} onChange={onChange} />
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
        <Input value={newName} onChange={handleNameChange} />
        <Input value={newNumber} onChange={handleNumberChange} />
        <Button type="submit" text="Add" />
      </form>
    </div>
  )
}

export default PersonForm
