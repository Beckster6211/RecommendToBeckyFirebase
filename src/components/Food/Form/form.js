import React, {useRef} from "react";

import "./form.css";

/*
css like the guy in video does about firebase todo list
const style = {
  bg: `a color`,
  container: `bg-slate-100 max-w-[500px] w-full,
  heading: `text-3xl font-bold text-center text-grey-800`
}

<div className = {style.bg}>
{style.container}
</div>
*/

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/button"

function FoodForm({ food, handleChange, submitForm }) {

  const myFood = useRef(null)

  return (
    <Container 
    fluid 
    className="bg-warning border border-warning border-3 rounded p-1">

      <Container 
      fluid 
        className="bg-warning p-2">
        <Card 
          className ="bg-warning-subtle border border-warning-subtle" >
          <Card.Body>

          <Form 
          id="foodForm"
          className = "bg-warning-subtle p-1" 
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
              controlId="formFood"
              // style={{
              //   fontSize:"1vw"
              // }} 
            >
              <FloatingLabel 
              // id="foodFloatingLabel1"
              className="foodFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formFoodItem" 
              label= "Food/Drink...">
                <Form.Control 
                className="foodFormInput text-break border border-dark
               border-3"
               style={{
                // fontSize:"2.5vw"
              }} 
              ref={myFood}
                type="text"
                placeholder = "Food/Drink..." 
                name="formFoodItem"
                // id="formFoodItem"
                // type="text"
                // placeholder="Food..."
                onChange={(event) => {
                  handleChange(event);
                }}></Form.Control>
              </FloatingLabel>
            </Form.Group>

            <Form.Group 
            className="pt-2">

              <FloatingLabel 
              // id="foodFloatingLabel2"
              className="foodFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formFoodRecipe" 
              label= "Recipe/Where...">
                <Form.Control 
                className="foodFormInput border border-dark border-3" 
                
                as = "textarea" 
                style = {{
                  height:"110px",
                  // fontSize:"1.4vw"
                }} 
                ref={myFood}
                placeholder = "Recipe/Where..."
                name="formFoodRecipe"
                // id="formFoodRecipe"
                // type="text"
                // placeholder="Where/Recipe..."
                onChange={(event) => {
                  handleChange(event);
                }}></Form.Control>
              </FloatingLabel>
            </Form.Group>

            <Form.Group 
            className="py-2" 
            controlId="formFoodRecommend">

              <FloatingLabel 
              // id="foodFloatingLabel3"
              className="foodFloatingLabel"
              style={{
                // fontSize:"1.2vw"
              }}
              controlId = "formFoodRecommend" label="Recommended By..." >
                <Form.Control 
                className="foodFormInput border border-dark border-3"
                style={{
                  // fontSize:"1.4vw"
                }} 
                ref={myFood}
                type="text" 
                placeholder="Recommended By..."
                name="formFoodRecommend"
                // id="formFoodRecommend"
                // type="text"
                // placeholder="Recommmended By..."
                onChange={(event) => {
                  handleChange(event);
                }}></Form.Control>
              </FloatingLabel>
            </Form.Group>

                {
                  myFood.current?.value === "" ?

                  <Button 
                  id="foodFormButton"
                  // variant = "info"
                  className="border border-dark border-3 text-white"  
                  // type = "submit"
                  style={{
                    // fontSize:"1.6vw", 
                    width:"auto"
                  }}
                  // maybe do a toast/tooltip/alert for message
                  onClick={()=>{
                    console.log("Put something in the inputs please")
                }}
                  >
                    😄 Cheers 😄
                    </Button>

  :
          <Button 
            id="foodFormButton"
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


          </Form>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}
export default FoodForm;