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
            <Offcanvas.Body>
              Some helper text for the whole page
              {/* video of explaining how to do the page */}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
    )
}

export default FoodHelper