import axios from 'axios'
import React, { FC, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Music } from '../utils/interfaces'

interface ItemProps {
    setMusics: (musics: Music[]) => void
}

const SearchComp: FC<ItemProps> = ({ setMusics }) => {

    const [searchKey, setSearchKey] = useState<string>('')

    const SearchHandler = () => {
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: { term: searchKey, locale: 'en-US', offset: '0', limit: '20' },
            headers: {
                'X-RapidAPI-Key': '2e5ff894aamsh51aafc06fb8cbbcp176d9djsn47613e8cba00',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            let musics = response.data.tracks.hits.map((m: any) => ({ title: m.track.title,subTitle:m.track.subtitle,coverImage:m.track.images.background }))
            setMusics(musics)

        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div className='p-3 mt-3 d-flex' >
            <input className="me-2 form-control" onChange={(e) => setSearchKey(e.target.value)} type="text" placeholder="Search here...." />
            <button onClick={SearchHandler} type="button"   className=" btn btn-primary ">Search</button>
        </div>
    )
}

export default SearchComp