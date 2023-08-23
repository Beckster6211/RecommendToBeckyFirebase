import React, {useState} from "react"

// import "./beckyAlert.css"
//
import "./alert.css"

//
import Modal from "react-bootstrap/Modal"
import CloseButton from 'react-bootstrap/CloseButton';

function BeckyAlert(){
   
    const [open, setOpen] = useState(true)

    return(
        <div> 
            <Modal
                // id="modalBecky1"
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
                className="text-center rounded bg-primary border border-dark border-3"
                style={{

                }}
                >

                  <CloseButton
                  className="modalCloseButton position-absolute top-0 end-0 m-2"
                  onClick={()=>{
                    setOpen(false)
                  }}
                  />

                  <p
                  // id="modalBecky2"
                  className="modalMain"
                  >
                    Hi Becky
                  </p>
                  <p
                  // id="modalBecky3"
                  className="modalComment"
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