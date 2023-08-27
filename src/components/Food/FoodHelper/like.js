import React, {useState} from "react"

import "./foodHelperPages.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FoodLike(){

    const [leftShow, setLeftShow] = useState(false);

    return(
        <div>
          <Button
            id="foodLikeButton" 
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
            id="foodLikeOffcanvas"
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
              className=""
              >
              😋 I like to eat... 😋
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            {/* ToDo.....
              <br/>
              bullet point list of what I like
              <br/>
              yummy
              <br/>
              maybe do a video of explaining what I like
            <br/>
            <br/> */}
            <h6
            className="foodHeading"
            >Here some help on what I like to eat
              <br/>
              <small> (If it helps you 😊)</small>
            </h6>
            <ul 
            className="foodList"
            >
              <li>
                I LOVE ❤️ LOVE ❤️ LOVE ❤️ pancakes 🥞
                <br/>
                <small>(I really wish there was IHOP in Birmingham 😭)</small>
              </li>
              <li>
                I have a sweet tooth 🍬🦷 
                <br/>
                <small>(my favourite sweet, the classic-flying saucers)</small>
              </li>
              <li>
                I do enjoy the mix of some flavours, sweet and savoury, bitter and smooth...
                <br/>
                <small> (perfect meal pancakes with full english 🥞🥓🍳🍟🍄)</small> 
              </li>
              <li>
                I like lemon
                <br/>
                <small>(Lemon meringue, lemon cake, lemon puff biscuits 🍋)</small>
              </li>
              <li>
                I am a meat eater 🥩
                <br/> 
                <small>(open to alternatives 🌿)</small>
              </li>
              <li>
                I like some fish 
                <br/>
                <small>(white fish such as - cod, haddock, mackerel, seabass or fillets like salmon)</small>
              </li>
              <li>
                I like BBQ 🔥
                <br/>
                <small>( 👍 handheld food - burgers, hotdogs, corn on a cob, wings, ribs 👍)</small>
              </li>
              <li>
                My favourite takeaway Chinese 🥡
                <br/>
                <small>(I really like noodles - chow mein, my fav)</small>
              </li>
            </ul>
            <p>
              maybe video explaining list?
            </p>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default FoodLike