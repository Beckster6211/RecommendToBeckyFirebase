import React, {useState} from "react"

//
import "./tryHelper.css"

// bootstrap
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function TryDislike(){

    const [rightShow, setRightShow] = useState(false);

    return(
        <div>
          <Button 
            id="tryDislikeButton"
            className="border border-dark border-3 py-0 px-2"
            style={{
              // fontSize:"1.5vw"
            }}
            // variant="danger" 
            onClick={()=> setRightShow(true)}
            >
              {/* Dislike 👉 */}
              ❌
              <br/>
              Dislike
          </Button>

          <Offcanvas 
          id="tryDislikeOffcanvas"
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
              <Offcanvas.Title
              id="tryDislikeTitle"
              >
              👎 I wouldn't like to try... 👎
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <h6
            className="tryHeading"
            >Some help on the kinds of I wouldn't like to try
              <br/>
              <small> (If it helps you 😊)</small>
            </h6>

            <ul
            className="tryList"
            >
              <li>
                I do have a little bit of a balance issues ⚖️
                <br/>
                <small>
                  (I have problem ears but will try my best 👂)
                </small>
              </li>

              <li>
                I suffer from motion sickness 🤢
                <br/>
                <small>
                  (so a no to rollar coasters 🎢)
                </small>
              </li>
            </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default TryDislike