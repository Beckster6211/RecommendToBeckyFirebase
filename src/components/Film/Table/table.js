import React from "react"
import "./table.css"

//components
import FilmItem from "../Item/item";

//bootstrap
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";

function FilmTable({film, filmWatchedIt, deleteFilm, handleOpinion}){
    // console.log({film})

    return(
        <Container 
    fluid 
    className="filmTableComponent p-0"
    style={{
      // height:"55vw"
    }}
    >
      
      <Table 
      striped
      bordered 
      hover 
      className="filmTable border border-dark border-4 table-fixed"
      style={{
        
      }}
      >
      <thead 
      // id="foodTable1"
      className=" bg-dark-subtle border border-dark border-4 "
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
            >Film</th>
            <th 
            className="tableHeader bg-dark-subtle border-dark border-end border-4"
            // style={{fontWeight:"500"}}
            >Information
            </th>
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
        className="foodTableHeadFoot bg-dark-subtle border border-dark border-4"
        style={{
          verticalAlign:"middle", 
          // fontSize:"2vw", 
          // fontWeight:"500"
          }}>
          <tr>
            <th
            className="bg-dark-subtle border-dark border-end border-4"
            >Film</th>
            <th 
            className="tableHeader bg-dark-subtle border-dark border-end border-4"
            // style={{fontWeight:"500"}}
            >Information
            </th>
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
        className=""
        style={{
          fontSize:"1.7vw", 
          // verticalAlign:""
        }}
        >
          {film.map((item, index) => {
            // console.log({item});
            // console.log(item.film);
            // console.log(index);
            return (
              <FilmItem
                film={item}
                filmItem={item.film}
                filmPlot={item.description}
                filmWatched = {item.watched}
                filmOpinion = {item.beckyopinion}
                filmRecommend = {item.recommendedby}
                filmGenre = {item.genre}
                filmConnected = {item.connected}
                filmProvider = {item.provider}
                index={index}
                key={item.id}
                filmId = {item.id}
                removeFilm={deleteFilm}
                watchedIt={filmWatchedIt}
                changeOpinion={handleOpinion}
                // becky={userBecky}
              />
            );
          })}
        </tbody>
      
      </Table>
    </Container>
    )
}

export default FilmTable