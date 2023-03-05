import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Music } from "../../utils/interfaces";



interface PlayListState {
    lists: string[]
}


const initialState: PlayListState = {
    lists: []
}

export const playListsSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        AddList: (state, action: PayloadAction<string>) => {
            // console.log(action.payload,'ac')
            state.lists.push(action.payload)
            alert('Play list created')
        }
    }
})


export default playListsSlice.reducer

export const { AddList } = playListsSlice.actions