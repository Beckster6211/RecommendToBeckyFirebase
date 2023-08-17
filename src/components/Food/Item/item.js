import React, {useState} from "react"
/* COULD DELETE USESTATE */
import "./item.css";

//
import {getAuth, onAuthStateChanged} from "firebase/auth"
/* COULD DELETE THIS */

//
import Button from "react-bootstrap/Button"
import Stack from 'react-bootstrap/Stack'
import Form from "react-bootstrap/Form"


//
function Item({
  food,
  foodItem,
  foodRecipe,
  foodOpinion,
  foodTried,
  foodRecommend,
  removeFood,
  foodId,
  triedIt,
  changeOpinion,
  becky
}) {
  // console.log(foodItem);
  // console.log({becky})

  /////////// auth in item to stop passing to each item
//   const [isBecky, setIsBecky] = useState(false)
// console.log({isBecky})

// const auth = getAuth()    
// onAuthStateChanged(auth, (user)=>{
//   console.log({user})
//   // console.log(user.uid)
//         // console.log(user.uid)
//         if(user === null){
//           console.log("this user isnt becky")
//           setIsBecky(false)
//         } else if (user.uid === "QKMfrQjVekU1HqN4VUlnSyR44ks2"){
//           console.log("this user is Becky")
//           setIsBecky(true)
//         }
//     })


  return (
    <tr 
    className="border border-dark border-4"
    style={{
      // backgroundColor:"blue"
    }}
    >
      <td 
      className="p-2 align-middle border border-dark border-4 bg-warning"
      style={{
        
      }}
      >

            <p 
            // id="foodTableItem1"
            className="foodTableItemFood bg-light border border-dark border-2 rounded p-1"
            style={{
              // fontSize:"1.6vw",

            }}
            >
              {foodItem}
            </p>
            <Form.Control 
            id="foodTableFoodTextarea"
            name="foodTableFoodTextarea"
            className="border border-dark border-2 p-1"
            as="textarea"
            defaultValue={foodRecipe} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            />
      </td>

      {/* remove the opinion button and only have those displayed to me*/}
      {
        becky === false ?
        
        <td
        className="p-2 align-middle border border-dark border-4 bg-warning-subtle"
      style={{
      }}
        >          
        <Stack 
        direction="horizontal"
        className="justify-content-evenly"
        >
          <p
          className="
          p-1 pb-0 mx-1 mb-0 
          border border-dark border-2 rounded bg-light"
          >
          <input
          // id="foodTableItem9"
          name="foodTableTriedCheckbox"
            className="foodTableCheckboxTried"
            style={{
              // width:"4vw",
              // height:"4vw",
              
            }}
            type="checkbox"
            onChange = {()=>{
              console.log("Not for you, sorry")
               }}       
            checked={foodTried}
            readOnly
        /> 
        </p>
          <p
          // id="foodTableItem3"
        className="foodTableOpinion p-1 mx-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"3vw",
          
          
        }}
        >{foodOpinion}</p>
        </Stack>
            <Stack 
            gap={1} 
            className="p-1"
            style={{
              // border:"solid black 3px"
            }}
            >
              <Button 
              id="foodTableButton"
              variant="success"
              className="border border-2 border-dark rounded"
              style={{
                // fontSize:"3vw"
              }}
          name="😋"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          😋          
        </Button>
        <Button 
        id="foodTableButton"
        variant="secondary"
        className="border border-dark border-2 rounded"
        style={{
          // fontSize:"3vw"
        }}
          name="🤫"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          🤫
        </Button>
        <Button 
        id="foodTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded"
        style={{
          // fontSize:"3vw"
        }}
          name="🤮"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          🤮
        </Button>
        </Stack>
         
        {/* 
        /////////
        <button
          name="🤷‍♀️"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("not for you")
          }}
          readOnly
        >
          Reset
        </button>
        /////////
         */}
      </td>
      
        :
        <td
        className="p-2 align-middle border border-dark border-4 bg-warning-subtle"
      style={{
      }}
        >
          <Stack 
        direction="horizontal"
        className="justify-content-evenly"
        >
          <p
          className="p-1 pb-0 mx-1 mb-0 border border-dark border-2 rounded bg-light"
          >
          <input
          name="foodTableBeckyTriedCheckbox"
        className="foodTableCheckboxTried"
        style={{
          // width:"3vw",
          // height:"3vw",
          
        }}
          type="checkbox"
          onChange={() => {
            triedIt(food);
          }}
          checked={foodTried}
          // readOnly
        />
        </p>
        <p
        // id="foodTableItemBecky1"
        className="foodTableOpinion p-1 mx-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"2.2vw",
        }}
        >{foodOpinion}</p>
        </Stack>
        
       <Stack 
       gap={1} 
            className="p-1"
            style={{
              // border:"solid black 3px"
            }}
            >
             <Button 
             id="foodTableButton"
             variant="success"
              className="border border-2 border-dark rounded"
              style={{
                // fontSize:"2vw"
              }}
          name="😋"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        
        >
          😋          
        </Button> 
        <Button 
        id="foodTableButton"
        variant="secondary"
        className="border border-dark border-2 rounded"
        style={{
          // fontSize:"2vw"
        }}
          name="🤫"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        >
          🤫
        </Button>
        <Button 
        id="foodTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded"
        style={{
          // fontSize:"2vw"
        }}
          name="🤮"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        >
          🤮
        </Button>
            </Stack>
        {/* comment this one out once done */}
        {/* <button
          name="🤷‍♀️"
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        >
          Reset
        </button> */}
      </td>
      }
      {/* <td>
        <p>{foodTried}</p>
      </td> */}
      <td
      className="p-2 align-middle border border-dark border-4 bg-warning"
      style={{
      }}
      >
        {/* <p
        // id="foodTableItem7"
        className="foodTableRecommend p-1 bg-light border border-dark border-2 rounded"
        style={{
          // fontSize:"1.6vw"
        }}
        >
          {foodRecommend}
        </p> */}
                    <Form.Control 
            id="foodTableFoodTextarea"
            name="foodTableFoodTextarea"
            className="text-center border border-dark border-2 p-1"
            as="textarea"
            defaultValue={foodRecommend} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            />
      </td>


      <td
      className="p-2 align-middle border border-dark border-4 bg-warning-subtle"
      style={{
      }}
      >
          <Button 
          id="foodTableButton"
          variant="light"
          className="border border-dark border-2"
          style={{
            // fontSize:"2.5vw"
          }}
          onClick={() => {
            // console.log("delete button clicked");
            removeFood(foodId);
          }}>
          🗑️
          </Button>
      </td>
    </tr>
  );
}
export default Item;