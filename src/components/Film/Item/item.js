import React from "react"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Stack from 'react-bootstrap/Stack'

function FilmItem({
    
    film, 
    filmItem,
    filmPlot,
    filmWatched,
    filmOpinion,
    filmRecommend,
    filmGenre,
    filmConnected,
    filmProvider,
    filmId,
    watchedIt,
    removeFilm,
    changeOpinion
}){

    // console.log({film})
    return(
        <tr 
    className="border border-dark border-4"
    style={{
      // backgroundColor:"blue"
    }}
    >
      <td 
      className="p-2 align-middle border border-dark border-4 bg-info-subtle"
      style={{
        
      }}
      >
            <p 
            // id="foodTableItem1"
            className=" bg-light border border-dark border-2 rounded p-1"
            style={{
              // fontSize:"1.6vw",

            }}
            >
              {filmItem}
            </p>
            <Form.Control 
            // id="foodTableFoodTextarea"
            // name="foodTableFoodTextarea"
            className="border border-dark border-2 p-1"
            as="textarea"
            defaultValue={filmPlot} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            />
      </td>
      <td
      className="p-2 align-middle border border-dark border-4 bg-info"
      >
        <p
        className=" bg-light border border-dark border-2 rounded p-1"
        >
            {filmProvider}
        </p>

        <Form.Control 
            // id="foodTableFoodTextarea"
            // name="foodTableFoodTextarea"
            className="border border-dark border-2 p-1"
            as="textarea"
            defaultValue={filmConnected} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            />
<br/>
        <p
        className=" bg-light border border-dark border-2 rounded p-1"
        >
            {filmGenre}
            </p>
      </td>

      <td
        className="p-2 align-middle border border-dark border-4 bg-info-subtle"
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
            checked={filmWatched}
            readOnly
        /> 
        </p>
          <p
          // id="foodTableItem3"
        className="foodTableOpinion p-1 mx-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"3vw",
          
          
        }}
        >{filmOpinion}</p>
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
          name="😍"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          😍        
        </Button>
        <Button 
        id="foodTableButton"
        variant="secondary"
        className="border border-dark border-2 rounded"
        style={{
          // fontSize:"3vw"
        }}
          name="😕"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          😕
        </Button>
        <Button 
        id="foodTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded"
        style={{
          // fontSize:"3vw"
        }}
          name="🥱"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          🥱
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



      {/* remove the opinion button and only have those displayed to me*/}
      {/* {
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
          */}
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
      {/* </td>
      
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
            </Stack> */}
        {/* comment this one out once done */}
        {/* <button
          name="🤷‍♀️"
          onClick={(event) => {
            changeOpinion(food, event);
          }}
        >
          Reset
        </button> */}
      {/* </td> */}
      {/* } */}



      {/* <td>
        <p>{foodTried}</p>
      </td> */}
      <td
      className="p-2 align-middle border border-dark border-4 bg-info"
      style={{
      }}
      >
        <p
        // id="foodTableItem7"
        className="foodTableRecommend p-1 bg-light border border-dark border-2 rounded"
        style={{
          // fontSize:"1.6vw"
        }}
        >
          {filmRecommend}
        </p>
      </td>


      <td
      className="p-2 align-middle border border-dark border-4 bg-info-subtle"
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
            removeFilm(filmId);
          }}
        >
          🗑️
          </Button>
      </td>
    </tr>
    )
}

export default FilmItem