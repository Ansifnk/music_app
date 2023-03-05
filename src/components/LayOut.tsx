import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const LayOut = () => {
    
    return (
        <div className='w-100 vh-100 d-flex '>

            <SideBar />

            <div className="w-75">
                <Outlet />
            </div>
        </div>
    )
}

export default LayOut