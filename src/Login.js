
import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"
import ReactPlayer from "react-player"

    


function Login() {
    const [show, setShow] = useState(true);
    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            name: e.target.name.value
        }
        window.localStorage.setItem("Improv", JSON.stringify(user));
        window.location = '/'

    }
    return (
        <div>

<button variant="primary" onClick={handleShow}>
        Register?
      </button>
            <Modal show={show}>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title id="registerForm">
                    Join us? Yes!?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input type="text" name="name" />
                    <label htmlFor="name">Name</label> 
                    </div>
                    
                    
                    
                    <input type="submit" value="Name me" onClick={handleClose} />
                    
                     
                </form>
                <ReactPlayer url='https://www.youtube.com/watch?v=paYa6m5yJEE&list=PLb0mEpWg8c6W8ns6LR8uMfY-Pue6fl5Pe&index=25&t=0s'/>
            </Modal.Body>
        </Modal>
        </div>
        
    )
}

export default Login