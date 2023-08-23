import React, {useState} from "react"

//
import "./visitHelper.css"

//
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function VisitDislike(){

    const [rightShow, setRightShow] = useState(false);

    return(
        <div>
          <Button 
            id="visitDislikeButton"
            className=""
            style={{
              
            }}
            variant="danger" 
            onClick={()=> setRightShow(true)}
            >
              Dislike 👉
          </Button>

          <Offcanvas 
          id="visitDislikeOffcanvas"
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
              😫 I Dislike... 😫
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

export default VisitDislike