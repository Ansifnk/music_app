import React, { FC } from 'react'
import { To, useNavigate } from 'react-router-dom';

const SideBar = () => {

  const navigate = useNavigate()

  interface ItemProps {
    title: string;
    path: string;
  }

  const SideBarItem: FC<ItemProps> = ({ title, path }) => (

    <div role='button' className='side_bar_btn mt-3 p-1 d-flex justify-content-center align-items-center cursor-pointer rounded '
      // style={{ backgroundColor: '#9DC08B' }}
      onClick={() => navigate(path as To)}
    >
      <p className='m-0' >{title}</p>
    </div>
  )

  return (
    <div className='w-25' style={{ backgroundColor: '#609966' }} >
      <div
        role='button'
        onClick={() => navigate('/')}
        className='m-3 mt-5 text-warning'
      >
        <h1>Music App</h1>
      </div>
      
      {/*=============== Button section================= */}
      <div className='m-5' >
        <SideBarItem title='Home' path='/' />
        <SideBarItem title='Search' path='/search' />
        <SideBarItem title='Favourites' path='/favourites' />
        <SideBarItem title='PlayLists' path='/playlists' />
      </div>
    </div>
  )
}

export default SideBar