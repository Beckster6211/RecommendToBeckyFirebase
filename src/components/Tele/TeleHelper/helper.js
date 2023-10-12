import React, {useState} from "react"

import "./teleHelperPages.css"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function TeleHelper(){

    const [TopShow, setTopShow] = useState(false);

    return(
        <div>
            <Button 
            id="teleHelperButton"
            className="border border-dark border-3 py-2 px-2 mx-1"
            style={{
              // fontSize:"1.5vw"
            }}
            variant="secondary" 
            onClick={()=>setTopShow(true)}
          >
            {/* Tele Helper ☝️  */}
            ℹ️  Tele Helper ℹ️ 
          </Button>

          <Offcanvas 
            id="teleHelperOffcanvas"
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
              ℹ️ <u>Tele Helper</u> ℹ️
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body
            className = "teleHelperText"
            >
              <h6
            className="teleHelperHeading"
            >
              This is to help you navigate the tele page, if you don't want to read the text there is a video at the bottom you can watch (enjoy me rambling 😀)
              <br/>
                <br/>
                <strong>Tele Page</strong> <small> (background is a lots of different televisions)</small> is made of helper buttons (3), a Tele Form and the Tele Table.
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
                <strong><u>Tele Form</u></strong> is in an accordion element, opening it reveals input fields (5).

                <li><strong>Tv Show -</strong></li>
                In the Tv Show input field, you can put the tv series that you recommend to me (Becky) to watch.

                <li><strong>Plot/Description -</strong></li> 
                In the Plot/Description input field you can put the description/plot of the Tv series. <small>(You could write that yourself or take from the web)</small> You could put the url to a trailer if you like.

              <li>
                <strong>Number Of Series</strong>
                In the Number Of Series put the number of series that the show is made up of.
              </li>

                <li>
                  <strong>Connected With -</strong>
                  In the connected with put if the tv show is connected with anything - such as films, other tv shows or books <small>(I am a little OCD and like to watch things in order)</small>
                </li>

                <li><strong>Recommended By -</strong></li>
                In the Recommended By input field you can put your name - who recommends it (maybe the tv show was recommended to you and you're passing it on and spreading the word) 
                <br/>
                <small>(If you could please put in brackets where you are from just as a referrence to me but you don't have to, it would be nice for me to know where you've come here from).</small>
            </p>

            <h6 className="teleHelperHeading">
                  You could always have a look through the table to get an idea of how to fill out the tele form 👀
                </h6>

            <p>
            <strong><u>Tele Table</u></strong>
                  <br/>
                  <li>
                    the <strong>tv show, how many series, its plot and connected with</strong><small> (inside textareas so they are scrollable)</small>
                    </li> 

                    <li>
                      <strong>
                    Becky opinion</strong>, shows my opinion as, a checkbox to show if I have binged it ✔️, an emoji of what I think if I have binged it 🤷‍♀️ and a textarea of what my thoughts are - <small>(<strong>emoji buttons locked for my use only</strong> to show the opinion of yes 🤩, no 😩 and alright 🤔)</small>
                    </li>

                    <li>
                    <strong>who recommends</strong> <small>(also in a textarea so is scrollable)</small> 
                    </li>

                    <li>the<strong> delete</strong> <small>(the trash button I have left open to all, so if you add something wrong you can easily delete it  <strong>but please be careful</strong> when deleting so don't erase others 🙂)</small>
                    </li>
            </p>

            <p>???Todo - Video explaining the binge page???</p>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default TeleHelper