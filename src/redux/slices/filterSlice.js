import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        categoryId: 0,
        sortType: {name: 'популярности', sortName: 'rating'}
    },
    reducers: {
        setCategoryId: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.categoryId = action.payload
        },
        setSortType: (state, action) => {
            state.sortType = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { setCategoryId,setSortType } = filterSlice.actions

console.log(filterSlice)
export default filterSlice.reducer