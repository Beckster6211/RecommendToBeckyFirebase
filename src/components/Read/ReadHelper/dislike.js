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
              <Offcanvas.Title
              id="readDislikeTitle"
              >
            😴 I don't like to read... 😴
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

            <h6
            className="readHeading"
            >Here some help on the kinds of books I don't like to read 
            <br/>
              <small> (If it helps you 😊)</small>
            </h6>

                <ul
                className="readList"
                >
                  <li>
                    I don't like crime novels or anything like that
                    <br/>
                    <small>(I would prefer to watch something like) 🕵️‍♀️</small>
                  </li>

                  <li>
                    I don't like anything too heavy or intense
                    <br/>
                    <small>(Tried to get into Dan Brown Davinici Code but didn't like it - my dad enjoyed it ✝️)</small>
                  </li>

                  <li>
                    I'm not really a fan of autobiographies 
                    <br/>
                    <small> (although if its the right person maybe??) ⌨️</small> 
                  </li>

                </ul>


              ToDo.....
              <br/>
            bullet point list of what I dislike
              <br/>
                           .
              <br/>
              {/* maybe do a video of explaining what I dislike */}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default ReadDislike