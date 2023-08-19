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
              ℹ️ Helper ℹ️
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            ToDo.....
              <br/>
              Some helper text for the whole page. Maybe video(s)???
              {/* video of explaining how to do the page */}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default ReadHelper