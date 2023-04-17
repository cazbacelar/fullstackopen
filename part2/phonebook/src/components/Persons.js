const Person = ({ name, number }) => {
  return (
    <div>
      <p>{name} {number}</p>
    </div>
  )
}

const Persons = (props) => {
  // props.persons = array of objects
  const persons = props.persons

  return (
    <div>
      {persons.map((person) => <Person key={person.id} name={person.name} number={person.number} />)}
    </div>
  )
}

export default Persons
