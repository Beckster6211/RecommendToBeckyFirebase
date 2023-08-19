import React, {useState} from "react"

import "./readHelper.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ReadDislike(){

    const [rightShow, setRightShow] = useState(false);

    return(
        <div>
          <Button 
            id="readDislikeButton"
            className=""
            style={{
              // fontSize:"1.5vw"
            }}
            variant="danger" 
            onClick={()=> setRightShow(true)}
            >
              Dislike 👉
          </Button>

          <Offcanvas 
          id="readDislikeOffcanvas"
          className="bg-danger-subtle w-75"
          style={{

          }}
          show={rightShow} 
          onHide={()=>setRightShow(false)} 
          placement="end"
          >
            <Offcanvas.Header 
              className="bg-danger"
            closeButton
            >
              <Offcanvas.Title>
              😴 I Dislike... 😴
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              ToDo.....
              <br/>
            bullet point list of what I dislike
              <br/>
              .
              .
              .
              .
              <br/>
              {/* maybe do a video of explaining what I dislike */}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default ReadDislike