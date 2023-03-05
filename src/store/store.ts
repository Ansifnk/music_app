import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { favSlice } from "./features/FavSlice";
import { playListsSlice} from "./features/PlayListSlice";




export const store = configureStore({
    reducer: {
        fav: favSlice.reducer,
        playList:playListsSlice.reducer
    }
})




export const useAppDispatch :()=>typeof store.dispatch = useDispatch;
export const useAppSelector :TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;