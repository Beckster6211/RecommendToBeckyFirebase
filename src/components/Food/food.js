import React, { useState, useEffect } from "react";
import "./food.css";

//components
import FoodTable from "./Table/table";
import FoodForm from "./Form/form";
import FoodLike from "./FoodHelper/like";
import FoodDislike from "./FoodHelper/dislike";
import FoodHelper from "./FoodHelper/helper";

// bootstrap
import Accordion from 'react-bootstrap/Accordion';
import Container from "react-bootstrap/Container"

//firebase
import { db } from "../../firebase";

//firebase
import {
  query,
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

//
function Food({Becky, badNot}) {
  const [food, setNewFood] = useState([]);
  const [form, setForm] = useState({});
  // const [updatePage, setUpdatePage] = useState(false);
  // console.log({ food });

  function handleChange(event) {
    // let inputName = event.target.name;
    // console.log({ inputName });
    // let vl = event.target.value;
    // console.log({ vl });
    // console.log({ form });
    setForm({ ...form, [event.target.id]: event.target.value });
    console.log({ form });
  }

  ////CRUD
  // Create/add to database
  async function handleSubmit(event) {
    // console.log(form);
    // console.log("submit button pressed");
    event.preventDefault();
    // console.log(form.formFooditem);
    await addDoc(collection(db, "Food"), {
      beckyopinion: "🤷‍♀️",
      beckythoughts:"Not sure...",
      fooditem: form.formFoodItem,
      recipe: form.formFoodRecipe,
      recommendedby: form.formFoodRecommend,
      tried: false,
    });
    // refreshes form, empties form inputs
    window.location.reload();
  }

  /// Read/get all
  useEffect(() => {
    const q = query(collection(db, "Food"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let foodArray = [];
      querySnapshot.forEach((doc) => {
        foodArray.push({ ...doc.data(), id: doc.id });
      });
      setNewFood(foodArray);
      //console.log(food);
    });
    return () => unsubscribe();
  }, []);

  /////Update/change
  //update for changing tried from true to false
  // update becky opinion for when tried (disabled those buttons once works as should only be avaliable for me to alter)

  // have tried checkbox
  const haveTried = async (food) => {
    // console.log("checkbox ticked");
    // console.log(food);
    await updateDoc(doc(db, "Food", food.id), {
      tried: !food.tried,
    });
  };


  ///becky opinion
  const changeOpinion = async (food, event) => {
    // console.log("button clicked");
    // console.log(`change opinion ${food.beckyopinion} `);
    // console.log(event.target.name);
    let beckyOpinion = event.target.name;
    await updateDoc(doc(db, "Food", food.id), {
      beckyopinion: beckyOpinion,
    });
    // console.log(`becky opinion changed ${food.beckyopinion}`);
  };

  /// changing what I thought
  const beckyThoughtsChange = async (food, event)=>{
    let beckyThoughts = event.target.value
    // console.log(beckyThoughts)
    await updateDoc(doc(db, "Food", food.id), {
      beckythoughts: beckyThoughts
    })
  }

  //////Delete/delete one
  const deleteFood = async (id) => {
    // console.log({ id });
    await deleteDoc(doc(db, "Food", id));
  };


  return (
    // <div className="foodPage">
      <Container 
      fluid
      className="foodPage pt-3 "
      style={{
      }}
      >
      {/* <br/> */}
      <Container 
      id = "foodPage1"
        className="foodPage1 bg-warning-subtle rounded text-center p-1 border border-dark border-3" 
        style={{
          // fontSize:"3vw", 
          // fontWeight:"900"
        }}
        >
            {/* &nbsp;  */}
            🍽️&nbsp;☕&nbsp;FOOD PAGE&nbsp;🧂&nbsp;🌶️
            {/* &nbsp; */}
            {/* FOOD PAGE
            <br/>
            &nbsp; 🍽️ &nbsp; ☕ &nbsp; 🧂 &nbsp; 🌶️&nbsp; */}

      </Container>
      {/* <br/> */}
      <Container 
      // fluid
      className="d-flex justify-content-evenly py-2"
      >
        
          <FoodLike/>
          <FoodHelper/>
          <FoodDislike/>
        
      </Container>
      
      {/* <br/> */}
      <Accordion 
      id="foodAccordion"
      defaultActiveKey={["0"]} 
      alwaysOpen
      className="p-2 border border-dark border-3 rounded bg-light"
      style={{
      }}
      >
        <Accordion.Item 
        eventKey="1" 
        className="border border-dark border-3 rounded">
          <Accordion.Header 
          className="">
            <Container 
            // id="foodPage2"
            fluid 
            className="foodPageAccordion text-center"
            style={{
              // fontSize:"2.5vw", 
              // fontWeight:"700"
            }}
            >
              Food Form
              </Container>
           </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3">
            {/* <div> */}
              <FoodForm
              food={food}
              warning={badNot}
              handleChange={handleChange}
              submitForm={handleSubmit}
            />
            {/* </div> */}
          </Accordion.Body>
        </Accordion.Item>
        {/* <br/> */}
        <br/>
        <Accordion.Item 
        eventKey="0" 
        className="border border-dark border-3 rounded"
        // style={{height:"70vw"}}
        >
          <Accordion.Header>
            <Container 
            // id="foodPage3"
            fluid 
            className="foodPageAccordion text-center"
            style={{
              // fontSize:"2.5vw", 
              // fontWeight:"700"
            }}
            >
              Food Table
            </Container>
            </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3"
          >
            {/* <div> */}
              <FoodTable
              userBecky={Becky}
              food={food}
              foodITried={haveTried}
              deleteFood={deleteFood}
              handleOpinion={changeOpinion}
              thoughtsBecky={beckyThoughtsChange}
            />
            {/* </div> */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br/>
      </Container>
    // </div>
  );
}

export default Food;