import React from "react"
import "./table.css"

//components
import ReadItem from "../Item/item";

//bootstrap
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";

function ReadTable({userBecky, read, readTheBook, deleteRead, handleOpinion}){
    // console.log({film})

    return(
        <Container 
    fluid 
    className="readTableComponent p-0"
    style={{
      // height:"55vw"
    }}
    >
      
      <Table 
      striped
      bordered 
      hover 
      className="readTable border border-dark border-4 table-fixed"
      style={{
        
      }}
      >
      <thead 
      // id="foodTable1"
      className="readTableHeadFoot bg-dark-subtle border border-dark border-4 "
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
            >Book</th>
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
        className="readTableHeadFoot bg-dark-subtle border border-dark border-4"
        style={{
          verticalAlign:"middle", 
          // fontSize:"2vw", 
          // fontWeight:"500"
          }}>
          <tr>
            <th
            className="bg-dark-subtle border-dark border-end border-4"
            >Book</th>
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
        className="readTableBody"
        style={{
          fontSize:"1.7vw", 
          // verticalAlign:""
        }}
        >
          {read.map((item, index) => {
            // console.log({item});
            // console.log(item.numberofseries);
            // console.log(index);
            return (
              <ReadItem
                read={item}
                readItem={item.book}
                readPlot={item.description}
                readBook={item.read}
                readOpinion = {item.beckyopinion}
                readRecommend = {item.recommendedby}
                readConnected = {item.connected}
                readGenre = {item.genre}
                readSeries = {item.numberofbooks}
                readAuthor = {item.author}
                index={index}
                key={item.id}
                readId = {item.id}
                removeRead={deleteRead}
                readTheBook={readTheBook}
                changeOpinion={handleOpinion}
                becky={userBecky}
              />
            );
          })}
        </tbody>
      
      </Table>
    </Container>
    )
}

export default ReadTable