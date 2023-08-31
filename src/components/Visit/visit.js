import React, {useState, useEffect} from "react"
import "./visit.css"

//components
import VisitTable from "./Table/table";
import VisitForm from "./Form/form";
import VisitLike from "./VisitHelper/like";
import VisitHelper from "./VisitHelper/visitHelper";
import VisitDislike from "./VisitHelper/dislike";

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


function Visit({Becky}){
    const [visit, setNewVisit] = useState([])
    const [form, setForm] = useState({})
    // console.log({visit})

////add from form
function handleChange(event){
    setForm({...form, [event.target.id]:event.target.value})
}


// create
async function handleSubmit(event){
    console.log({form})
    console.log("submit button pressed");
    event.preventDefault()
    await addDoc(collection(db, "Visit"),
{
    beckyopinion: "🤷‍♀️",
    beckythoughts:"Not sure...",
    what: form.formWhat,
    where: form.formWhere,
    details: form.formVisitDescription,
    recommendedby: form.formVisitRecommend,
    stayed: false,
});
    window.location.reload()
}

// read
useEffect(()=>{
    const q = query(collection(db, "Visit"))
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{ 
        let visitArray = []
        querySnapshot.forEach((doc)=>{
            visitArray.push({...doc.data(),
            id: doc.id})
        })
        setNewVisit(visitArray)
    })
    return () => unsubscribe()
}, [])

//update
//tried
const StayedThere = async (visit)=>{
    await updateDoc(doc(db, "Visit", visit.id), {
        stayed: !visit.stayed
    })
}

//opinion
const changeOpinion = async (read, event)=>{
    let beckyOpinion = event.target.name;
    await updateDoc(doc(db, "Visit", read.id),{
        beckyopinion:beckyOpinion
    })
}

/// changing what I thought
const beckyThoughtsChange = async (food, event)=>{
  let beckyThoughts = event.target.value
  // console.log(beckyThoughts)
  await updateDoc(doc(db, "Visit", visit.id), {
    beckythoughts: beckyThoughts
  })
}

//delete
const deleteVisit = async(id)=>{
    await deleteDoc(doc(db,"Visit", id))
}

return(
      <Container 
      fluid
      className="visitPage pt-3"
      style={{

      }}
      >

      <Container 
        id = "visitPage1"
        className=" bg-primary-subtle rounded text-center p-0" 
        style={{
    
        }}
        >
          
          🗺️ &nbsp; 
          ✈️ &nbsp; 
          Visit PAGE 
          &nbsp; 🧳 
          &nbsp; 🌍

      </Container>

      <Container 
      // fluid
      className="d-flex justify-content-evenly py-2"
      >
          <VisitLike/>
          <VisitHelper/>
          <VisitDislike/> 

      </Container>
  
      <Accordion 
      id="visitAccordion"
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
            fluid 
            className="visitPageAccordion text-center"
            style={{
              
            }}
            >
              Visit Form
              </Container>
           </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3">
            
              <VisitForm
              visit={visit}
              handleChange={handleChange}
              submitForm={handleSubmit}
            />
            
          </Accordion.Body>
        </Accordion.Item>
        
        <br/>
        <Accordion.Item 
        eventKey="0" 
        className="border border-dark border-3 rounded"
        style={{
         
        }}
        >
          <Accordion.Header 
          >
            <Container 
            fluid 
            className="visitPageAccordion text-center"
            style={{
              
            }}
            >
              Visit Table
            </Container>
            </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3"
          >
              <VisitTable

              userBecky={Becky}
              visit={visit}
              stayedThere={StayedThere}
              deleteVisit={deleteVisit}
              handleOpinion={changeOpinion}
              thoughtsBecky={beckyThoughtsChange}
            />

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br/>
      </Container>
)
}

export default Visit
