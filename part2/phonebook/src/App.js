import { useState, useEffect } from "react"
import axios from "axios"
import Persons from "./components/Persons"
import Search from "./components/Search"
import PersonForm from "./components/PersonForm"

const App = () => {
  const [persons, setPersons] = useState([])
  const [personsCopy, setPersonsCopy] = useState(persons)
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newSearch, setNewSearch] = useState("")

  useEffect(() => {
    axios
      // the command axios.get initiates the fetching of data from the server
      .get("http://localhost:3001/persons")
      // and registers the following function as an event handler for the operation
      .then((response) => {
        setPersons(response.data)
        setPersonsCopy(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    // store the current valute in a variable so we can use it for the search, otherwise we only get the current value when this function is called again
    const currentSearchValue = event.target.value
    setNewSearch(currentSearchValue)
    const regex = new RegExp(currentSearchValue, "i")
    const filteredPersons = personsCopy.filter(
      (person) => person.name.match(regex) || person.number.match(regex)
    )
    setPersons(filteredPersons)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const checkDuplicates = () => {
    const names = persons.map((person) => person.name)
    return names.some((name) => name === newName)
  }

  const addPerson = (event) => {
    event.preventDefault()

    // check if newName already exists in the array
    if (!checkDuplicates()) {
      const newPerson = {
        name: newName,
        number: newNumber,
        // id: persons.length + 1,
      }
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setPersonsCopy(persons.concat(response.data))
          setNewName("")
          setNewNumber("")
        })
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Search newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <h2>Add a new contact</h2>
      <PersonForm
        handleSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App
