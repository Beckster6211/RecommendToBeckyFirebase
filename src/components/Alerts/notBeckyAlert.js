import React, {useState} from "react"

//
// import "./notBeckyAlert.css"
import "./alert.css"

//
import Modal from "react-bootstrap/Modal"
import CloseButton from 'react-bootstrap/CloseButton';

function NotBeckyAlert(){

    const [open, setOpen] = useState(true)

    return(
        <div>
            <Modal
                // id="modalNotBecky1"
                 className="bg-light bg-opacity-50 px-5"
                 style={{
                  // fontSize:"4.5vw",
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
                  <CloseButton
                  className="modalCloseButton position-absolute top-0 end-0 m-2"
                  onClick={()=>{
                    setOpen(false)
                  }}
                  />
                  
                  <p 
                  // id="modalNotBecky2"
                  className="modalMain">
                    Welcome To 
                    <br/>
                    Recommend To Becky
                  </p>
                   <p
                  //  id="modalNotBecky3"
                  className="modalComment"
                   >
                    <i>(sorry if already seen this once, working on that...)</i>
                    </p>
                 </Modal.Body>
               </Modal> 
        </div>
    )
}

export default NotBeckyAlert