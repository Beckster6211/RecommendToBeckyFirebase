import React, {useState} from "react"

import "./foodHelperPages.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FoodHelper(){

    const [TopShow, setTopShow] = useState(false);

    return(
        <div>
            <Button 
            id="foodHelperButton"
            className=""
            style={{
              // fontSize:"1.5vw"
            }}
            variant="secondary" 
            onClick={()=>setTopShow(true)}
          >
            Food Helper ☝️ 
          </Button>

          <Offcanvas 
            id="foodHelperOffcanvas"
            className="bg-secondary-subtle h-50"
            style={{
              
            }}
            show={TopShow} 
            onHide={()=>setTopShow(false)} 
            placement="top"
          >
            <Offcanvas.Header 
                className="bg-secondary"
              closeButton
            >
              <Offcanvas.Title>
              ℹ️ Helper ℹ️
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body
            className="foodHelperText"
            >  
              <p> 
                This is to help you navigate the food page, if you don't want to read the text there is a video at the bottom and you can watch me and enjoy me rambling 😀
                <br/>         
                Food Form is in an accordion element, opening it reveals 3 input fields.
                {/* <ul> */}
                  <li>Food
                  </li>
                  <li>
                    Recipe/Where
                  </li>
                  <li>
                    Recommended By
                  </li>
                {/* </ul> */}
                  In the Food input field, you can put the food (or drink) item that you recommend to me (Becky) to try.
                  {/* </p>
                <p> */}
                <br/>
                  In the Recipe/Where input field you can put the restaurant/place that you can get the recommended food from. Or you could put the recipe in, either in the ingredients and steps to make it or paste a url to site or video. 
                  <br/>
                  <small> (If the recipe is a family one and you don't want to publicly share it I understand 🤫 you could put an email address with 'Contact me, I'm not giving away my families secrets'🤐).</small>
                {/* </p>
                <p> */}
                <br/>
                  In the Recommended By input field you can put your name - who recommends it (maybe the food item was recommended to you and you're passing it on and spreading the word) 
                  <br/>
                  <small>(If you could please put in brackets where you are from just as a referrence to me but you don't have to).</small>
                {/* </p>
                <p> */}
                <br/>
                  You can have a look through the table to get an idea of how to fill out the food form.
                  <br/>
                  There are two buttons to help you with what I like and dislike. The like opens an modal on the left side of the screen and the dislike opens on the right. 
                </p>
                <p>Video explaining the food page???</p>

            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default FoodHelper