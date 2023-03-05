import React, { FC, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { AddList } from '../store/features/PlayListSlice';

interface Props {
    show: boolean,
    handleClose: () => void
}

const AddPlaylistModal: FC<Props> = ({ show, handleClose }) => {

    const [name, setName] = useState<string>('')

    const dispatch = useDispatch()


    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Playlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div>
                        <input className="me-2 form-control" onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { dispatch(AddList(name)); handleClose() }}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddPlaylistModal