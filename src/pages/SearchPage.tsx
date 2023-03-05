import React, { useState } from 'react'
import MusicItem from '../components/MusicItem'
import SearchComp from '../components/SearchComp'
import { Music } from '../utils/interfaces'


const SearchPage = () => {



    const [musics, setMusics] = useState<Music[]>([])

    return (
        <div className=' m-0 p-0 container'  >
            <div className='py-5 px-3' style={{ backgroundColor: "#3795BD" }} >
                <h2 className='text-white ' >Search For fascinating musics</h2>
            </div>

            <SearchComp setMusics={setMusics} />

            <div className='p-3 row ' >
                {
                    musics.map(m => <MusicItem music={m} />)
                }
            </div>

        </div>
    )
}

export default SearchPage