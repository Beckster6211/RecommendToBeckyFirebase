import React, {useState} from "react"

import "./filmHelperPages.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function FilmHelper(){

    const [TopShow, setTopShow] = useState(false);

    return(
        <div>
            <Button 
            id="filmHelperButton"
            className=""
            style={{
              // fontSize:"1.5vw"
            }}
            variant="secondary" 
            onClick={()=>setTopShow(true)}
          >
            Film Helper ☝️ 
          </Button>

          <Offcanvas 
            id="filmHelperOffcanvas"
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
              ℹ️ <u>Film Helper</u> ℹ️
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body
            className="filmHelperText"
            >
            <h6
            className="filmHelperHeading"
            >
              This is to help you navigate the film page, if you don't want to read the text there is a video at the bottom you can watch (enjoy me rambling 😀)
              <br/>
                <br/>
                <strong>Film Page</strong> <small> (background is still from Disney films 😁)</small> is made of helper buttons (3), a Film Form and the Film Table.
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
                <strong><u>Film Form</u></strong> is in an accordion element, opening it reveals input fields (4).

                <li><strong>Film -</strong></li>
                In the Film input field, you can put the film that you recommend to me (Becky) to watch.

                <li><strong>Plot/Description -</strong></li> 
                In the Plot/Description input field you can put the description/plot of the film. <small>(You could write that yourself or take from the web)</small> You could put the url to a trailer if you like.

                <li>
                  <strong>Connected With -</strong>
                  In the connected with put if the film is connected with anything - such as other films, maybe tv series or books <small>(I am a little OCD and like to watch things in order)</small>
                </li>

                <li><strong>Recommended By -</strong></li>
                In the Recommended By input field you can put your name - who recommends it (maybe the food item was recommended to you and you're passing it on and spreading the word) 
                <br/>
                <small>(If you could please put in brackets where you are from just as a referrence to me but you don't have to it would be nice for me to know where you've come here from).</small>
            </p>
            
            <h6 className="filmHelperHeading">
                  You could always have a look through the table to get an idea of how to fill out the film form 👀
                </h6>

              <p>
              <strong><u>Film Table</u></strong>
                  <br/>
                  <li>
                    the <strong>film, plot and connected with</strong><small> (inside textareas so they are scrollable)</small>
                    </li> 

                    <li>
                      <strong>
                    my opinion</strong>, a checkbox to show if I have watched it ✔️, an emoji of what I think if I have watched it - <small>(<strong>locked buttons for my use only</strong> to show the opinion of yes 😍, no 🥱 and alright 😕)</small> and also what my opinion of it is <small>(if watched it yet 🤔)</small> 
                    </li>

                    <li>
                    <strong>who recommends</strong> <small>(also in a textarea so is scrollable)</small> 
                    </li>

                    <li>
                      <strong>
                    delete</strong> <small>(the delete button I have left open to all, so if you add something wrong you can delete it but <strong>please be careful</strong> when deleting so don't erase others 🙂)</small>
                    </li>
              </p>
            
            
              <p>???Todo - Video explaining the food page???</p>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default FilmHelper