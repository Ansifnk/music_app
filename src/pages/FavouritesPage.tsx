import React from 'react'
import MusicItem from '../components/MusicItem'
import { useAppSelector } from '../store/store'

const FavouritesPage = () => {

    const favourites = useAppSelector(state => state.fav.favs)

    return (
        <div className=' m-0 p-0 container'  >
            <div className='py-5 px-3' style={{ backgroundColor: "#3795BD" }} >
                <h2 className='text-white ' >Your Favourites goes here...</h2>
            </div >
            <div className='p-3 row '>
                {
                    favourites.map(music => <MusicItem music={music} />)
                }
            </div>
        </div>
    )
}

export default FavouritesPage