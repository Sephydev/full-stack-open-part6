import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject).sort((a, b) => a.votes - b.votes)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    newAnecdoteAction(state, action) {
      return [...state, action.payload]
    },
    voteAction(state, action) {
      const newState = state.map(anecdote => anecdote.id === action.payload.id ? action.payload : anecdote)
      return newState.sort((a, b) => b.votes - a.votes)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})


export const { newAnecdoteAction, voteAction, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(newAnecdoteAction(newAnecdote))
  }
}

export const incrementVote = id => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    const anecdoteToModify = anecdotes.find(anecdote => anecdote.id === id)
    const anecdoteModified = await anecdotesService.update(id, { ...anecdoteToModify, votes: anecdoteToModify.votes + 1 })
    dispatch(voteAction(anecdoteModified))

  }
}

export default anecdoteSlice.reducer