import React, {useState} from "react"

import "./filmHelperPages.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FilmDislike(){

    const [rightShow, setRightShow] = useState(false);

    return(
        <div>
          <Button 
            id="filmDislikeButton"
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
          id="filmDislikeOffcanvas"
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
              id="filmDislikeTitle"
              >
              🥱 I don't like to watch... 🥱
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <h6
            className="filmHeading"
            >Some info on the kinds of films I don't like
              <br/>
              <small> (If it helps you 😊)</small>
            </h6>
            <ul
            className="filmList"
            >
              <li>
                I Hate 😡 Hate 😡 Hate 😡 spiders 🕷️
                <br/>
                <small>(Freakys of nature)</small>
              </li>
              <li>
                I don't enjoy horrors 😱
                <br/>
                <small>(I am a bit of a wuss, A Quiet Place is probably as scary as I'll go)</small>
              </li>
              <li>
                I don't like pointless blood and guts films, I'm not squeamish or anything I just sometimes don't get the point 🩸
                <br/>
                <small>(One I watched it seemed like the plot was "How many different ways can we get someone to die?")</small> 😒
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

export default FilmDislike