import axios from 'axios'
import React, { FC, useState } from 'react'
import { Button } from 'react-bootstrap'
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead'
import { Music } from '../utils/interfaces'

interface ItemProps {
    setMusics: (musics: Music[]) => void
}


const SearchComp: FC<ItemProps> = ({ setMusics }) => {

    const [loading, setLoading] = useState(false)
    const [options, setOptions] = useState<{ term: string }[]>([])

    const getMusics = (searchKey: any) => {
      
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/search',
            params: { term: searchKey.term, locale: 'en-US', offset: '0', limit: '20' },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);

            let musics = response.data.tracks.hits.map((m: any) => ({ title: m.track.title, subTitle: m.track.subtitle, coverImage: m.track.images.background }))
            setMusics(musics)

        }).catch(function (error) {
            console.error(error);
        });
    }
    const handleSearch = async (query: string) => {
        setLoading(true);
        const options = {
            method: 'GET',
            url: 'https://shazam.p.rapidapi.com/auto-complete',
            params: { term: query, locale: 'en-US' },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            let tmpOptions = response.data.hints.map((hint: any) => hint)
            setOptions(tmpOptions)

        }).catch(function (error) {
            console.error(error);
        });

        setLoading(false)

    };

    return (
        <div className='p-3 mt-3 d-flex' >

            <div className='w-100  me-2 ' >
                <AsyncTypeahead
                    onChange={(e) => getMusics(e[0])}
                    filterBy={() => true}
                    id="async-example"
                    isLoading={loading}
                    labelKey="term"
                    minLength={3}
                    onSearch={handleSearch}
                    options={options}
                    placeholder="Search for music..."
                    renderMenuItemChildren={(item: any) => (
                        <div className='w-full' >
                            <span>{item.term}</span>
                        </div>
                    )}
                    className='w-10'
                />
            </div>
        </div>
    )
}

export default SearchComp