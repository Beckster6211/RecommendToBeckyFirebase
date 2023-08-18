import React, {useRef} from "react"

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/button"

function TeleForm({tele, handleChange, submitForm}){
    const myTele = useRef(null)
    // console.log(myTele.current?.value)

    return(
        <Container 
    fluid 
    className="bg-info border border-info border-3 rounded p-1">

      <Container 
      fluid 
        className="bg-info p-2">
        <Card 
          className ="bg-info-subtle border border-info-subtle" >
          <Card.Body>

          <Form 
        //   id="foodForm"
          className = "bg-info-subtle p-1" 
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
              controlId="formTele"
            >
              <FloatingLabel 
              // id="foodFloatingLabel1"
              className="teleFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTele" 
              label= "Tv Show...">
                <Form.Control 
                className="teleFormInput text-break border border-dark
               border-3"
               style={{
                // fontSize:"2vw"
              }} 
              ref={myTele}
                type="text"
                placeholder = "Tv Show..." 
                name="formTele"
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
              className="teleFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTeleDescription" 
              label= "Plot/Description...">
                <Form.Control 
                className="teleFormInput border border-dark border-3" 
                
                as = "textarea" 
                style = {{
                  height:"90px",
                  // fontSize:"1.4vw"
                }} 
                ref={myTele}               placeholder = "Plot/Description"
                name="formTeleDescription"
                onChange={(event) => {
                  handleChange(event);
                }}
                >

                </Form.Control>
              </FloatingLabel>
            </Form.Group>

                <Form.Group 
                className="pt-2"
                >
                    <FloatingLabel
                    // id="foodFloatingLabel2"
              className="teleFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTeleSeries" 
              label= "Number Of Series..."
                    >
                        <Form.Control
                         className="teleFormInput border border-dark border-3" 
                
                         as = "input" 
                         type="number"
                         style = {{
                        //    height:"90px",
                           // fontSize:"1.4vw"
                         }} 
                         ref={myTele}               placeholder = "Number of Series..."
                         name="formTeleSeries"
                        //  defaultValue="1"
                        
                         onChange={(event) => {
                           handleChange(event);
                         }}
                        >
                        </Form.Control>
                       
                    </FloatingLabel>
                    
                </Form.Group>
                
               

            {/* <Form.Group 
            className="py-2" 
            controlId="formTeleProvider">

              <FloatingLabel 
              // id="foodFloatingLabel3"
              className="teleFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTeleProvider" 
              label="Provider..." >
                <Form.Control 
                className="teleFormInput border border-dark border-3"
                style={{
                  // fontSize:"1.4vw"
                }} 
                ref={myTele}
                type="text" 
                placeholder="Provider..."
                name="formTeleProvider"
                // id="formFoodRecommend"
                // type="text"
                onChange={(event) => {
                  handleChange(event);
                }}
                >

                </Form.Control>
              </FloatingLabel>
            </Form.Group> */}

            <Form.Group 
            className="pt-2">

              <FloatingLabel 
              // id="foodFloatingLabel2"
              className="teleFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTeleConnected" 
              label= "Connected With...">
                <Form.Control 
                className="teleFormInput border border-dark border-3" 
                
                as = "textarea" 
                style = {{
                  height:"90px",
                  // fontSize:"1.4vw"
                }} 
                ref={myTele}
                placeholder = "Connected With..."
                name="formTeleConnected"
                // id="formFoodRecipe"
                // type="text"
                onChange={(event) => {
                  handleChange(event);
                }}
                >

                </Form.Control>
              </FloatingLabel>
            </Form.Group>

            {/* <Form.Group 
            className="py-2" 
            controlId="formTeleGenre">

              <FloatingLabel 
              // id="foodFloatingLabel3"
              className="teleFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTeleGenre" 
              label="Genre..." >
                <Form.Control 
                className="teleFormInput border border-dark border-3"
                style={{
                  // fontSize:"1.4vw"
                }} 
                ref={myTele}
                type="text" 
                placeholder="Genre..."
                name="formTeleGenre"
                // id="formFoodRecommend"
                // type="text"
                onChange={(event) => {
                  handleChange(event);
                }}
                >

                </Form.Control>
              </FloatingLabel>
            </Form.Group> */}

            <Form.Group 
            className="py-2" 
            controlId="formTeleRecommend">

              <FloatingLabel 
              // id="foodFloatingLabel3"
              className="teleFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formTeleRecommend" 
              label="Recommended By..." >
                <Form.Control 
                className="teleFormInput border border-dark border-3"
                style={{
                  // fontSize:"1.4vw"
                }} 
                ref={myTele}
                type="text" 
                placeholder="Recommended By..."
                name="formTeleRecommend"
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
                    myTele.current?.value === "" ?
                    <Button 
            id="teleFormButton"
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
            id="teleFormButton"
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

export default TeleForm