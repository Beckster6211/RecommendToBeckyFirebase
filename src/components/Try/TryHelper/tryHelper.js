import React, {useState} from "react"

//
import "./tryHelper.css"

// bootstrap
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function TryHelper(){

    const [TopShow, setTopShow] = useState(false);

    return(
        <div>
            <Button 
            id="tryHelperButton"
            className="border border-dark border-3 py-2 px-2 mx-1"
            style={{
              // fontSize:"1.5vw"
            }}
            variant="secondary" 
            onClick={()=>setTopShow(true)}
          >
            {/* Try Helper ☝️  */}
            ℹ️  Try Helper ℹ️ 
          </Button>

          <Offcanvas 
            id="tryHelperOffcanvas"
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
              ℹ️ <u>Try Helper</u> ℹ️
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body
            className="tryHelperText"
            >

            <h6 
            className="tryHelperHeading"
            >
              This is to help you navigate the try page, if you don't want to read the text there is a video at the bottom you can watch (enjoy me rambling 😀)
              <br/>
              <br/>
                <strong>Try Page</strong> <small> (background try collage)</small> is made of helper buttons (3), a Try Form and the Try Table.
            </h6>

            <p>
            <strong>The 3 helper buttons</strong> each one opens a modal element <small>(that takes up 50% of the page depending on which one you open, you already found the main helper, that opens down the page 🔽)</small>
            <br/>
            The like button - opens on left ◀️
                <br/>
                The dislike button -  opens on right ▶️
                <br/>
                These reveal lists, by seeing what I like and dislike may help with recommendations. 
                <br/>
                <br/>
                <strong><u>Try Form</u></strong> is in an accordion element, opening it reveals input fields (4).

                <li><strong>Try this -</strong></li>
                In the Try this input field, you can put what you recommend to me (Becky) to try. 

                <li><strong>Where Specific -</strong></li>
                In the Where Specific input field, you can put where the place that you recommend that I try this.  <small>(Geographically where)</small>

                <li><strong>Why -</strong></li> 
                In the Why input field you can put the details or why should try this. <small>(You could write that yourself or take from the web)</small>

                <li>
                  <strong>Recommended By -</strong> 
                </li>
                In the Recommended By input field you can put your name - who recommends it (maybe the activity was recommended to you and you're passing it on and spreading the word) 
                <br/>
                <small>(If you could please put in brackets where you are from just as a referrence to me but you don't have to it would be nice for me to know where you've come here from).</small>
            </p>

            <h6 className="tryHelperHeading">
                  You could always have a look through the table to get an idea of how to fill out the try form 👀
              </h6>

              <p>
              <strong><u>Try Table</u></strong>
                  <br/>

                  <li>
                    the <strong>try this, where specific and why</strong><small> (inside textareas so they are scrollable)</small>
                    </li>

                    <li>
                      <strong>
                    Becky opinion</strong>, a checkbox to show if I have tried it ✔️, an emoji of what I think if I have tried it 🤷‍♀️ and a textarea of what my thoughts are - <small>(<strong>emoji buttons locked for my use only</strong> to show the opinion of yes 👍, no 👎 and alright 🤙)</small> 
                    </li>

                    <li>
                    <strong>who recommends</strong> <small>(also in a textarea so is scrollable)</small> 
                    </li>

                    <li>
                      the<strong>the delete</strong> <small>(the delete button I have left open to all, so if you add something wrong you can easily delete it <strong> but please be careful</strong> when deleting so don't erase others 🙂)</small>
                    </li>
              </p>

              <p>???Todo - Video explaining the binge page???</p> 

            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default TryHelper