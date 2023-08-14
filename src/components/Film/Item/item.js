import React from "react"
import "./item.css"

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
    changeOpinion,
    becky
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
            className="filmTableItemFilm bg-light border border-dark border-2 rounded p-1"
            style={{
              // fontSize:"1.6vw",

            }}
            >
              {filmItem}
            </p>
            <Form.Control 
            id="filmTableFilmTextarea"
            name="filmTableFilmTextarea"
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
        <Stack
        // direction="horizontal"
        gap={1}
        className="p-1"
        >
        <p
        className="filmTableItemFilm bg-light border border-dark border-2 rounded p-1 m-0"
        >
            {filmProvider}
        </p>
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
{/* <br/> */}
        <Form.Control 
            id="filmTableFilmGenre"
            className="filmTableFilmGenre border border-dark border-2 p-1"
            as="textarea"
            defaultValue={filmGenre} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
            //   height:"8vw"          
            }}
            />

        {/* <p
        className="filmTableItemFilm bg-light border border-dark border-2 rounded p-1"
        >
            {filmGenre}
            </p> */}
        </Stack>
      </td>

{
    becky === false ? 

      <td
        className="td1 p-2 border border-dark border-4 bg-info-subtle"
      style={{
      }}
        >          
        <Stack 
        direction="horizontal"
        gap={1}
        className="td3 justify-content-evenly"
        >
          <p
          className="
          p-1 pb-0 mx-1 mb-0 
          border border-dark border-2 rounded bg-light"
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
        </p>

          <p
          // id="foodTableItem3"
        className="filmTableOpinion p-1 mx-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"3vw",
          
          
        }}
        >{filmOpinion}</p>
        </Stack>
            <Stack 
            gap={1} 
            className="td2 p-1 text-center"
            style={{
              // border:"solid black 3px"
            }}
            >
              <Button 
              id="filmTableButton"
              variant="success"
              className="border border-2 border-dark rounded "
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
        id="filmTableButton"
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
        </p>
        <p
        // id="foodTableItemBecky1"
        className="filmTableOpinion p-1 mx-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"2.2vw",
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
             id="filmTableButton"
             variant="success"
              className="border border-2 border-dark rounded"
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
        className="border border-dark border-2 rounded"
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
        className="border border-dark border-2 rounded"
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
      className="p-2 align-middle border border-dark border-4 bg-info"
      style={{
      }}
      >
        <p
        // id="foodTableItem7"
        className="filmTableRecommend p-1 bg-light border border-dark border-2 rounded"
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
          id="filmTableTrashButton"
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