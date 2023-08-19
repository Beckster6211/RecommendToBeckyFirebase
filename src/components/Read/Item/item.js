import React from "react"
import "./item.css"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Stack from 'react-bootstrap/Stack'

function ReadItem({
    becky,
    read,
    readItem,
    readRecommend,
    readBook,
    readOpinion,
    readPlot,
    readConnected,
    readAuthor,
    readGenre,
    readSeries,
    readId,
    changeOpinion,
    readTheBook,
    removeRead
    
}){

    // console.log({tele})

    return (
        <tr
        className="border border-dark border-4"
        >
            <td
            className="p-2 align-middle border border-dark border-4 bg-success"
            style={{
              
            }}
            >
                <p 
            // id="foodTableItem1"
            className="readTableItemRead bg-light border border-dark border-2 rounded p-1 mb-2"
            style={{
              // fontSize:"1.6vw",

            }}
            >
              {readItem}
              <br/>
              ({readAuthor} - {readSeries})
            </p>
            <Form.Control 
            id="readTableReadTextarea"
            name="readTableReadTextarea"
            className="border border-dark border-2 p-1 mb-2"
            as="textarea"
            defaultValue={readPlot} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            />
            <Form.Control 
            id="readTableReadTextarea"
            className="border border-dark border-2 p-1"
            as="textarea"
            defaultValue={readConnected} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }} 
            />
            </td>
            

            {
    becky === false ? 

      <td
        className="p-2 border border-dark border-4 bg-success-subtle"
      style={{
      }}
        >          
        <Stack 
        direction="horizontal"
        gap={1}
        className="justify-content-evenly"
        >
          <p
          className="
          p-1 pb-0 mx-1 mb-0 
          border border-dark border-2 rounded bg-light"
          >
          <input
          // id="foodTableItem9"
          name="readTableReadItCheckbox"
            className="readTableReadItCheckbox"
            style={{
              // width:"4vw",
              // height:"4vw",
              
            }}
            type="checkbox"
            onChange = {()=>{
              console.log("Not for you, sorry")
               }}       
            checked={readBook}
            readOnly
        /> 
        </p>

          <p
          // id="foodTableItem3"
        className="readTableOpinion p-1 mx-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"3vw",
        }}
        >{readOpinion}</p>
        </Stack>
            <Stack 
            gap={1} 
            className="p-1 text-center"
            style={{
              // border:"solid black 3px"
            }}
            >
              <Button 
              id="readTableButton"
              variant="success"
              className="border border-2 border-dark rounded "
              style={{
                // fontSize:"3vw"
              }}
          name="🤓"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          🤓        
        </Button>
        <Button 
        id="readTableButton"
        variant="secondary"
        className="border border-dark border-2 rounded"
        style={{
          // fontSize:"3vw"
        }}
          name="😶"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          😶
        </Button>
        <Button 
        id="readTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded"
        style={{
          // fontSize:"3vw"
        }}
          name="😴"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          😴
        </Button>
        </Stack>
      </td>

    :
        <td
        className="p-2 align-middle border border-dark border-4 bg-success-subtle"
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
          name="readTableReadItCheckbox"
        className="readTableReadItCheckbox"
        style={{
          // width:"3vw",
          // height:"3vw",
          
        }}
          type="checkbox"
          onChange={() => {
            readTheBook(read);
          }}
          checked={readBook}
          // readOnly
        />
        </p>
        <p
        // id="foodTableItemBecky1"
        className="readTableOpinion p-1 mx-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"2.2vw",
        }}
        >{readOpinion}</p>
        </Stack>
        
       <Stack 
       gap={1} 
            className="p-1"
            style={{
              // border:"solid black 3px"
            }}
            >
             <Button 
             id="readTableButton"
             variant="success"
              className="border border-2 border-dark rounded"
              style={{
                // fontSize:"2vw"
              }}
          name="🤓"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(read, event);
          }}
        
        >
          🤓          
        </Button> 
        <Button 
        id="readTableButton"
        variant="secondary"
        className="border border-dark border-2 rounded"
        style={{
          // fontSize:"2vw"
        }}
          name="😶"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(read, event);
          }}
        >
          😶
        </Button>
        <Button 
        id="readTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded"
        style={{
          // fontSize:"2vw"
        }}
          name="😴"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(read, event);
          }}
        >
          😴
        </Button>
            </Stack>
        </td>
    }

            <td
      className="p-2 align-middle border border-dark border-4 bg-success"
      style={{
      }}
      >

<Form.Control 
            id="readTableReadRecommend"
            className="readTableReadRecommend border border-dark border-2 p-1"
            as="textarea"
            defaultValue={readRecommend} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
            //   height:"8vw"          
            }}
            />
      </td>
            <td
      className="p-2 align-middle border border-dark border-4 bg-success-subtle"
      style={{
      }}
      >
          <Button 
          id="readTableButton"
          variant="light"
          className="border border-dark border-2"
          style={{
            // fontSize:"2.5vw"
          }}
          onClick={() => {
            // console.log("delete button clicked");
            removeRead(readId);
          }}
        >
          🗑️
          </Button>
      </td>
        </tr>
    )
}

export default ReadItem