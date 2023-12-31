import React from "react"
import "./item.css"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Stack from 'react-bootstrap/Stack'
import Card from "react-bootstrap/Card"

function TeleItem({
    becky,
    tele,
    teleItem,
    teleRecommend,
    teleBinged,
    teleOpinion,
    teleThoughts,
    telePlot,
    teleConnected,
    teleGenre,
    teleProvider,
    teleSeries,
    teleId,
    changeOpinion,
    bingedIt,
    removeTele,
    beckyThoughts
    
}){

    // console.log({tele})

    return (
        <tr
        className="border border-dark border-4"
        >
            <td
            className="p-1 align-middle border border-dark border-4 bg-danger"
            style={{
              
            }}
            >
                <p 
            // id="foodTableItem1"
            className="teleTableItemTele bg-light border border-dark border-2 rounded p-1 mb-2"
            style={{
              // fontSize:"1.6vw",

            }}
            >
              {teleItem}
              <br/>
              ({teleSeries})
            </p>
            <Form.Control 
            id="teleTableTeleTextarea"
            name="teleTableTeleTextarea"
            className="border border-dark border-2 p-1 mb-2"
            as="textarea"
            defaultValue={telePlot} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            />
            <Form.Control 
            id="teleTableTeleTextarea"
            className="border border-dark border-2 p-1"
            as="textarea"
            defaultValue={teleConnected} 
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
        className="p-1 align-middle border border-dark border-4 bg-danger-subtle"
      style={{
      }}
        >          
        <Stack 
        direction="horizontal"
        // gap={1}
        className="justify-content-evenly"
        >
          <Card
          className="p-1 px-1 border border-dark border-2 rounded bg-light"
          >
          <input
          // id="foodTableItem9"
          name="teleTableBingedCheckbox"
            className="teleTableBingedCheckbox"
            style={{
              // width:"4vw",
              // height:"4vw",
              
            }}
            type="checkbox"
            onChange = {()=>{
              console.log("Not for you, sorry")
               }}       
            checked={teleBinged}
            readOnly
        /> 
        </Card>

          <Card
          // id="foodTableItem3"
        className="teleTableOpinion p-1 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"3vw",
        }}
        >{teleOpinion}</Card>
        </Stack>
        <Form.Control 
            id="teleTableTeleTextarea"
            name="teleTableTeleTextarea"
            className="border border-dark border-2 p-1 mt-2"
            as="textarea"
            defaultValue={teleThoughts} 
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
              id="teleTableButton"
              variant="success"
              className="border border-2 border-dark rounded p-0"
              style={{
                // fontSize:"3vw"
              }}
          name="🤩"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          🤩        
        </Button>
        <Button 
        id="teleTableButton"
        variant="secondary"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"3vw"
        }}
          name="🤔"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          🤔
        </Button>
        <Button 
        id="teleTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"3vw"
        }}
          name="😩"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          😩
        </Button>
        </Stack>
      </td>

    :
        <td
        className="p-1 align-middle border border-dark border-4 bg-danger-subtle"
      style={{
      }}
        >
          <Stack 
        direction="horizontal"
        className="justify-content-evenly"
        >
          <Card
          className="p-1 px-1 border border-dark border-2 rounded bg-light"
          >
          <input
          name="teleTableBingedCheckbox"
        className="teleTableBingedCheckbox"
        style={{
          // width:"3vw",
          // height:"3vw",
          
        }}
          type="checkbox"
          onChange={() => {
            bingedIt(tele);
          }}
          checked={teleBinged}
          // readOnly
        />
        </Card>
        <Card
        // id="foodTableItemBecky1"
        className="teleTableOpinion p-1 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"2.2vw",
        }}
        >{teleOpinion}</Card>
        </Stack>
        
        <Form.Control 
            id="teleTableTeleTextarea"
            name="teleTableTeleTextarea"
            className="border border-dark border-2 p-1 mt-2"
            as="textarea"
            defaultValue={teleThoughts} 
            onChange={(event) =>{
              beckyThoughts(tele, event)
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
             id="teleTableButton"
             variant="success"
              className="border border-2 border-dark rounded p-0"
              style={{
                // fontSize:"2vw"
              }}
          name="🤩"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(tele, event);
          }}
        
        >
          🤩          
        </Button> 
        <Button 
        id="teleTableButton"
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
            changeOpinion(tele, event);
          }}
        >
          😕
        </Button>
        <Button 
        id="teleTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"2vw"
        }}
          name="😩"
          // onClick={(event) => {
          //   changeOpinion(food, event);
          // }}
          onClick={(event) => {
            changeOpinion(tele, event);
          }}
        >
          😩
        </Button>
            </Stack>
        </td>
    }

            <td
      className="p-1 align-middle border border-dark border-4 bg-danger"
      style={{
      }}
      >

<Form.Control 
            id="teleTableTeleTextarea"
            className="teleTableTeleTextarea border border-dark border-2 p-1"
            as="textarea"
            defaultValue={teleRecommend} 
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
      className="p-0 align-middle border border-dark border-4 bg-danger-subtle"
      style={{
      }}
      >
          <Button 
          id="teleTableTrashButton"
          variant="light"
          className="border border-dark border-2 p-2"
          style={{
            // fontSize:"2.5vw"
          }}
          onClick={() => {
            // console.log("delete button clicked");
            removeTele(teleId);
          }}
        >
          🗑️
          </Button>
      </td>
        </tr>
    )
}

export default TeleItem