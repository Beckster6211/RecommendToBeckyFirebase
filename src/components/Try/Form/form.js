import React, {useRef} from "react"
import "./form.css"

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/button"

function TryForm({tryIt, handleChange, submitForm}){
    const myTry = useRef(null)
    // console.log(myTry.current?.value)

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
        //   id="foodForm"
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
              controlId="formTryWhat"
            >
              <FloatingLabel 
              // id="foodFloatingLabel1"
              className="visitFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTryWhat" 
              label= "Try this...">
                <Form.Control 
                className="visitFormInput text-break border border-dark
               border-3"
               style={{
                // fontSize:"2vw"
              }} 
              ref={myTry}
                type="text"
                placeholder = "Try this..." 
                name="formTryWhat"
                // id="formFoodItem"
                // type="text"
                // placeholder="Food..."
                onChange={(event) => {
                  handleChange(event);
                }}
                >
                </Form.Control>
              </FloatingLabel>
            </Form.Group>

                
            <Form.Group 
              className = "pt-2"  
              controlId="formTryWhere"
            >
              <FloatingLabel 
              // id="foodFloatingLabel1"
              className="visitFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTryWhere" 
              label= "Where specific...">
                <Form.Control 
                className="visitFormInput text-break border border-dark
               border-3"
              ref={myTry}
                type="text"
                placeholder = "Where" 
                name="formTryWhere"
                as = "textarea" 
                style = {{
                  height:"90px",
                  // fontSize:"1.4vw"
                }} 
                // id="formFoodItem"
                // type="text"
                // placeholder="Food..."
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
              // id="foodFloatingLabel2"
              className="visitFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTryDescription" 
              label= "Why...">
                <Form.Control 
                className="visitFormInput border border-dark border-3" 
                
                as = "textarea" 
                style = {{
                  height:"90px",
                  // fontSize:"1.4vw"
                }} 
                ref={myTry}               
                placeholder = "Details"
                name="formTryDescription"
                onChange={(event) => {
                  handleChange(event);
                }}
                >

                </Form.Control>
              </FloatingLabel>
            </Form.Group>

            <Form.Group 
            className="py-2" 
            controlId="formTryRecommend">

              <FloatingLabel 
              // id="foodFloatingLabel3"
              className="visitFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTryRecommend" 
              label="Recommended By..." >
                <Form.Control 
                className="visitFormInput border border-dark border-3"
                style={{
                  // fontSize:"1.4vw"
                }} 
                ref={myTry}
                type="text" 
                placeholder="Recommended By..."
                name="formTryRecommend"
                // id="formFoodRecommend"
                // type="text"
                // placeholder="Recommmended By..."
                onChange={(event) => {
                  handleChange(event);
                }}
                >

                </Form.Control>
              </FloatingLabel>
            </Form.Group>

                {
                    myTry.current?.value === "" ?
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

export default TryForm