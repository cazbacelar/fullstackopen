const DeleteButton = ({ handleDelete }) => {
  return (
    <>
      <button onClick={handleDelete}>Delete</button>
    </>
  )
}

const Person = ({ name, number, handleDelete }) => {
  return (
    <div>
      <p>
        {name} {number} <DeleteButton handleDelete={handleDelete} name={name} />
      </p>
    </div>
  )
}

const Persons = ({ persons, handleDelete }) => {
  // props.persons = array of objects

  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          number={person.number}
          handleDelete={() => handleDelete(person.id, person.name)}
        />
      ))}
    </div>
  )
}

export default Persons
