import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import AddPlaylistModal from '../components/AddPlaylistModal'
import { useAppSelector } from '../store/store'

const PlayListsPage = () => {

    const playlists = useAppSelector(state => state.playList.lists)

    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <div>
            <div className=' m-0 p-0 container'  >
                <div className=' py-5 px-3 d-flex justify-content-between' style={{ backgroundColor: "#3795BD" }} >
                    <h2 className='text-white ' >Browse your lists</h2>
                    <Button variant="primary" onClick={() => setShowModal(true)}>
                       Add new
                    </Button>
                </div >
                {playlists.length == 0 ?
                    <div className='d-flex mt-5 align-items-center justify-content-center' >
                        <h3>Play list is empty</h3>
                    </div> :
                    <div className='p-3 row '>
                        {
                            playlists.map((list) => <p>{list}</p>)
                        }
                    </div>}
            </div>
            <AddPlaylistModal show={showModal} handleClose={() => setShowModal(false)} />
        </div>
    )
}

export default PlayListsPage