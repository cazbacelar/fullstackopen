const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  )
}

const Content = ({ parts }) => {
  // parts is an array of objects
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = ({ parts }) => {
  //const total = parts.map((part) => part.exercises).reduce((a, b) => a + b, 0) -> using map and reduce

  // using reduce with an array of objects to sum one of the properties of each -> returns an object with key:sum
  // so I destructured the object returned 
  const { exercises } = parts.reduce((a, b) => ({ exercises: a.exercises + b.exercises }))

  return (
    <div>
      <p>
        Total of {exercises} exercises
      </p>
    </div>
  )
}

const Course = (props) => {
  const { name, parts } = props.course
  // props.course is the course object{}
  // parts is an array of objects
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  }

  return <Course course={course} />
}

export default App
