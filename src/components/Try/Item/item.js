import React from "react"

//
import "./item.css"

// bootstrap
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Stack from 'react-bootstrap/Stack'

function TryItem({
    becky,
    tryIt,
    tryWhat,
    tryWhere,
    tryWhy,
    tryVisited,
    tryOpinion,
    tryThoughts,
    tryRecommend,
    tryId,
    changeOpinion,
    triedIt,
    removeTry,
    beckyThoughts
}){

    return (
        <tr
        className="border border-dark border-4"
        >
            <td
            className="p-2 align-middle border border-dark border-4 bg-secondary"
            style={{
              
            }}
            >
                {/* <p 
            // id="foodTableItem1"
            className="visitTableItemVisit bg-light border border-dark border-2 rounded p-1 mb-2"
            style={{
              // fontSize:"1.6vw",

            }}
            >
              {visitWhat}
             
            </p> */}
            <Form.Control 
            id="tryTableTryTextarea"
            className="border border-dark border-2 p-1 mb-1"
            as="textarea"
            defaultValue={tryWhat} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }} 
            />
            {/* <p 
            // id="foodTableItem1"
            className="visitTableItemVisit bg-light border border-dark border-2 rounded p-1 mb-2"
            style={{
              // fontSize:"1.6vw",

            }}
            >
              {visitWhere}
            </p> */}
            <Form.Control 
            id="tryTableTryTextarea"
            className="border border-dark border-2 p-1 mb-1"
            as="textarea"
            defaultValue={tryWhere} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }} 
            />

            <Form.Control 
            id="tryTableTryTextarea"
            className="border border-dark border-2 p-1"
            as="textarea"
            defaultValue={tryWhy} 
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
        className="p-2 align-middle border border-dark border-4 bg-secondary-subtle"
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
          px-1 py-1 ms-1 mb-0 
          border border-dark border-2 rounded bg-light"
          >
          <input
          name="tryTableTriedItCheckbox"
            className="tryTableTriedItCheckbox"
            style={{
              // width:"4vw",
              // height:"4vw",
              
            }}
            type="checkbox"
            onChange = {()=>{
              console.log("Not for you, sorry")
               }}       
            checked={tryVisited}
            readOnly
        /> 
        </p>

          <p
        className="tryTableOpinion p-1 mx-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"3vw",
        }}
        >
            {tryOpinion}
            </p>
        </Stack>

        <Form.Control 
            id="foodTableFoodTextarea"
            name="foodTableFoodTextarea"
            className="border border-dark border-2 p-1 mt-2"
            as="textarea"
            defaultValue={tryThoughts} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            />

            <Stack 
             direction="horizontal"
            gap={1} 
            className="justify-content-evenly pt-2"
            style={{
              // border:"solid black 3px"
            }}
            >
              <Button 
              id="tryTableButton"
              variant="success"
              className="border border-2 border-dark rounded p-0"
              style={{
                // fontSize:"3vw"
              }}
          name="👍"
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          👍      
        </Button>
        <Button 
        id="tryTableButton"
        variant="secondary"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"3vw"
        }}
          name="🤙"
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          🤙
        </Button>
        <Button 
        id="tryTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"3vw"
        }}
          name="👎"
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          👎
        </Button>
        </Stack>
      </td>

    :
        <td
        className="p-2 align-middle border border-dark border-4 bg-secondary-subtle"
      style={{
      }}
        >
          <Stack 
        direction="horizontal"
        className="justify-content-evenly"
        gap={1}
        >
          <p
          className="px-1 py-1 ms-1 mb-0 border border-dark border-2 rounded bg-light"
          >
          <input
          name="tryTableTriedItCheckbox"
        className="tryTableTriedItCheckbox"
        style={{
          // width:"3vw",
          // height:"3vw",
          
        }}
          type="checkbox"
          onChange={() => {
            triedIt(tryIt);
          }}
          checked={tryVisited}
          // readOnly
        />
        </p>
        <p
        className="tryTableOpinion p-1 mx-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"2.2vw",
        }}
        >
            {tryOpinion}
            </p>
        </Stack>
        
        <Form.Control 
            id="foodTableFoodTextarea"
            name="foodTableFoodTextarea"
            className="border border-dark border-2 p-1 mt-2"
            as="textarea"
            defaultValue={tryThoughts} 
            onChange={(event) =>{
              beckyThoughts(tryIt, event)
            }}
            // readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }}
            />

       <Stack 
       direction = "horizontal"
       gap={1} 
            className="justify-content-evenly pt-2"
            style={{
              // border:"solid black 3px"
            }}
            >
             <Button 
             id="tryTableButton"
             variant="success"
              className="border border-2 border-dark rounded p-0"
              style={{
                // fontSize:"2vw"
              }}
          name="👍"
          onClick={(event) => {
            changeOpinion(tryIt, event);
          }}
        
        >
          👍          
        </Button> 
        <Button 
        id="tryTableButton"
        variant="secondary"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"2vw"
        }}
          name="🤙"
          onClick={(event) => {
            changeOpinion(tryIt, event);
          }}
        >
          🤙
        </Button>
        <Button 
        id="tryTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"2vw"
        }}
          name="👎"
          onClick={(event) => {
            changeOpinion(tryIt, event);
          }}
        >
          👎
        </Button>
            </Stack>
        </td>
    }

            <td
      className="p-2 align-middle border border-dark border-4 bg-secondary"
      style={{
      }}
      >

<Form.Control 
            id="tryTableTryRecommend"
            className="visitTableVisitRecommend border border-dark border-2 p-1"
            as="textarea"
            defaultValue={tryRecommend} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
            //   height:"8vw"          
            }}
            />
      </td>
            <td
      className="p-2 align-middle border border-dark border-4 bg-secondary-subtle"
      style={{
      }}
      >
          <Button 
          id="tryTableButton"
          variant="light"
          className="border border-dark border-2"
          style={{
            // fontSize:"2.5vw"
          }}
          onClick={() => {
            // console.log("delete button clicked");
            removeTry(tryId);
          }}
        >
          🗑️
          </Button>
      </td>
        </tr>
    )
}

export default TryItem