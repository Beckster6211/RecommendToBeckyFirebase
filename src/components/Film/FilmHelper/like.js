import React, {useState} from "react"

import "./filmHelperPages.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FilmLike(){

    const [leftShow, setLeftShow] = useState(false);

    return(
        <div>
          <Button
            id="filmLikeButton" 
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
            id="filmLikeOffcanvas"
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
              id="filmLikeTitle"
              className=""
              >
              😍 I like to watch...😍
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <h6
            className="filmHeading"
            >Here some help on the kinds of films I like to watch
              <br/>
              <small> (If it helps you 😊)</small>
            </h6>
            <ul className="filmList">
            <li>
                I LOVE ❤️ LOVE ❤️ LOVE ❤️ animation ✏️
                <br/>
                <small>(All different kinds, hand drawn like Tom and Jerry, modern computer/digital like Pixar and stop motion like Aardman)</small>
              </li>

              <li>
                Anything and everything Disney 🏰
                <br/>
                <small>(doesn't need explaining 😛)</small>
              </li>

              <li>
                I have brothers so not against a superhero 🦸 I have joined in the conversations 
                <br/>
                <small> (best Black Widow #1 not Iron Man or Thor, despite what my brothers say)</small>
              </li>

              <li>
                I like sci-fi/fantasy/magic (Star Wars, Star Trek, Harry Potter...) 🛸🧛🧙
                <br/>
                <small> I enjoy dystopian films, Its Earth but not Earth</small>
              </li>

              <li>
                I'm okay with learning something 🧠 if based/inspired by true events.  
                <br/>
                <small>
                  Sometimes I suprise myself (I really liked - Hidden Figures and Hackshaw Ridge)🚀🎖️
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

export default FilmLike