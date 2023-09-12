import React, {useState} from "react"

import "./teleHelperPages.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function TeleLike(){

    const [leftShow, setLeftShow] = useState(false);

    return(
        <div>
          <Button
            id="teleLikeButton" 
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
            id="teleLikeOffcanvas"
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
              id="telelikeTitle"
              >
              🤩 I like to binge...🤩
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <h6
            className="teleHeading"
            >Here some help on the kinds of tv shows  I like to binge 
            <small> (Don't worry if not bingeable all in one go, I can wait each week for new episodes) ⏳</small>
              <br/>
              <small> (If it helps you 😊)</small>
            </h6>

            <ul className="teleList">
            <li>
                I LOVE ❤️ LOVE ❤️ LOVE ❤️ animation ✏️
                <br/>
                <small>(All different kinds, hand drawn like Tom and Jerry, modern computer/digital like Pixar and stop motion like Aardman) ⏳</small>
              </li>

              <li>
                I have brothers so not against a superhero 🦸 I have joined in the conversations 
                <br/>
                <small> (Loki, Arrow, Flash, SuperGirl...)</small>
              </li>

              <li>
                I like sci-fi/fantasy/magic (
                  Once Upon A Time, Misfits, Game of Thrones...) 📖👮🐉
                  <br/>
                <small> I enjoy dystopian shows, Its Earth but not Earth</small>
              </li>

              <li>
                I'm okay with learning something 🧠 if quite indepth, like science or medical. 
                <br/>
                 <small>
                  Sometimes I suprise myself (Like - The Good Doctor and QI) 💭
                </small>
              </li>

              <li>
                I like comedy, particularly people just being funnny themselves 
                <br/>
                <small> (Like Taskmaster, Would I Lie To You...) 🤥</small>
              </li>

              <li>
                A familar pattern seems to be that I like American tv shows
                <br/>
                <small>(The Big Bang Theory, Young Sheldon, Futurama) 🧪</small>
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

export default TeleLike