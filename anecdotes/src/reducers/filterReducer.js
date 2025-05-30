import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilterAction(state, action) {
      return action.payload.toLowerCase()
    }
  }
})

export const { changeFilterAction } = filterSlice.actions
export default filterSlice.reducer