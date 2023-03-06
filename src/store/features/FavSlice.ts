import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Music } from "../../utils/interfaces";


// const favs = await JSON.parse(localStorage.getItem('favs') ?? '[]')
// const playlists = await JSON.parse(localStorage.getItem('playlists') ?? '[]')

interface FavState {
    favs: Music[];
}


const initialState: FavState = {
    favs: JSON.parse(localStorage.getItem('favs') ?? '[]') ?? []
}

export const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        addFav: (state, action: PayloadAction<Music>) => {
            // console.log(action.payload,'ac')
            state.favs.push(action.payload)
            localStorage.setItem('favs', JSON.stringify(state.favs))
            alert('Added to favourites')
        }
    }
})


export default favSlice.reducer

export const { addFav } = favSlice.actions