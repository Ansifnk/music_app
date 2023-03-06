import React from 'react'
import { useNavigate } from 'react-router-dom'
import MusicItem from '../components/MusicItem'
import PlayListItem from '../components/PlayListItem'
import { useAppSelector } from '../store/store'

const HomePage = () => {

  const playlists = useAppSelector(state => state.playList.lists)
  const favourites = useAppSelector(state => state.fav.favs)

  const navigate = useNavigate()

  return (
    <div className='m-0 p-0 container'>
      <div className='py-5 px-3' style={{ backgroundColor: "#3795BD" }} >
        <h2 className='text-white ' >Home</h2>
      </div>

      {/*======================== Playlists section ========================= */}
      <div className='p-3' >
        <div className='d-flex justify-content-between border-bottom border-dark'  >
          <h4>Playlists</h4>
          <a role='button' className="link-primary" onClick={() => navigate('/playlists')} >Show more</a>
        </div>
        {playlists.length > 0 ? <div>
          {playlists.slice(0, 3).map((name) => <PlayListItem name={name} />)}
        </div> :
          <div className='mt-5 d-flex justify-content-center' >
            <p className='text-secondary' >No Playlists created</p>
          </div>}
      </div>

      {/*======================== favourites section ========================= */}
      <div className='p-3' >
        <div className='d-flex justify-content-between border-bottom border-dark' >
          <h4>Favourites</h4>
          <a role='button' className="link-primary" onClick={() => navigate('/favourites')} >Show more</a>
        </div>
        {favourites.length > 0 ? <div className='row' >
          {favourites.slice(0, 4).map((music) => <MusicItem music={music} favourite />)}
        </div> : <div className='mt-5 d-flex justify-content-center' >
          <p className='text-secondary' >No Music added to favourites</p>
        </div>}
      </div>
    </div>
  )
}

export default HomePage