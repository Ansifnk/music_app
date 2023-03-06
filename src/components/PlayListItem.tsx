import React, { FC } from 'react'


interface ItemProps {
    name: string
}
const PlayListItem: FC<ItemProps> = ({ name }) => {
    return (
        <div role='button' className='p-3 border rounded mt-2 ' >
            <h6>{name}</h6>
        </div>
    )
}

export default PlayListItem