import React, {useRef} from "react"
import "./form.css"

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/button"

function VisitForm({visit, handleChange, submitForm}){
    const myVisit = useRef(null)
    // console.log(myVisit.current?.value)

    return(
        <Container 
    fluid 
    className="bg-primary border border-primary border-3 rounded p-1">

      <Container 
      fluid 
        className="bg-primary p-2">
        <Card 
          className ="bg-primary-subtle border border-primary-subtle" >
          <Card.Body>

          <Form
          className = "bg-primary-subtle p-1" 
          autoComplete="off"
          onSubmit={(event) => {
            submitForm(event);
          }}
            style={{
              // fontSize:"1.6vw"
            }}
          >

            <Form.Group 
              className = ""  
              controlId="formWhat"
            >
              <FloatingLabel
              className="visitFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formWhat" 
              label= "What...">
                <Form.Control 
                className="visitFormInput text-break border border-dark
               border-3"
               style={{
                // fontSize:"2vw"
              }} 
              ref={myVisit}
                type="text"
                placeholder = "What" 
                name="formWhat"
                onChange={(event) => {
                  handleChange(event);
                }}
                >
                </Form.Control>
              </FloatingLabel>
            </Form.Group>

                
            <Form.Group 
              className = "pt-2"  
              controlId="formWhere"
            >
              <FloatingLabel
              className="visitFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formWhere" 
              label= "Where specific...">
                <Form.Control 
                className="visitFormInput text-break border border-dark
               border-3"
               style={{
                // fontSize:"2vw"
              }} 
              ref={myVisit}
                type="text"
                placeholder = "Where" 
                name="formWhere"
                onChange={(event) => {
                  handleChange(event);
                }}
                >
                </Form.Control>
              </FloatingLabel>
            </Form.Group>


            <Form.Group 
            className="pt-2">

              <FloatingLabel
              className="visitFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formVisitDescription" 
              label= "Why/Details...">
                <Form.Control 
                className="visitFormInput border border-dark border-3" 
                
                as = "textarea" 
                style = {{
                  height:"90px",
                  // fontSize:"1.4vw"
                }} 
                ref={myVisit}               
                placeholder = "Details"
                name="formVisitDescription"
                onChange={(event) => {
                  handleChange(event);
                }}
                >

                </Form.Control>
              </FloatingLabel>
            </Form.Group>

            <Form.Group 
            className="py-2" 
            controlId="formVisitRecommend">

              <FloatingLabel
              className="visitFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formVisitRecommend" 
              label="Recommended By..." >
                <Form.Control 
                className="visitFormInput border border-dark border-3"
                style={{
                  // fontSize:"1.4vw"
                }} 
                ref={myVisit}
                type="text" 
                placeholder="Recommended By..."
                name="formVisitRecommend"
                onChange={(event) => {
                  handleChange(event);
                }}
                >

                </Form.Control>
              </FloatingLabel>
            </Form.Group>

                {
                    myVisit.current?.value === "" ?
                    <Button 
            id="visitFormButton"
            variant = "info"
            className="border border-dark border-3 text-dark"  
            // type = "submit"
            style={{
              // fontSize:"1.6vw", 
              width:"auto"
            }}
            onClick={()=>{
                console.log("Put something in the inputs please")
            }}
            >
              😄 Enjoy 😄
              </Button>

            : 

            <Button 
            id="visitFormButton"
            variant = "info"
            className="border border-dark border-3 text-dark"  
            type = "submit"
            style={{
              // fontSize:"1.6vw", 
              width:"auto"
            }}
            >
              😄 Enjoy 😄
              </Button>
                }

            {/* <Button 
            id="filmFormButton"
            variant = "info"
            className="border border-dark border-3 text-dark"  
            type = "submit"
            style={{
              // fontSize:"1.6vw", 
              width:"auto"
            }}
            
            >
              😄 Enjoy 😄
              </Button> */}

          </Form>
          </Card.Body>
        </Card>
      </Container>
    </Container>
    )
}

export default VisitForm