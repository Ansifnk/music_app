import { Console } from 'console'
import React, { FC } from 'react'
import { Music } from '../utils/interfaces'

interface ItemProps {
    music: Music
}


const MusicItem: FC<ItemProps> = ({ music }) => {
    // console.log(music)
    return (
        <div className='mt-3 col-2' >
           <div className='h-100 rounded border'>
           <img src={music.coverImage} className='p-0 m-0 img-fluid max-width rounded' />
            <p className='p-0 m-0 text-center' >{music.title}</p>
           </div>
        </div>
    )
}

export default MusicItem