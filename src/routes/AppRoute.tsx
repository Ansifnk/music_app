import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import LayOut from '../components/LayOut';
import useAuth from '../hooks/useAuth';
import AuthRequired from '../pages/AuthRequired';
import FavouritesPage from '../pages/FavouritesPage';
import HomePage from '../pages/HomePage';
import PlayListsPage from '../pages/PlayListsPage';
import SearchPage from '../pages/SearchPage';
import { addFav } from '../store/features/FavSlice';
import { AddList } from '../store/features/PlayListSlice';


const AppRoute = () => {

    const user = useAuth()


    
    return (
        <Routes>

            {user && <Route path='/' element={<LayOut />} >
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="/playlists" element={<PlayListsPage />} />
            </Route>}
        </Routes>
    )
}

export default AppRoute