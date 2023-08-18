import React, {useState} from "react"

import "./teleHelperPages.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function TeleLike(){

    const [leftShow, setLeftShow] = useState(false);

    return(
        <div>
          <Button
            id="teleLikeButton" 
            className=""
            style={{
              // fontSize:"1.5vw"
            }}
            variant="success" 
            onClick={()=>setLeftShow(true)}
          >
            👈 Like
          </Button>

          <Offcanvas 
            id="teleLikeOffcanvas"
            className="bg-success-subtle w-75"
            style={{
              // width:"50%"
            }}
            show={leftShow} 
            onHide={()=>setLeftShow(false)} 
            placement="start"
          >
            <Offcanvas.Header
              className="bg-success" 
              closeButton
            >
              <Offcanvas.Title
              className=""
              >
              🤩 I Like...🤩
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            ToDo.....
              <br/>
              bullet point list of what I like
              <br/>
              .
              .
              .
              .
              <br/>
              {/* maybe do a video of explaining what I like */}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default TeleLike