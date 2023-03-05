import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Music } from "../../utils/interfaces";


interface FavState {
    favs: Music[];
}


const initialState: FavState = {
    favs: []
}

export const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        addFav: (state, action: PayloadAction<Music>) => {
            // console.log(action.payload,'ac')
            state.favs.push(action.payload)
            alert('Added to favourites')
        }
    }
})


export default favSlice.reducer

export const { addFav } = favSlice.actions