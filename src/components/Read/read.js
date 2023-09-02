import React, {useState, useEffect} from "react"
import "./read.css"

//components
import ReadTable from "./Table/table";
import ReadForm from "./Form/form";
import ReadLike from "./ReadHelper/like";
import ReadHelper from "./ReadHelper/helper";
import ReadDislike from "./ReadHelper/dislike";

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


function Read({Becky}){
    const [read, setNewRead] = useState([])
    const [form, setForm] = useState({})
    // console.log({read})

////add from form
function handleChange(event){
    setForm({...form, [event.target.id]:event.target.value})
}


// create
async function handleSubmit(event){
    console.log({form})
    console.log("submit button pressed");
event.preventDefault()
await addDoc(collection(db, "Read"),
{
    beckyopinion: "🤷‍♀️",
    beckythoughts: "Not sure...",
    book: form.formBook,
    author: form.formAuthor,
    description: form.formReadDescription,
    numberofbooks: form.formReadSeries,
    connected: form.formReadConnected,
    // genre: form.formReadGenre,
    recommendedby: form.formReadRecommend,
    read: false,
});
window.location.reload()
}

// read
useEffect(()=>{
    const q = query(collection(db, "Read"))
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{ 
        let readArray = []
        querySnapshot.forEach((doc)=>{
            readArray.push({...doc.data(),
            id: doc.id})
        })
        setNewRead(readArray)
    })
    return () => unsubscribe()
}, [])

//update
//tried
const haveReadBook = async (read)=>{
    await updateDoc(doc(db, "Read", read.id), {
        read: !read.read
    })
}

//opinion
const changeOpinion = async (read, event)=>{
    let beckyOpinion = event.target.name;
    await updateDoc(doc(db, "Read", read.id),{
        beckyopinion:beckyOpinion
    })
}

/// changing what I thought
const beckyThoughtsChange = async (read, event)=>{
  let beckyThoughts = event.target.value
  // console.log(beckyThoughts)
  await updateDoc(doc(db, "Read", read.id), {
    beckythoughts: beckyThoughts
  })
}

//delete
const deleteRead = async(id)=>{
    await deleteDoc(doc(db,"Read", id))
}

return(
        <Container 
      fluid
      className="readPage pt-3"
      style={{

      }}
      >
      {/* <br/> */}
      <Container 
      id = "readPage1"
        className=" bg-success-subtle rounded text-center p-0" 
        style={{
          // fontSize:"3vw", 
          // fontWeight:"900"
        }}
        >
          📕 &nbsp; 📖 &nbsp; Read PAGE &nbsp; 📓 &nbsp; 🔖
      </Container>
      {/* <br/> */}
      <Container 
      // fluid
      className="d-flex justify-content-evenly py-2"
      >
        
          
          <ReadLike/>
          <ReadHelper/>
          <ReadDislike/> 
         
        
      </Container>
      
      {/* <br/> */}
      <Accordion 
      id="readAccordion"
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
            className="readPageAccordion text-center"
            style={{
              // fontSize:"2.5vw", 
              // fontWeight:"700"
            }}
            >
              Read Form
              </Container>
           </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3">
            {/* <div> */}
                {/* film form */}
              <ReadForm
              read={read}
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
            className="readPageAccordion text-center"
            style={{
              // fontSize:"2.5vw", 
              // fontWeight:"700"
            }}
            >
              Read Table
            </Container>
            </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3"
          >
            {/* <div>
                Film Table */}
              <ReadTable
              userBecky={Becky}
              read={read}
              readTheBook={haveReadBook}
              deleteRead={deleteRead}
              handleOpinion={changeOpinion}
              thoughtsBecky={beckyThoughtsChange}
              
            />
            {/* </div> */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br/>
      </Container>
)
}

export default Read
