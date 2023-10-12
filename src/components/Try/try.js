import React, {useState, useEffect} from "react"
import "./try.css"

//components
import TryTable from "./Table/table";
import TryForm from "./Form/form";
import TryLike from "./TryHelper/like";
import TryHelper from "./TryHelper/tryHelper";
import TryDislike from "./TryHelper/dislike";

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


function Try({Becky}){
    const [tryIt, setNewTryIt] = useState([])
    const [form, setForm] = useState({})
    // console.log({tryIt})

////add from form
function handleChange(event){
    setForm({...form, [event.target.id]:event.target.value})
}


// create
async function handleSubmit(event){
    console.log({form})
    console.log("submit button pressed");
event.preventDefault()
await addDoc(collection(db, "Try"),
{
    beckyopinion: "🤷‍♀️",
    beckythoughts: "Not sure...",
    what: form.formTryWhat,
    location: form.formTryWhere,
    why: form.formTryDescription,
    recommendedby: form.formTryRecommend,
    visited: false,
});
window.location.reload()
}

// read
useEffect(()=>{
    const q = query(collection(db, "Try"))
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{ 
        let tryArray = []
        querySnapshot.forEach((doc)=>{
            tryArray.push({...doc.data(),
            id: doc.id})
        })
        setNewTryIt(tryArray)
    })
    return () => unsubscribe()
}, [])

//update
//tried
const TriedIt = async (tryIt)=>{
    await updateDoc(doc(db, "Try", tryIt.id), {
        visited: !tryIt.visited
    })
}

//opinion
const changeOpinion = async (tryIt, event)=>{
    let beckyOpinion = event.target.name;
    await updateDoc(doc(db, "Try", tryIt.id),{
        beckyopinion:beckyOpinion
    })
}

 /// changing what I thought
 const beckyThoughtsChange = async (tryIt, event)=>{
  let beckyThoughts = event.target.value
  // console.log(beckyThoughts)
  await updateDoc(doc(db, "Try", tryIt.id), {
    beckythoughts: beckyThoughts
  })
}

//delete
const deleteTry = async(id)=>{
    await deleteDoc(doc(db,"Try", id))
}

return(
        <Container 
      fluid
      className="tryPage pt-3"
      style={{

      }}
      >
      {/* <br/> */}
      <Container 
      id = "tryPage1"
        className=" tryPage1 bg-secondary-subtle rounded text-center p-1 border border-dark border-3" 
        style={{
          // fontSize:"3vw", 
          // fontWeight:"900"
        }}
        >

          🧗‍♀️&nbsp;🔫&nbsp;TRY PAGE&nbsp;🛹&nbsp;🏄‍♀️

      </Container>

      <Container 
      // fluid
      className="d-flex justify-content-evenly py-2"
      >

          <TryLike/>
          <TryHelper/>
          <TryDislike/>

      </Container>
      
      <Accordion 
      id="tryAccordion"
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
            className="tryPageAccordion text-center"
            style={{
              // fontSize:"2.5vw", 
              // fontWeight:"700"
            }}
            >
              Try Form
              </Container>
           </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3">
          
              <TryForm
              tryIt={tryIt}
              handleChange={handleChange}
            submitForm={handleSubmit}
            />
          
          </Accordion.Body>
        </Accordion.Item>
       
        <br/>
        <Accordion.Item 
        eventKey="0" 
        className="border border-dark border-3 rounded"
        // style={{height:"70vw"}}
        >
          <Accordion.Header 
          >
            <Container 
            fluid 
            className="tryPageAccordion text-center"
            style={{
              // fontSize:"2.5vw", 
              // fontWeight:"700"
            }}
            >
              Try Table
            </Container>
            </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3"
          >

              <TryTable
              userBecky={Becky}
              tryIt={tryIt}
              triedIt={TriedIt}
              deleteTry={deleteTry}
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

export default Try
