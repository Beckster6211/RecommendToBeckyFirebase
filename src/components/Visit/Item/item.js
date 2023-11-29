import React from "react"
//
import "./item.css"

// bootstrap
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Stack from 'react-bootstrap/Stack'
import Card from "react-bootstrap/Card"

function VisitItem({
    becky,
    visit,
    visitWhat,
    visitWhere,
    visitDetails,
    visitOpinion,
    visitThoughts,
    visitRecommend,
    visitStayed,
    visitId,
    changeOpinion,
    stayedThere,
    removeVisit,
    beckyThoughts
}){

    return (
        <tr
        className="border border-dark border-4"
        >
            <td
            className="p-1 align-middle border border-dark border-4 bg-primary"
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
            id="visitTableVisitTextarea"
            className="border border-dark border-2 p-1 mb-2"
            as="textarea"
            defaultValue={visitWhat} 
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
            id="visitTableVisitTextarea"
            className="border border-dark border-2 p-1 mb-2"
            as="textarea"
            defaultValue={visitWhere} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
              // height:"14vw"          
            }} 
            />

            <Form.Control 
            id="visitTableVisitTextarea"
            className="border border-dark border-2 p-1"
            as="textarea"
            defaultValue={visitDetails} 
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
        className="p-1 align-middle border border-dark border-4 bg-primary-subtle"
      style={{
      }}
        >          
        <Stack 
        direction="horizontal"
        // gap={1}
        className="justify-content-evenly"
        >
          <Card
          className="
          p-1 px-1
          border border-dark border-2 rounded bg-light"
          >
          <input
          name="visitTableStayedCheckbox"
            className="visitTableStayedCheckbox"
            style={{
              // width:"4vw",
              // height:"4vw",
              
            }}
            type="checkbox"
            onChange = {()=>{
              console.log("Not for you, sorry")
               }}       
            checked={visitStayed}
            readOnly
        /> 
        </Card>

          <Card
        className="visitTableOpinion p-1 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"3vw",
        }}
        >
            {visitOpinion}
            </Card>
        </Stack>

        <Form.Control 
            id="visitTableVisitTextarea"
            name="visitTableVisitTextarea"
            className="border border-dark border-2 p-1 mt-2"
            as="textarea"
            defaultValue={visitThoughts} 
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
              id="visitTableButton"
              variant="success"
              className="border border-2 border-dark rounded p-0"
              style={{
                // fontSize:"3vw"
              }}
          name="😁"
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          😁      
        </Button>
        <Button 
        id="visitTableButton"
        variant="secondary"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"3vw"
        }}
          name="😑"
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          😑
        </Button>
        <Button 
        id="visitTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"3vw"
        }}
          name="😫"
          onChange = {()=>{
            console.log("Not for you, Sorry")
          }}
          readOnly
        >
          😫
        </Button>
        </Stack>
      </td>

    :

        <td
        className="p-1 align-middle border border-dark border-4 bg-primary-subtle"
      style={{
      }}
        >
          <Stack 
        direction="horizontal"
        className="justify-content-evenly"
        // gap={1}
        >
          <Card
          className="p-1 ms-1 mb-0 border border-dark border-2 rounded bg-light"
          >
          <input
          name="visitTableStayedCheckbox"
        className="visitTableStayedCheckbox"
        style={{
          // width:"3vw",
          // height:"3vw",
          
        }}
          type="checkbox"
          onChange={() => {
            stayedThere(visit);
          }}
          checked={visitStayed}
          // readOnly
        />
        </Card>
        <Card
        className="visitTableOpinion p-1 ms-0 me-1 mb-0 border border-dark border-2 rounded bg-light"
        style={{
          // fontSize:"2.2vw",
        }}
        >
            {visitOpinion}
            </Card>
        </Stack>
        
        <Form.Control 
            id="visitTableVisitTextarea"
            name="visitTableVisitTextarea"
            className="border border-dark border-2 p-1 mt-2"
            as="textarea"
            defaultValue={visitThoughts} 
            onChange={(event) =>{
              beckyThoughts(visit, event)
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
             id="visitTableButton"
             variant="success"
              className="border border-2 border-dark rounded p-0"
              style={{
                // fontSize:"2vw"
              }}
          name="😁"
          onClick={(event) => {
            changeOpinion(visit, event);
          }}
        
        >
          😁          
        </Button> 
        <Button 
        id="visitTableButton"
        variant="secondary"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"2vw"
        }}
          name="😑"
          onClick={(event) => {
            changeOpinion(visit, event);
          }}
        >
          😑
        </Button>
        <Button 
        id="visitTableButton"
        variant = "danger"
        className="border border-dark border-2 rounded p-0"
        style={{
          // fontSize:"2vw"
        }}
          name="😫"
          onClick={(event) => {
            changeOpinion(visit, event);
          }}
        >
          😫
        </Button>
            </Stack>
        </td>
    }

            <td
      className="p-1 align-middle border border-dark border-4 bg-primary"
      style={{
      }}
      >

<Form.Control 
            id="visitTableVisitTextarea"
            className="visitTableVisitTextarea border border-dark border-2 p-1"
            as="textarea"
            defaultValue={visitRecommend} 
            readOnly 
            style={{
              // fontSize:"1.5vw",
            //   height:"8vw"          
            }}
            />
      </td>
            <td
      className="p-1 align-middle border border-dark border-4 bg-primary-subtle"
      style={{
      }}
      >
          <Button 
          id="visitTableButton"
          variant="light"
          className="border border-dark border-2 p-2"
          style={{
            // fontSize:"2.5vw"
          }}
          onClick={() => {
            // console.log("delete button clicked");
            removeVisit(visitId);
          }}
        >
          🗑️
          </Button>
      </td>
        </tr>
    )
}

export default VisitItem