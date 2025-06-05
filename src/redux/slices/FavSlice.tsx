import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface Product {
  title: string,
  price: string,
  // Add other fields like price, icon, etc., if needed
}
interface CounterState {
  value: Product[]
}

// Define the initial state using that type
const initialState: CounterState = {
  value: [],
}

export const FavSlice = createSlice({
  name: 'Favourites',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<Product>) => {
      state.value = [action.payload, ...state.value]
    },
    delFav: (state, action: PayloadAction<Product>) => {
      state.value = state.value.filter((item: any) => {
        return item.title !== action.payload.title
      })
    },

    clearFav: (state) => {
      state.value = initialState.value
    }
  },
})

export const { addFav, delFav, clearFav } = FavSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.Favourites.value

export default FavSlice.reducer