import deepFreeze from 'deep-freeze'
import anecdoteReducer from './anecdoteReducer'

describe('anecdote reducer', () => {
  const initialState = [
    {
      content: 'If it hurts, do it more often',
      id: 1,
      votes: 0
    },
    {
      content: 'Adding manpower to a late software project makes it later!',
      id: 2,
      votes: 0
    }
  ]

  test('action `vote` increment correctly the vote', () => {
    const action = {
      type: 'VOTE',
      payload: { id: 1 }
    }

    deepFreeze(initialState)
    const newState = anecdoteReducer(initialState, action)
    expect(newState[0].votes).toEqual(1)
    expect(newState[1].votes).toEqual(initialState[1].votes)
  })

  test('can create new anecdote', () => {
    const action = {
      type: 'NEW_ANECDOTE',
      payload: { content: 'This is a test anecdote' }
    }

    deepFreeze(initialState)
    const newState = anecdoteReducer(initialState, action)
    expect(newState[newState.length - 1]).toHaveProperty('content', 'This is a test anecdote')
  })

  test('anecdote are sorted by vote', () => {
    const action = {
      type: 'VOTE',
      payload: { id: 2 }
    }

    deepFreeze(initialState)
    const newState = anecdoteReducer(initialState, action)
    expect(newState[0]).toHaveProperty('votes', 1)
  })
})