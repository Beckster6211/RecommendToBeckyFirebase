import React from "react";
import "./table.css";

//
import Item from "../Item/item";

//
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";

//
function FoodTable({userBecky, food, foodITried, handleOpinion,thoughtsBecky, deleteFood }) {
  // console.log(food);
  return (
    <Container 
    fluid 
    className="foodTableComponent p-0"
    style={{
      // height:"55vw"
    }}
    >
      
      <Table 
      striped
      bordered 
      hover 
      className="foodTable border border-dark border-4 table-fixed"
      style={{
        
      }}
      >
      <thead 
      // id="foodTable1"
      className="foodTableHead bg-dark-subtle border border-dark border-4 "
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
            >Food
            </th>
            <th 
            className="tableHeader bg-dark-subtle border-dark border-end border-4"
            // style={{fontWeight:"500"}}
            >Becky Opinion
            </th>
            <th 
            className="tableHeader bg-dark-subtle border-dark border-end border-4"
            // style={{fontWeight:"500"}}
            >Who recommends
            </th>
            <th 
            className="tableHeader bg-dark-subtle"
            // style={{fontWeight:"500"}}
            >Delete
            </th>
          </tr>
        </thead>


        {/* 
        //////////
    with sticky table header not sure if footer needed */}
        <tfoot
        className="foodTableFoot bg-dark-subtle border border-dark border-4"
        style={{
          // verticalAlign:"middle", 
          // position: "sticky",
          // bottom:"0"
          }}>
          <tr>
            <th
            className="bg-dark-subtle border-dark border-end border-4"
            >Food
            </th>
            <th
            className="bg-dark-subtle border-dark border-end border-4"
            >Becky Opinion
            </th>
            <th
            className="bg-dark-subtle border-dark border-end border-4"
            >Who recommends
            </th>
            <th
            className="bg-dark-subtle"
            >Delete
            </th>
          </tr>
        </tfoot> 


        <tbody 
        className="foodTableBody"
        style={{
          fontSize:"1.7vw", 
          // verticalAlign:""
        }}
        >
          {food.map((item, index) => {
            // console.log(item);
            // console.log(item.tried);
            // console.log(index);
            return (
              <Item
                food={item}
                foodItem={item.fooditem}
                foodRecipe={item.recipe}
                foodOpinion={item.beckyopinion}
                foodThought={item.beckythoughts}
                foodId={item.id}
                foodTried={item.tried}
                foodRecommend={item.recommendedby}
                index={index}
                key={item.id}
                removeFood={deleteFood}
                triedIt={foodITried}
                changeOpinion={handleOpinion}
                becky={userBecky}
                beckyThoughts={thoughtsBecky}
              />
            );
          })}
        </tbody>
      
      </Table>
    </Container>
  );
}

export default FoodTable;