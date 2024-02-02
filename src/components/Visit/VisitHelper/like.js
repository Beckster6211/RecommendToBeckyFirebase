import React, {useState} from "react"

//
import "./visitHelper.css"

//bootstrap
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function VisitLike(){

    const [leftShow, setLeftShow] = useState(false);

    return(
        <div>
          <Button
            id="visitLikeButton" 
            className="border border-dark border-3 py-0 px-3"
            style={{
              
            }}
            onClick={()=>setLeftShow(true)}
          >
            ✔️
            <br/>
            Like
          </Button>

          <Offcanvas 
            id="visitLikeOffcanvas"
            className="bg-success-subtle w-75"
            style={{
              
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
              id="visitLikeTitle"
              >
              😁 I would like to visit... 😁
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <h6
            className="visitHeading"
            >Some help on the kinds of places I'd like to visit
              <br/>
              <small> (If it helps you 😊)</small>
            </h6>

            <ul
            className="visitList"
            >
              <li>
                I prefer cold/cooler weather 🥶 😎
                <br/>
                <small>(Not a hot weather fan and I burn very easily)</small>
              </li>

              <li>
                I like to secretly and discreetly learn something
                <br/>
                <small>(I can't resist a 'Did you know...'💡)</small>
              </li>

              <li> 
                I do have a passport so I am not against going outside the country
                <br/>
                <small>I have tended to visit this country, a lot of Cornwall - <small>(still lots more to do)</small></small>
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

export default VisitLike