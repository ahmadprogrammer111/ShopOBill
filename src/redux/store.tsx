import { configureStore } from '@reduxjs/toolkit'
import Favourites from './slices/FavSlice'

export const store = configureStore({
    reducer: {
        Favourites
    },
})




const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    console.log('State changed:', state.Favourites.value)
})

// To stop listening later:
unsubscribe()




export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch