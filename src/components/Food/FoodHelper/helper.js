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
              <Offcanvas.Title
              id="foodHelperTitle"
              >
              ℹ️ Food Helper ℹ️
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body
            className="foodHelperText"
            >  
              <h6
              className="foodHelperHeading"
              > 
                This is to help you navigate the food page, if you don't want to read the text there is a video at the bottom you can watch (enjoy me rambling 😀)
                <br/>
                <br/>
                <strong>Food Page</strong> is made of helper buttons, a Food Form and the Food Table.
              </h6>
              <p> 
                <strong>The 3 helper buttons</strong> each one opens a modal element <small>(that takes up 50% of the page depending on which one you open, you already found the main helper one, that opens down the page 👍)</small> 
                <br/>
                The like button - opens on the left, the dislike button -  opens on the right. These open to reveal lists, by seeing what I like and dislike may help with recommendations. 
                <br/>
                <br/>
                <strong>Food Form</strong> is in an accordion element, opening it reveals 3 input fields.

                <li>Food -</li>
                In the Food input field, you can put the food (or drink) item that you recommend to me (Becky) to try.

                <li>Recipe/Where -</li> 
                In the Recipe/Where input field you can put the restaurant/place that you can get the recommended food from. Or you could put the recipe in, either in the ingredients and steps to make it or paste a url to site or video. 
                <small> (If the recipe is a family one and you don't want to publicly share it I understand 🤫 you could put an email address with 'Contact me, I'm not giving away my families secrets'🤐).</small>

                <li>Recommended By -</li>
                In the Recommended By input field you can put your name - who recommends it (maybe the food item was recommended to you and you're passing it on and spreading the word) 
                <br/>
                <small>(If you could please put in brackets where you are from just as a referrence to me but you don't have to).</small>
                  {/* </p>
                <p> */}
                {/* <br/> */}
                  {/* In the Recipe/Where input field you can put the restaurant/place that you can get the recommended food from. Or you could put the recipe in, either in the ingredients and steps to make it or paste a url to site or video. 
                  <br/> */}
                  {/* <small> (If the recipe is a family one and you don't want to publicly share it I understand 🤫 you could put an email address with 'Contact me, I'm not giving away my families secrets'🤐).</small> */}
                {/* </p>
                <p> */}
                {/* <br/> */}
                  {/* In the Recommended By input field you can put your name - who recommends it (maybe the food item was recommended to you and you're passing it on and spreading the word) 
                  <br/>
                  <small>(If you could please put in brackets where you are from just as a referrence to me but you don't have to).</small> */}
                {/* </p>
                <p> */}
                {/* <br/> */}
                </p>

                <h6 className="foodHelperHeading">
                  You could always have a look through the table to get an idea of how to fill out the food form 👀
                </h6>

                <p>
                  <strong>Food Table</strong> shows displays the food item and where (inside textareas so they are scrollable), my opinion (a checkbox to show if I have tried it ✔️ and an emoji of what I think if I have tried it - emojis to show the opinion of yes 😋 no 🤮 and alright 🤫), who recommends (also in a textarea so is scrollable) and delete (which has a delete button which unlike the opinion buttons are locked for my use only, the delete button is open, so if you add something wrong you can delete 🙂).
                </p>
                  {/* <br/>
                  There are two buttons to help you with what I like and dislike. The like opens an modal on the left side of the screen and the dislike opens on the right.  */}
                
                <p>???Video explaining the food page???</p>

            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default FoodHelper