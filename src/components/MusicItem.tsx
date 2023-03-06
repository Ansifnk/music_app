import { Console } from 'console'
import React, { FC } from 'react'
import { addFav } from '../store/features/FavSlice'
import { useAppDispatch } from '../store/store'
import { Music } from '../utils/interfaces'
import { StarEmpty, StarFilled } from '../utils/svgIcons'

interface ItemProps {
    music: Music;
    favourite?: boolean
}




const MusicItem: FC<ItemProps> = ({ music, favourite }) => {

    const dispatch = useAppDispatch()
    return (
        <div className='mt-3 col-2' >
            <div className='music_item h-100 rounded border position-relative '>

                {/* condition inorder to hide on favourite list */}
                {!favourite && <div
                    className='position-absolute end-0 p-1  '
                    onClick={() => dispatch(addFav(music))}
                    role='button'
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add to favourites"
                >
                    <StarFilled />
                </div>}

                <img src={music.coverImage} className='p-0 m-0 img-fluid max-width rounded' />

                <p className='p-2 m-0 text-center' >{music?.title?.split('(')[0]}</p>


            </div>
        </div>
    )
}

export default MusicItem