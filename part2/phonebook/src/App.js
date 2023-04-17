import { useState } from "react"

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
  const [newName, setNewName] = useState("")

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const checkDuplicates = () => {
    const names = persons.map((person) => person.name)
    return names.some((name) => name === newName)
    // The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
  }

  const addName = (event) => {
    event.preventDefault()

    // check if newName already exists in the array
    if (!checkDuplicates()) {
      const newNameObject = {
        name: newName,
      }
      setPersons(persons.concat(newNameObject))
      setNewName("")
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  )
}

export default App
