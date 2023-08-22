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
      {/* <br/> */}
      <Container 
      id = "visitPage1"
        className=" bg-primary-subtle rounded text-center p-0" 
        style={{
          // fontSize:"3vw", 
          // fontWeight:"900"
        }}
        >
          🗺️ &nbsp; ✈️ &nbsp; Visit PAGE &nbsp; 🧳 &nbsp; 🌍
      </Container>
      {/* <br/> */}
      <Container 
      // fluid
      className="d-flex justify-content-evenly py-2"
      >
          <VisitLike/>
          <VisitHelper/>
          <VisitDislike/> 
      </Container>
      
      {/* <br/> */}
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
            // id="foodPage2"
            fluid 
            className="visitPageAccordion text-center"
            style={{
              // fontSize:"2.5vw", 
              // fontWeight:"700"
            }}
            >
              Visit Form
              </Container>
           </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3">
            {/* <div> */}
                {/* film form */}
              <VisitForm
              visit={visit}
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
          <Accordion.Header 
        //   className="bg-info"
          >
            <Container 
            // id="foodPage3"
            fluid 
            className="visitPageAccordion text-center"
            style={{
              // fontSize:"2.5vw", 
              // fontWeight:"700"
            }}
            >
              Visit Table
            </Container>
            </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3"
          >
            {/* <div>
                Film Table */}
              <VisitTable
              userBecky={Becky}
              visit={visit}
              stayedThere={StayedThere}
              deleteVisit={deleteVisit}
              handleOpinion={changeOpinion}
              
            />
            {/* </div> */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br/>
      </Container>
)
}

export default Visit
