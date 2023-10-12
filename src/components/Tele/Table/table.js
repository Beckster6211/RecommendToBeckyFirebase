import React from "react"
import "./table.css"

//components
import TeleItem from "../Item/item";

//bootstrap
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";

function TeleTable({userBecky, tele, teleBingedIt, deleteTele, handleOpinion, thoughtsBecky}){
    // console.log({film})

    return(
        <Container 
    fluid 
    className="teleTableComponent p-0"
    style={{
      // height:"55vw"
    }}
    >
      
      <Table 
      striped
      bordered 
      hover 
      className="teleTable border border-dark border-4 table-fixed"
      style={{
        
      }}
      >
      <thead 
      // id="foodTable1"
      className="teleTableHead bg-dark-subtle border border-dark border-4 "
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
            >Tele</th>
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
        // id="foodTable2"
        className="teleTableFoot bg-dark-subtle border border-dark border-4"
        style={{
          verticalAlign:"middle", 
          // fontSize:"2vw", 
          // fontWeight:"500"
          }}>
          <tr>
            <th
            className="bg-dark-subtle border-dark border-end border-4"
            >Tele</th>
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
        className="teleTableBody"
        style={{
          fontSize:"1.7vw", 
          // verticalAlign:""
        }}
        >
          {tele.map((item, index) => {
            // console.log({item});
            // console.log(item.numberofseries);
            // console.log(index);
            return (
              <TeleItem
                tele={item}
                teleItem={item.tvshow}
                telePlot={item.description}
                teleBinged={item.binged}
                teleOpinion = {item.beckyopinion}
                teleThoughts = {item.beckythoughts}
                teleRecommend = {item.recommendedby}
                teleConnected = {item.connected}
                teleGenre = {item.genre}
                teleProvider = {item.provider}
                teleSeries = {item.numberofseries}
                index={index}
                key={item.id}
                teleId = {item.id}
                removeTele={deleteTele}
                bingedIt={teleBingedIt}
                changeOpinion={handleOpinion}
                becky={userBecky}
                beckyThoughts = {thoughtsBecky}
              />
            );
          })}
        </tbody>
      
      </Table>
    </Container>
    )
}

export default TeleTable