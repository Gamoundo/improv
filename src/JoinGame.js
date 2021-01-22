import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"
import ReactPlayer from "react-player"
import {useHistory} from "react-router-dom"

function JoinGame(props) {
    console.log(props)
    const history= useHistory()
    const [show, setShow] = useState(false);
    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);
    const player= window.localStorage.getItem("Improv");
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e.target.value)
        let user = {
            name: JSON.parse(player).name,
            id: e.target.gameId.value
        }
        console.log(user)
        fetch("http://localhost:3000/join", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(r => r.json())
        .then(gameInfo => {
            
            console.log(gameInfo) 
           props.updateGame(gameInfo)     
           window.localStorage.setItem("Improv", JSON.stringify(gameInfo.currentUser))
        setShow(false)
        history.push(`/Game/${gameInfo.game.id}`)
        }
        )
        
        
        // window.localStorage.setItem("Improv", JSON.stringify(user));
        

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
                            <input type="number" name="gameId" />
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