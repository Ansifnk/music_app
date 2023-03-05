import React, { FC } from 'react'
import { To, useNavigate } from 'react-router-dom';

const SideBar = () => {

  const navigate = useNavigate()

  interface ItemProps {
    title: string;
    path: string;
  }

  const SideBarItem: FC<ItemProps> = ({ title, path }) => (
    
    <div className='mt-3 p-1 d-flex justify-content-center align-items-center cursor-pointer '
      style={{ backgroundColor: '#9DC08B',cursor:'pointer' }}
      onClick={()=>navigate(path as To)}
    >
      <p className='m-0' >{title}</p>
    </div>
  )

  return (
    <div className='w-25' style={{ backgroundColor: '#609966' }} >
      <div className='m-5' >
        <SideBarItem title='Home' path='/' />
        <SideBarItem title='Search' path='/search' />
        <SideBarItem title='PlayLists' path='/' />
        <SideBarItem title='Favourites' path='/favourites' />
      </div>
    </div>
  )
}

export default SideBar