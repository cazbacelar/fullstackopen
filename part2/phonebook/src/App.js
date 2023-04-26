import { useState, useEffect } from "react"
import Persons from "./components/Persons"
import Search from "./components/Search"
import Notification from "./components/Notification"
import PersonForm from "./components/PersonForm"
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [personsCopy, setPersonsCopy] = useState(persons)
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newSearch, setNewSearch] = useState("")
  const [message, setMessage] = useState(null)

  // the effect is executed only after the first render
  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
      setPersonsCopy(initialPersons)
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
      }

      personService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        setPersonsCopy(personsCopy.concat(returnedPerson))
        setNewName("")
        setNewNumber("")
        setMessage(`${newPerson.name} was successfully added to the phonebook.`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
    } else {
      // code here
      if (
        !window.confirm(
          `${newName} is already added to phonebook. Replace the old number with new one?`
        )
      ) {
        return
      }
      const person = persons.find((person) => person.name === newName)
      const updatedPerson = { ...person, number: newNumber }
      personService
        .update(updatedPerson.id, updatedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== updatedPerson.id ? person : returnedPerson
            )
          )
          setPersonsCopy(
            personsCopy.map((person) =>
              person.id !== updatedPerson.id ? person : returnedPerson
            )
          )
          setNewName("")
          setNewNumber("")
          setMessage(`${updatedPerson.name}'s number was successfully updated.`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch((error) => {
          setMessage(
            `Information of ${updatedPerson.name} has already been removed from server.`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setPersons(persons.filter((person) => person.id !== updatedPerson.id))
          setPersonsCopy(
            personsCopy.filter((person) => person.id !== updatedPerson.id)
          )
        })
    }
  }

  const deletePerson = (id, name) => {
    if (!window.confirm(`Delete ${name}?`)) {
      return
    }

    personService
      .destroy(id)
      .then(() => {
        setMessage(`${name} was successfully deleted from the phonebook.`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setPersons(persons.filter((person) => person.id !== id))
        setPersonsCopy(personsCopy.filter((person) => person.id !== id))
      })
      .catch((error) => {
        setMessage(
          `Information of ${name} has already been removed from server.`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setPersons(persons.filter((person) => person.id !== id))
        setPersonsCopy(personsCopy.filter((person) => person.id !== id))
      })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
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
      <Persons persons={persons} handleDelete={deletePerson} />
    </div>
  )
}

export default App
