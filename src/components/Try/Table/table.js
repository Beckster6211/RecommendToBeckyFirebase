import React from "react"
import "./table.css"

//components
import TryItem from "../Item/item";

//bootstrap
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";

function VisitTable({userBecky, tryIt, triedIt, deleteTry, handleOpinion, thoughtsBecky}){
    // console.log({try})

    return(
        <Container 
    fluid 
    className="tryTableComponent p-0"
    style={{
      // height:"55vw"
    }}
    >
      
      <Table 
      striped
      bordered 
      hover 
      className="tryTable border border-dark border-4 table-fixed"
      style={{
        
      }}
      >
      <thead
      className="tryTableHead bg-dark-subtle border border-dark border-4 "
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
            >Try this</th>
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
        className="tryTableFoot bg-dark-subtle border border-dark border-4"
        style={{
          verticalAlign:"middle", 
          // fontSize:"2vw", 
          // fontWeight:"500"
          }}>
          <tr>
            <th
            className="bg-dark-subtle border-dark border-end border-4"
            >Try this</th>
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
        className="tryTableBody"
        style={{
          fontSize:"1.7vw", 
          // verticalAlign:""
        }}
        >
          {tryIt.map((item, index) => {
            // console.log({item});
            // console.log(index);
            return (
              <TryItem
                tryIt={item}
                tryWhat = {item.what}
                tryWhere={item.location}
                tryWhy = {item.why}
                tryVisited={item.visited}
                tryOpinion = {item.beckyopinion}
                tryThoughts = {item.beckythoughts}
                tryRecommend = {item.recommendedby}
                index={index}
                key={item.id}
                tryId = {item.id}
                removeTry={deleteTry}
                triedIt={triedIt}
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