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

export default FilmHelper