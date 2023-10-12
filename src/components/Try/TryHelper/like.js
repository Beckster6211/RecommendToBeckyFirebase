import React, {useState} from "react"

//
import "./tryHelper.css"

// bootstrap
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function TryLike(){

    const [leftShow, setLeftShow] = useState(false);

    return(
        <div>
          <Button
            id="tryLikeButton" 
            className="border border-dark border-3 py-0 px-3"
            style={{
              // fontSize:"1.5vw"
            }}
            // variant="success" 
            onClick={()=>setLeftShow(true)}
          >
            {/* 👈 Like */}
            ✔️
            <br/>
            Like
          </Button>

          <Offcanvas 
            id="tryLikeOffcanvas"
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
              id="tryLikeTitle"
              >
              👍 I'd like to try ... 👍
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <h6
            className="tryHeading"
            >Some help on the kinds of I would like to try
              <br/>
              <small> (If it helps you 😊)</small>
            </h6>
            <ul
            className="tryList"
            >
              <li>
                I'm not against a bit of out there. I like a little adrenalin rush
                <br/>
                <small>(I've done one of those high wall climbs 🧗)</small>
              </li>

              <li>
                I am trying to be healthier (I have a dog would love if could take him for runs instead of walks) 🐕🚶
                <br/>
                <small>
                  (I do struggle a little with sticking to it, so if anyone needs an exercise buddy) 🏃 🏋️
                </small>
              </li>

              <li>
                Open to new sport experiences 
                <small> (Sometimes I surprise mself with the sports I like watching on tv 🏆)</small>
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

export default TryLike