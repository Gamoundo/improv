
import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"
import ReactPlayer from "react-player"
import {useHistory} from "react-router-dom"

    


function Login(props) {
    const history = useHistory()
    const [show, setShow] = useState(true);
    // const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            name: e.target.name.value
        }
        window.localStorage.setItem("Improv", JSON.stringify(user));
        props.updateUser(user.name)
        setShow(false)
        // history.push('/')

    }
    return (
        <div>

{/* <button variant="primary" onClick={handleShow}>
        Register?
      </button> */}
            <Modal show={show}>
            <Modal.Header >
                <Modal.Title id="registerForm">
                    Be named!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input type="text" name="name" />
                    <label htmlFor="name">Name</label> 
                    </div>
                    
                    
                    
                    <input type="submit" value="Name me"  />
                    
                     
                </form>
                <ReactPlayer url='https://www.youtube.com/watch?v=U0CGsw6h60k'/>
            </Modal.Body>
        </Modal>
        </div>
        
    )
}

export default Login