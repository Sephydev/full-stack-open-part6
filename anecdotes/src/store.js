import { configureStore } from '@reduxjs/toolkit'

import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const creatingStore = () => {
  return configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer
    }
  })
}

export default creatingStore