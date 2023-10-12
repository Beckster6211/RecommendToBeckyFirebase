import React, {useState} from "react"

import "./teleHelperPages.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function TeleDislike(){

    const [rightShow, setRightShow] = useState(false);

    return(
        <div>
          <Button 
            id="teleDislikeButton"
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
          id="teleDislikeOffcanvas"
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
               id="teleDislikeTitle"
              >
              😩 I don't like to binge... 😩
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <h6
            className="teleHeading"
            >Some help on the kinds of tv shows  I don't like to binge 
            <small> (Don't worry if not bingeable all in one go, I can wait each week for new episodes) ⏳</small>
            <br/>
              <small> (If it helps you 😊)</small>
            </h6>
            <ul
            className="teleList"
            >
              <li>
                I Hate 😡 Hate 😡 Hate 😡 spiders 🕷️
                <br/>
                <small>(Freakys of nature)</small>
              </li>

              <li>
                I don't enjoy scary 😱
                <br/>
                <small>(I am a bit of a wuss, I quit Constantine 15 minutes in)</small>
              </li>

              <li>
                Not really a soap fan 🧼
                <br/>
                <small> (my dad watches Coronation Street, think I know more of the story lines than he does though)🧱 </small>
              </li>

              <li>
                Not a reality fan 
                <br/>
                <small>
                  (I don't like TOWIE, Made Chelsea or Love Island, those kind of shows) ❤️🏝️
                </small>
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

export default TeleDislike