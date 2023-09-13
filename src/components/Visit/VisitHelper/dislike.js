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
              <Offcanvas.Title
              id="visitDislikeTitle"
              >
              😫 I don't like to visit... 😫
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

            <h6
            className="visitHeading"
            >Here some help on the kinds of places I wouldn't like to visit
              <br/>
              <small> (If it helps you 😊)</small>
            </h6>

              <ul
              className="visitList"
              >
                <li>
                  I don't like boring places
                  <br/>
                  <small>(but who does 😒)</small>
                </li>

                <li>
                  I am on a limited budget 💰
                  <br/>
                  <small>(So watch my bank balance please 💷)</small>
                </li>

                <li>
                  I am not against roughing it but up to a point
                  <br/>
                  <small>(I'm not sure if hitch hiking is for me 🧭)</small>
                </li>

                <li>
                  I do suffer from travel sickness so please be careful of the amount of travel 🤢
                  <br/>
                  <small>(It is worst in a car 🚗 - I do take tablets but they have a limit)</small>
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

export default VisitDislike