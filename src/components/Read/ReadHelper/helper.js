import React, {useState} from "react"

import "./readHelper.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ReadHelper(){

    const [TopShow, setTopShow] = useState(false);

    return(
        <div>
            <Button 
            id="readHelperButton"
            className=""
            style={{
              // fontSize:"1.5vw"
            }}
            variant="secondary" 
            onClick={()=>setTopShow(true)}
          >
            Read Helper ☝️ 
          </Button>

          <Offcanvas 
            id="readHelperOffcanvas"
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
              ℹ️ <u>Read Helper</u> ℹ️
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body
            className="readHelperText"
            >
               <h6
            className="readHelperHeading"
            >
              This is to help you navigate the read page, if you don't want to read the text there is a video at the bottom you can watch (enjoy me rambling 😀)
              <br/>
                <br/>
                <strong>Read Page</strong> <small> (background is a lots of books)</small> is made of helper buttons (3), a Read Form and the Read Table.
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
                <strong><u>Read Form</u></strong> is in an accordion element, opening it reveals input fields (6).

                <li><strong>Book -</strong></li>
                In the Book input field, you can put the book that you recommend to me (Becky) to read.

                <li><strong>Author -</strong></li>
                In the Author input field, you can put the author of the book <small>(The author of the book may intrigue me)</small>

                <li><strong>Plot/Description -</strong></li> 
                In the Plot/Description input field you can put the description/plot of the book. <small>(You could write that yourself or take from the web)</small>


                <li>
                <strong>Number Of Books</strong>
                </li>
                In the Number Of Books,if there are multiple in the collection then input how many are included.
                <small>(if only single then just put 1)</small>
              

              <li>
                  <strong>Connected With -</strong> 
              </li>
                  In the connected with put if the book is connected with anything - such as films, tv shows or books <small>(I am a little OCD and like to do things in order)</small>
               

                <li>
                  <strong>Recommended By -</strong> 
                </li>
                In the Recommended By input field you can put your name - who recommends it (maybe the book was recommended to you and you're passing it on and spreading the word) 
                <br/>
                <small>(If you could please put in brackets where you are from just as a referrence to me but you don't have to it would be nice for me to know where you've come here from).</small>
              </p>

              <h6 className="readHelperHeading">
                  You could always have a look through the table to get an idea of how to fill out the read form 👀
              </h6>

              <p>
              <strong><u>Read Table</u></strong>
                  <br/>

                  <li>
                    the <strong>book, author, how many books, its plot and connected with</strong><small> (inside textareas so they are scrollable)</small>
                    </li> 

                    <li>
                      <strong>
                    my opinion</strong>, a checkbox to show if I have read it ✔️, an emoji of what I think if I have read it - <small>(<strong>locked buttons for my use only</strong> to show the opinion of yes 🤓, no 😴 and alright 😶)</small> and also what my opinion of it is <small>(if read it yet 🤔)</small> 
                    </li>

                    <li>
                    <strong>who recommends</strong> <small>(also in a textarea so is scrollable)</small> 
                    </li>

                    <li>
                      <strong>
                    delete</strong> <small>(the delete button I have left open to all, so if you add something wrong you can delete it but <strong>please be careful</strong> when deleting so don't erase others 🙂)</small>
                    </li>
              </p>

              <p>???Todo - Video explaining the binge page???</p>

            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default ReadHelper