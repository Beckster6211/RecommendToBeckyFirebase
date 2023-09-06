import React, {useState} from "react"

import "./foodHelperPages.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FoodDislike(){

    const [rightShow, setRightShow] = useState(false);

    return(
        <div>
          <Button 
            id="foodDislikeButton"
            className=""
            style={{
              // fontSize:"1.5vw"
            }}
            variant="danger" 
            onClick={()=> setRightShow(true)}
            >
              Dislike 🤮
               {/* 👉 */}
          </Button>

          <Offcanvas 
          id="foodDislikeOffcanvas"
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
              id="foodDislikeTitle"
              >
              🤮 I don't like to eat... 🤮
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* ToDo.....
              <br/>
            bullet point list of what I dislike
              <br/>
              yuck
              maybe do a video of explaining what I dislike */}
              <h6
            className="foodHeading"
            >Here some help on what I don't like to eat
              <br/>
              <small> (If it helps you 😊)</small>
            </h6>
            <ul 
            className="foodList"
            >
              <li>
                I don't like spicy food 🌶️🥵
                <br/>
                <small>(I don't mind a tiny bit of heat 🤏)</small>
              </li>
              <li>
                I HATE cheese, fastest way to ruin a burger 🧀
                <br/>
                <small>(I will eat pizza and lasagne though 😐)</small>
              </li>
              <li>
                I don't like nuts 🥜
                <br/>
                <small>(Even if you covered them in chocolate, still no)</small>
              </li>
              <li>
                I don't like some fish 
                <br/>
                <small>(I don't like tinned fish - tinned tuna, tinned salmon)</small>
              </li>
              <li>
                I can be fussy about texture
                <br/>
                <small>(👎 I don't like juice with bits in or thick milkshakes 👎)</small>
              </li>
              <li>
                I hate beans (all kinds)
                <br/>
                <small>(especially Chilli - I can't pick them out, theres always too many...😭)</small>
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

export default FoodDislike