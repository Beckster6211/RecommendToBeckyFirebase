import React, {useRef} from "react"

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/button"

function FilmForm({film, handleChange, submitForm}){
    const myFilm = useRef(null)
    // console.log(myFilm.current?.value)

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
              controlId="formFilm"
            >
              <FloatingLabel 
              // id="foodFloatingLabel1"
              className="filmFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formFilm" 
              label= "Film...">
                <Form.Control 
                className="filmFormInput text-break border border-dark
               border-3"
               style={{
                // fontSize:"2vw"
              }} 
              ref={myFilm}
                type="text"
                placeholder = "Film..." 
                name="formFilm"
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
              className="filmFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formFilmDescription" 
              label= "Plot/Description...">
                <Form.Control 
                className="filmFormInput border border-dark border-3" 
                
                as = "textarea" 
                style = {{
                  height:"90px",
                  // fontSize:"1.4vw"
                }} 
                ref={myFilm}
                placeholder = "Plot/Description"
                name="formFilmDescription"
                // id="formFoodRecipe"
                // type="text"
                // placeholder="Where/Recipe..."
                onChange={(event) => {
                  handleChange(event);
                }}
                >

                </Form.Control>
              </FloatingLabel>
            </Form.Group>

            {/* <Form.Group 
            className="py-2" 
            controlId="formFilmProvider">

              <FloatingLabel 
              // id="foodFloatingLabel3"
              className="filmFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formFilmProvider" 
              label="Provider..." >
                <Form.Control 
                className="filmFormInput border border-dark border-3"
                style={{
                  // fontSize:"1.4vw"
                }} 
                ref={myFilm}
                type="text" 
                placeholder="Provider..."
                name="formFilmProvider"
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
              className="filmFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formFilmConnected" 
              label= "Connected With...">
                <Form.Control 
                className="filmFormInput border border-dark border-3" 
                
                as = "textarea" 
                style = {{
                  height:"90px",
                  // fontSize:"1.4vw"
                }} 
                ref={myFilm}
                placeholder = "Connected With..."
                name="formFilmConnected"
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
            controlId="formFilmGenre">

              <FloatingLabel 
              // id="foodFloatingLabel3"
              className="filmFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formFilmGenre" 
              label="Genre..." >
                <Form.Control 
                className="filmFormInput border border-dark border-3"
                style={{
                  // fontSize:"1.4vw"
                }} 
                ref={myFilm}
                type="text" 
                placeholder="Genre..."
                name="formFilmGenre"
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
            controlId="formFilmRecommend">

              <FloatingLabel 
              // id="foodFloatingLabel3"
              className="filmFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formFilmRecommend" 
              label="Recommended By..." >
                <Form.Control 
                className="filmFormInput border border-dark border-3"
                style={{
                  // fontSize:"1.4vw"
                }} 
                ref={myFilm}
                type="text" 
                placeholder="Recommended By..."
                name="formFilmRecommend"
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
                    myFilm.current?.value === "" ?
                    <Button 
            id="filmFormButton"
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

export default FilmForm