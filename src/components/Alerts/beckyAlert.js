import React, {useState} from "react"

import "./beckyAlert.css"

import Modal from "react-bootstrap/Modal"

function BeckyAlert(){
   
    const [open, setOpen] = useState(true)


    return(
        <div> 
            <Modal
            id="modalBecky1"
                className="bg-light bg-opacity-50 px-5"
                style={{
                  // fontSize:"3vw"
                }} 
                show={open} 
                onHide = {()=> setOpen(false)}
                centered
                animation
                
                >
                <Modal.Body 
                className="text-center rounded bg-success border border-dark border-3"
                style={{

                }}
                
                >
                  <p
                  id="modalBecky2"
                  >
                    Hi Becky
                  </p>
                  <p
                  id="modalBecky3"
                  >
                    <i>
                  (you know what to do
                  <br/>
                  fingers crossed)
                  </i>
                  </p>
                </Modal.Body>
              </Modal>
                    
        </div>
    )
}

export default BeckyAlert;