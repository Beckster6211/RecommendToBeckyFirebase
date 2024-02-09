import React, {useRef} from "react"
import "./form.css"

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/button"

function ReadForm({read, handleChange, submitForm}){
    const myRead = useRef(null)
    // console.log(myRead.current?.value)

    return(
        <Container 
    fluid 
    className="bg-success border border-success border-3 rounded p-1">

      <Container 
      fluid 
        className="bg-success p-2">
        <Card 
          className ="bg-success-subtle border border-success-subtle" >
          <Card.Body>

          <Form 
        //   id="foodForm"
          className = "bg-success-subtle p-1" 
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
              controlId="formBook"
            >
              <FloatingLabel 
              // id="foodFloatingLabel1"
              className="readFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formBook" 
              label= "Book">
                <Form.Control 
                className="readFormInput text-break border border-dark
               border-3"
               style={{
                // fontSize:"2vw"
              }} 
              ref={myRead}
                type="text"
                placeholder = "Book" 
                name="formBook"
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
              controlId="formAuthor"
            >
              <FloatingLabel 
              // id="foodFloatingLabel1"
              className="readFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formAuthor" 
              label= "Author">
                <Form.Control 
                className="readFormInput text-break border border-dark
               border-3"
               style={{
                // fontSize:"2vw"
              }} 
              ref={myRead}
                type="text"
                placeholder = "Author" 
                name="formAuthor"
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
              className="readFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formReadDescription" 
              label= "Plot/Description...">
                <Form.Control 
                className="readFormInput border border-dark border-3" 
                
                as = "textarea" 
                style = {{
                  height:"90px",
                  // fontSize:"1.4vw"
                }} 
                ref={myRead}               
                placeholder = "Plot/Description"
                name="formReadDescription"
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
              className="readFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formReadSeries" 
              label= "Number Of Books..."
                    >
                        <Form.Control
                         className="readFormInput border border-dark border-3" 
                
                         as = "input" 
                         type="number"
                         style = {{
                        //    height:"90px",
                           // fontSize:"1.4vw"
                         }} 
                         ref={myRead}               placeholder = "Number of Books..."
                         name="formReadSeries"
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
              className="readFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formReadConnected" 
              label= "Connected With...">
                <Form.Control 
                className="readFormInput border border-dark border-3" 
                
                as = "textarea" 
                style = {{
                  height:"90px",
                  // fontSize:"1.4vw"
                }} 
                ref={myRead}
                placeholder = "Connected With..."
                name="formReadConnected"
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
            controlId="formReadRecommend">

              <FloatingLabel 
              // id="foodFloatingLabel3"
              className="readFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formReadRecommend" 
              label="Recommended By..." >
                <Form.Control 
                className="readFormInput border border-dark border-3"
                style={{
                  // fontSize:"1.4vw"
                }} 
                ref={myRead}
                type="text" 
                placeholder="Recommended By..."
                name="formReadRecommend"
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
                    myRead.current?.value === "" ?
                    <Button 
            id="readFormButton"
            // variant = "info"
            className="border border-dark border-3 text-white"  
            // type = "submit"
            style={{
              // fontSize:"1.6vw", 
              width:"auto"
            }}
            onClick={()=>{
              alert("All sections need to be filled")
            }}
            >
              😄 Cheers 😄
              </Button>

            : 

            <Button 
            id="readFormButton"
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

export default ReadForm