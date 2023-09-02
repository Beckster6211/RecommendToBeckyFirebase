import React, {useState, useEffect} from "react"
import "./film.css"

//components
import FilmTable from "./Table/table";
import FilmForm from "./Form/form";
import FilmLike from "./FilmHelper/like";
import FilmHelper from "./FilmHelper/helper";
import FilmDislike from "./FilmHelper/dislike";

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


function Film({Becky}){
    const [film, setNewFilm] = useState([])
    const [form, setForm] = useState({})
    // console.log({film})

////add from form
function handleChange(event){
    setForm({...form, [event.target.id]:event.target.value})
}


// create
async function handleSubmit(event){
    console.log({form})
    console.log("submit button pressed");
    event.preventDefault()
    await addDoc(collection(db, "Film"),
{
    beckyopinion: "🤷‍♀️",
    beckythoughts: "Not sure...",
    film: form.formFilm,
    description: form.formFilmDescription,
    // provider: form.formFilmProvider,
    connected: form.formFilmConnected,
    // genre: form.formFilmGenre,
    recommendedby: form.formFilmRecommend,
    watched: false,
});
window.location.reload()
}

// read
useEffect(()=>{
    const q = query(collection(db, "Film"))
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{ 
        let filmArray = []
        querySnapshot.forEach((doc)=>{
            filmArray.push({...doc.data(),
            id: doc.id})
        })
        setNewFilm(filmArray)
    })
    return () => unsubscribe()
}, [])

//update
//tried
const haveWatched = async (film)=>{
    await updateDoc(doc(db, "Film", film.id), {
        watched: !film.watched
    })
}

//opinion
const changeOpinion = async (film, event)=>{
    let beckyOpinion = event.target.name;
    await updateDoc(doc(db, "Film", film.id),{
        beckyopinion:beckyOpinion
    })
}

const beckyThoughtsChange = async (film, event)  => {
  let beckyThoughts = event.target.value 
  // console.log(beckyThoughts)
  await updateDoc(doc(db,"Film", film.id),{
    beckythoughts: beckyThoughts
  })
}

//delete
const deleteFilm = async(id)=>{
    await deleteDoc(doc(db,"Film", id))
}

return(
      <Container 
      fluid
      className="filmPage pt-3"
      style={{

      }}
      >
      {/* <br/> */}
      <Container 
      id = "filmPage1"
      className=" bg-info-subtle rounded text-center p-0" 
      style={{
          // fontSize:"3vw", 
          // fontWeight:"900"
        }}
        >
           🎞️ &nbsp; 🥤 &nbsp; FILM PAGE &nbsp; 🍿 &nbsp; 📽️
      </Container>
      {/* <br/> */}
      <Container 
      // fluid
      className="d-flex justify-content-evenly py-2"
      >
          <FilmLike/>
          <FilmHelper/>
          <FilmDislike/> 
      </Container>
      {/* <br/> */}
      <Accordion 
      id="filmAccordion"
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
            className="filmPageAccordion text-center"
            style={{
              // fontSize:"2.5vw", 
              // fontWeight:"700"
            }}
            >
              Film Form
              </Container>
           </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3">
            {/* <div> */}
                {/* film form */}
              <FilmForm
              film={film}
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
            className="filmPageAccordion text-center"
            style={{
              // fontSize:"2.5vw", 
              // fontWeight:"700"
            }}
            >
              Film Table
            </Container>
            </Accordion.Header>
          <Accordion.Body 
          className="px-2 py-3"
          >
            {/* <div>
                Film Table */}
              <FilmTable
              userBecky={Becky}
              film={film}
              filmWatchedIt={haveWatched}
              deleteFilm={deleteFilm}
              handleOpinion={changeOpinion}
              thoughtsBecky = 
              {beckyThoughtsChange}
              
            />
            {/* </div> */}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br/>
      </Container>
)
}

export default Film