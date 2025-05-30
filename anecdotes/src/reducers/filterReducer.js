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

// const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case 'CHANGE_FILTER':
//       return action.payload
//     default:
//       return state
//   }
// }

// export const changeFilterAction = (filter) => {
//   return {
//     type: 'CHANGE_FILTER',
//     payload: filter
//   }
// }

export const { changeFilterAction } = filterSlice.actions
export default filterSlice.reducer