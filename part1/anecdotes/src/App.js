import { useState } from "react"

const Title = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>Votes: {votes}</p>
    </div>
  )
}

const HighestRated = ({ anecdotes, votes }) => {
  const highestVote = Math.max(...votes)
  const anecdoteIndex = votes.indexOf(highestVote)
  const anecdote = anecdotes[anecdoteIndex]

  if (highestVote === 0) {
    return (
      <div>
        <p>No anecdote has received a vote yet.</p>
      </div>
    )
  }

  return (
    <div>
      <Anecdote anecdote={anecdote} votes={votes[anecdoteIndex]} />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  const updateVotes = () => {
    const copyVotes = [...votes]
    copyVotes[selected] = votes[selected] + 1
    setVotes(copyVotes)
  }

  const changeAnecdote = () => {
    const randomIndex = Math.trunc(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  return (
    <div>
      <Title text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={updateVotes} text="Vote +1" />
      <Button handleClick={changeAnecdote} text="Next anecdote" />
      <Title text="Anecdote with most votes" />
      <HighestRated anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
