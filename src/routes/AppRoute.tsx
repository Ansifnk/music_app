import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import LayOut from '../components/LayOut';
import useAuth from '../hooks/useAuth';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import SearchPage from '../pages/SearchPage';


const AppRoute = () => {

    const user = useAuth()

   

    return (
        <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> */}

            <Route path='/' element={<LayOut />} >
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />

            </Route>
        </Routes>
    )
}

export default AppRoute