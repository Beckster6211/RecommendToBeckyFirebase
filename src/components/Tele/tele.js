import React, {useState, useEffect} from "react"
import "./tele.css"

//components
import TeleTable from "./Table/table";
import TeleForm from "./Form/form";
import TeleLike from "./TeleHelper/like";
import TeleHelper from "./TeleHelper/helper";
import TeleDislike from "./TeleHelper/dislike";

// bootstrap
import Accordion from 'react-bootstrap/Accordion';
import Container from "react-bootstrap/Container"

// firebase
import {db} from "../../firebase"

//firebase
import {
    query,
    collection,
    onSnapshot,
    doc,
    addDoc,
    updateDoc,
    deleteDoc
} from "firebase/firestore"


function Tele({Becky}){
    const [tele, setNewTele] = useState([])
    const [form, setForm] = useState({})
    console.log({tele})

////add from form
function handleChange(event){
    setForm({...form, [event.target.id]:event.target.value})
}


// create
// async function handleSubmit(event){
//     console.log({form})
//     console.log("submit button pressed");
// event.preventDefault()
// await addDoc(collection(db, "Tele"),
// {
//     beckyopinion: "🤷‍♀️",
//     film: form.formFilm,
//     description: form.formFilmDescription,
//     // provider: form.formFilmProvider,
//     connected: form.formFilmConnected,
//     // genre: form.formFilmGenre,
//     recommendedby: form.formFilmRecommend,
//     watched: false,
// });
// window.location.reload()
// }

// read
useEffect(()=>{
    const q = query(collection(db, "Tele"))
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{ 
        let teleArray = []
        querySnapshot.forEach((doc)=>{
            teleArray.push({...doc.data(),
            id: doc.id})
        })
        setNewTele(teleArray)
    })
    return () => unsubscribe()
}, [])

//update
//tried
const haveWatched = async (tele)=>{
    await updateDoc(doc(db, "Tele", tele.id), {
        watched: !tele.watched
    })
}

//opinion
const changeOpinion = async (tele, event)=>{
    let beckyOpinion = event.target.name;
    await updateDoc(doc(db, "Tele", tele.id),{
        beckyopinion:beckyOpinion
    })
}

//delete
const deleteTele = async(id)=>{
    await deleteDoc(doc(db,"Tele", id))
}

return(
        <Container 
      fluid
      className="telePage pt-3"
      style={{

      }}
      >
      {/* <br/> */}
      <Container 
      id = "telePage1"
        className=" bg-warning-subtle rounded text-center p-0" 
        style={{
          // fontSize:"3vw", 
          // fontWeight:"900"
        }}
        >
           🎞️ &nbsp; 🥤 &nbsp; Tele PAGE &nbsp; 🍿 &nbsp; 📽️
      </Container>
      {/* <br/> */}
      <Container 
      // fluid
      className="d-flex justify-content-evenly py-2"
      >
        
          
          {/* <FilmLike/>
          <FilmHelper/>
          <FilmDislike/>  */}
         
        
      </Container>
      
      {/* <br/> */}
      <Accordion 
      id="teleAccordion"
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
            className="telePageAccordion text-center"
            style={{
              // fontSize:"2.5vw", 
              // fontWeight:"700"
            }}
            >
              Tele Form
              </Container>
           </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3">
            {/* <div> */}
                {/* film form */}
              {/* <TeleForm
              tele={tele}
              handleChange={handleChange}
            submitForm={handleSubmit}
            /> */}
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
          <Accordion.Header 
        //   className="bg-info"
          >
            <Container 
            // id="foodPage3"
            fluid 
            className="telePageAccordion text-center"
            style={{
              // fontSize:"2.5vw", 
              // fontWeight:"700"
            }}
            >
              Tele Table
            </Container>
            </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3"
          >
            {/* <div>
                Film Table */}
              <TeleTable
              userBecky={Becky}
              tele={tele}
            //   filmWatchedIt={haveWatched}
            //   deleteFilm={deleteFilm}
            //   handleOpinion={changeOpinion}
              
            />
            {/* </div> */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br/>
      </Container>
)
}

export default Tele