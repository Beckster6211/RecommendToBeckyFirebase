import React from "react"
import "./item.css"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Stack from 'react-bootstrap/Stack'
import Card from "react-bootstrap/Card"

function FilmItem({
    
    film, 
    filmItem,
    filmPlot,
    filmWatched,
    filmOpinion,
    filmThoughts,
    filmRecommend,
    filmGenre,
    filmConnected,
    filmProvider,
    filmId,
    watchedIt,
    removeFilm,
    changeOpinion,
    becky,
    beckyThoughts
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
      className="p-1 align-middle border border-dark border-4 bg-info"
      style={{
        
      }}
      >
          <p 
            // id="foodTableItem1"
            className="filmTableItemFilm bg-light border border-dark border-2 rounded p-1 mb-2"
            style={{
              // fontSize:"1.6vw",

            }}
            >
              {filmItem}
            </p>
            <Form.Control 
            id="filmTableFilmTextarea"
            name="filmTableFilmTextarea"
            className="border border-dark border-2 p-1 mb-2"
            as="textarea"
            defaultValue={filmPlot} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            />
            <Form.Control 
            id="filmTableFilmTextarea"
            className="border border-dark border-2 p-1"
            as="textarea"
            defaultValue={filmConnected} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            />
          
      </td>
      {/* <td
      className="p-2 align-middle border border-dark border-4 bg-info"
      >
        <Stack
        // direction="horizontal"
        gap={1}
        className="p-1"
        > */}
        {/* <p
        className="filmTableItemFilm bg-light border border-dark border-2 rounded p-1 m-0"
        >
            {filmProvider}
        </p> */}
        {/* <Form.Control 
            id="filmTableFilmTextarea"
            className="border border-dark border-2 p-1"
            as="textarea"
            defaultValue={filmConnected} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            /> */}

        {/* <Form.Control 
            id="filmTableFilmGenre"
            className="filmTableFilmGenre border border-dark border-2 p-1"
            as="textarea"
            defaultValue={filmGenre} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
            //   height:"8vw"          
            }}
            /> */}

            
        {/* </Stack>
      </td> */}

{
    becky === false ? 

      <td
        className="p-1 align-middle border border-dark border-4 bg-info-subtle"
      style={{
      }}
        >          
        <Stack 
        direction="horizontal"
        // gap={1}
        className="justify-content-evenly"
        >
          <Card
          className=" p-1 px-1 border border-dark border-2 rounded bg-light"
          >
          <input
          // id="foodTableItem9"
          name="filmTableWatchedCheckbox"
            className="filmTableWatchedCheckbox"
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
        </Card>

          <Card
          // id="foodTableItem3"
        className="filmTableOpinion p-1 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"3vw",
        }}
        >{filmOpinion}</Card>
        </Stack>
        <Form.Control 
            id="filmTableFilmTextarea"
            name="filmTableFilmTextarea"
            className="border border-dark border-2 p-1 mt-2"
            as="textarea"
            defaultValue={filmThoughts} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            />
            <Stack 
            direction="horizontal"
            // gap={1} 
            className="justify-content-evenly pt-2"
            style={{
              // border:"solid black 3px"
            }}
            >
              <Button 
              id="filmTableButton"
              variant="success"
              className="border border-2 border-dark rounded p-0"
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
        id="filmTableButton"
        variant="secondary"
        className="border border-dark border-2 rounded p-0"
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
        id="filmTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded p-0"
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
      </td>

    :
        <td
        className="p-1 align-middle border border-dark border-4 bg-info-subtle"
      style={{
      }}
        >
          <Stack 
        direction="horizontal"
        className="justify-content-evenly"
        // gap={1}
        >
          <Card
          className="p-1 px-1 border border-dark border-2 rounded bg-light"
          >
          <input
          name="filmTableBeckyWatchedCheckbox"
        className="filmTableCheckboxWatched"
        style={{
          // width:"3vw",
          // height:"3vw",
          
        }}
          type="checkbox"
          onChange={() => {
            watchedIt(film);
          }}
          checked={filmWatched}
          // readOnly
        />
        </Card>
        <Card
        // id="foodTableItemBecky1"
        className="filmTableOpinion p-1 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"2.2vw",
        }}
        >{filmOpinion}</Card>
        </Stack>

        <Form.Control 
            id="filmTableFilmTextarea"
            name="filmTableFilmTextarea"
            className="border border-dark border-2 p-1 mt-2"
            as="textarea"
            defaultValue={filmThoughts} 
            onChange={(event) =>{
              beckyThoughts(film, event)
            }}
            // readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            />
        
       <Stack 
       direction = "horizontal"
      //  gap={1} 
            className="justify-content-evenly pt-2"
            style={{
              // border:"solid black 3px"
            }}
            >
             <Button 
             id="filmTableButton"
             variant="success"
              className="border border-2 border-dark rounded p-0"
              style={{
                // fontSize:"2vw"
              }}
          name="😍"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(film, event);
          }}
        
        >
          😍          
        </Button> 
        <Button 
        id="filmTableButton"
        variant="secondary"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"2vw"
        }}
          name="😕"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(film, event);
          }}
        >
          😕
        </Button>
        <Button 
        id="filmTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"2vw"
        }}
          name="🥱"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(film, event);
          }}
        >
          🥱
        </Button>
            </Stack>
        </td>
    }

      <td
      className="p-1 align-middle border border-dark border-4 bg-info"
      style={{
      }}
      >

<Form.Control 
            id="filmTableFilmTextarea"
            name="filmTableFilmTextarea"
            className="text-center border border-dark border-2 p-1"
            as="textarea"
            defaultValue={filmRecommend} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
            //   height:"8vw"          
            }}
            />


        {/* <p
        // id="foodTableItem7"
        className="filmTableRecommend p-1 bg-light border border-dark border-2 rounded"
        style={{
          // fontSize:"1.6vw"
        }}
        >
          {filmRecommend}
        </p> */}
      </td>


      <td
      className="p-0 align-middle border border-dark border-4 bg-info-subtle"
      style={{
      }}
      >
          <Button 
          id="filmTableTrashButton"
          variant="light"
          className="border border-dark border-2 p-2"
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