import React, {useRef} from "react"

//
import "./form.css"

// bootstrap
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
    className="bg-secondary border border-secondary border-3 rounded p-1">

      <Container 
      fluid 
        className="bg-secondary p-2">
        <Card 
          className ="bg-secondary-subtle border border-secondary-subtle" >
          <Card.Body>

          <Form
          className = "bg-secondary-subtle p-1" 
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
              className="tryFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTryWhat" 
              label= "Try this...">
                <Form.Control 
                className="tryFormInput text-break border border-dark
               border-3"
               style={{
                // fontSize:"2vw"
              }} 
              ref={myTry}
                type="text"
                placeholder = "Try this..." 
                name="formTryWhat"
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
              className="tryFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTryWhere" 
              label= "Where specific...">
                <Form.Control 
                className="tryFormInput text-break border border-dark
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
              className="tryFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTryDescription" 
              label= "Why...">
                <Form.Control 
                className="tryFormInput border border-dark border-3" 
                
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
              className="tryFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTryRecommend" 
              label="Recommended By..." >
                <Form.Control 
                className="tryFormInput border border-dark border-3"
                style={{
                  // fontSize:"1.4vw"
                }} 
                ref={myTry}
                type="text" 
                placeholder="Recommended By..."
                name="formTryRecommend"
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
            id="tryFormButton"
            // variant = "info"
            className="border border-dark border-3 text-white"  
            // type = "submit"
            style={{
              // fontSize:"1.6vw", 
              width:"auto"
            }}
            onClick={()=>{
                console.log("Put something in the inputs please")
            }}
            >
              😄 Cheers 😄
              </Button>

            : 

            <Button 
            id="tryFormButton"
            // variant = "info"
            className="border border-dark border-3 text-white"  
            type = "submit"
            style={{
              // fontSize:"1.6vw", 
              width:"auto"
            }}
            >
              😄 Cheers 😄
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