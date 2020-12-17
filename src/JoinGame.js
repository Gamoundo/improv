import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"
import ReactPlayer from "react-player"

function JoinGame() {
    const [show, setShow] = useState(true);
    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        let id = e.target.name.value
        window.localStorage.setItem("Improv", JSON.stringify(user));
        setShow(false)
        window.location = `/Game/${id}`

    }
    return (
        <div>

        <button variant="primary" onClick={handleShow}>
                Join Game?
              </button>
                    <Modal show={show}>
                    <Modal.Header closeButton onClick={handleClose}>
                        <Modal.Title id="joinForm">
                            Input Game Id
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <div>
                            <input type="number" name="Game Id" />
                            <label htmlFor="id">Id</label> 
                            </div>
                            
                            
                            
                            <input type="submit" value="Join Friends"  />
                            
                             
                        </form>
                        <ReactPlayer url='https://www.youtube.com/watch?v=U0CGsw6h60k'/>
                    </Modal.Body>
                </Modal>
                </div>
    )
}

export default JoinGame;