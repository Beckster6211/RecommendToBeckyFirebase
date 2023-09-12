import React, {useState} from "react"

import "./readHelper.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ReadLike(){

    const [leftShow, setLeftShow] = useState(false);

    return(
        <div>
          <Button
            id="readLikeButton" 
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
            id="readLikeOffcanvas"
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
              id="readLikeTitle"
              >
              🤓 I like to read...🤓
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <h6
            className="readHeading"
            >Here some help on the kinds of books I like to read 
              <br/>
              <small> (If it helps you 😊)</small>
            </h6>

            <ul
            className="readList"
            >
              <li>
                I like to read fantasy/unusal type books 
                <br/>
                <small>(I like Immortal Instruments - Will watch the series at some point) 🗡️</small>
              </li>

              <li>
                I like reading books that have a tv/film adaption 📖📺
                <br/>
                <small>I like how they look compared to my imagination and also how they do some scenes differently to the books (Like Hunger Games and Twilight) 📺</small>
              </li>

              <li>
                I like mythology. My favourite is Athena (Greek Goddess of Wisdom - as well as others)
                <br/>
                <small>I like why things are called what they are and usually that has origins in Mythology (I like the Percy Jackson series of books 🔱) </small>
              </li>

            </ul>

            <p>
              todo - maybe video explaining list?
            </p>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default ReadLike