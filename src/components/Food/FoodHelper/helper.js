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
            Food Helper ℹ️
             {/* ☝️  */}
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
              ℹ️ <u>Food Helper</u> ℹ️
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
                <strong>Food Page</strong> <small> (background food clipart)</small> is made of helper buttons (3), a Food Form and the Food Table.
              </h6>
              <p> 
                <strong>The 3 helper buttons</strong> each one opens a modal element <small>(that takes up 50% of the page depending on which one you open, you already found the main helper, that opens down the page 👍)</small> 
                <br/>
                The like button - opens on left 
                <br/>
                The dislike button -  opens on right
                <br/>
                These reveal lists, by seeing what I like and dislike may help with recommendations. 
                <br/>
                <br/>
                <strong><u>Food Form</u></strong> is in an accordion element, opening it reveals input fields (3).

                <li><strong>Food -</strong></li>
                In the Food input field, you can put the food (or drink) item that you recommend to me (Becky) to try.

                <li><strong>Recipe/Where -</strong></li> 
                In the Recipe/Where input field you can put the restaurant/place that you can get the recommended food from. Or you could put the recipe in, either in the ingredients and steps to make it or paste a url to site or video. 
                <small> (If the recipe is a family one and you don't want to publicly share it I understand 🤫 you could put an email address with 'Contact me, I'm not giving away my families secrets'🤐).</small>

                <li><strong>Recommended By -</strong></li>
                In the Recommended By input field you can put your name - who recommends it (maybe the food item was recommended to you and you're passing it on and spreading the word) 
                <br/>
                <small>(If you could please put in brackets where you are from just as a referrence to me but you don't have to it would be nice for me to know where you've come here from).</small>
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
                  <strong><u>Food Table</u></strong>
                  <br/>
                  <li>
                    the <strong>food/drink item and where</strong><small> (inside textareas so they are scrollable)</small>
                    </li> 
                  
                    <li>
                      <strong>
                    my opinion</strong>, a checkbox to show if I have tried it ✔️, an emoji of what I think if I have tried it - <small>(<strong>locked buttons for my use only</strong> to show the opinion of yes 😋, no 🤮 and alright 🤫)</small> and also what my opinion of it is <small>(if tried it yet 🤔)</small> 
                    </li>
                    
                    <li>
                    <strong>who recommends</strong> <small>(also in a textarea so is scrollable)</small> 
                    </li>
                    
                    <li>
                      <strong>
                    delete</strong> <small>(the delete button I have left open to all, so if you add something wrong you can delete it but <strong>please be careful</strong> when deleting so don't erase others 🙂)</small>
                    </li>
                </p>
                  {/* <br/>
                  There are two buttons to help you with what I like and dislike. The like opens an modal on the left side of the screen and the dislike opens on the right.  */}
                
                <p>???Todo - Video explaining the food page???</p>

            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default FoodHelper