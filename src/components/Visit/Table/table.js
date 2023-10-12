import React from "react"
import "./table.css"

//components
import VisitItem from "../Item/item";

//bootstrap
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";

function VisitTable({userBecky, visit, stayedThere, deleteVisit, handleOpinion, thoughtsBecky}){
    // console.log({visit})

    return(
        <Container 
    fluid 
    className="visitTableComponent p-0"
    style={{
      // height:"55vw"
    }}
    >
      
      <Table 
      striped
      bordered 
      hover 
      className="visitTable border border-dark border-4 table-fixed"
      style={{
        
      }}
      >
      <thead 
      className="visitTableHead bg-dark-subtle border border-dark border-4 "
      style={{
        verticalAlign:"middle", 
        position: "sticky",
        top:"0"
      }}
      >
          <tr>
            <th 
            className="tableHeader bg-dark-subtle border-dark border-end border-4"
            // style={{fontWeight:"500"}}
            >Visit</th>
            {/* <th 
            className="tableHeader bg-dark-subtle border-dark border-end border-4"
            // style={{fontWeight:"500"}}
            >Information
            </th> */}
            <th 
            className="tableHeader bg-dark-subtle border-dark border-end border-4"
            // style={{fontWeight:"500"}}
            >Becky Opinion</th>
            <th 
            className="tableHeader bg-dark-subtle border-dark border-end border-4"
            // style={{fontWeight:"500"}}
            >Who recommends</th>
            <th 
            className="tableHeader bg-dark-subtle"
            // style={{fontWeight:"500"}}
            >Delete</th>
          </tr>
        </thead>


        {/* 
        //////////
    with sticky table header not sure if footer needed */}
        <tfoot 
        className="visitTableFoot bg-dark-subtle border border-dark border-4"
        style={{
          verticalAlign:"middle", 
          }}>
          <tr>
            <th
            className="bg-dark-subtle border-dark border-end border-4"
            >Visit</th>
            {/* <th 
            className="tableHeader bg-dark-subtle border-dark border-end border-4"
            // style={{fontWeight:"500"}}
            >Information
            </th> */}
            <th
            className="bg-dark-subtle border-dark border-end border-4"
            >Becky Opinion</th>
            <th
            className="bg-dark-subtle border-dark border-end border-4"
            >Who recommends</th>
            <th
            className="bg-dark-subtle"
            >Delete</th>
          </tr>
        </tfoot> 


        <tbody 
        className="visitTableBody"
        style={{
          fontSize:"1.7vw", 
          // verticalAlign:""
        }}
        >
          {visit.map((item, index) => {
            // console.log({item});
            // console.log(index);
            return (
              <VisitItem
                visit={item}
                visitWhat={item.what}
                visitWhere={item.where}
                visitDetails={item.details}
                visitOpinion = {item.beckyopinion}
                visitThoughts = {item.beckythoughts}
                visitRecommend = {item.recommendedby}
                visitStayed = {item.stayed}
                index={index}
                key={item.id}
                visitId = {item.id}
                removeVisit={deleteVisit}
                stayedThere={stayedThere}
                changeOpinion={handleOpinion}
                becky={userBecky}
                beckyThoughts={thoughtsBecky}
              />
            );
          })}
        </tbody>
      
      </Table>
    </Container>
    )
}

export default VisitTable