import {createSlice} from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0, active: true},
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state, action) {
            state.active = action.payload
        }
    }
})

export const  counterActions = counterSlice.actions


export default counterSlice.reducer
