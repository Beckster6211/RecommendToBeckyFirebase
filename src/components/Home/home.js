import React, {useState} from "react"
import "./home.css"

//
import {Link} from "react-router-dom"
/* COULD DELETE LINK IMPORTED */

//
import BeckyAlert from "../Alerts/beckyAlert"
import NotBeckyAlert from "../Alerts/notBeckyAlert"

// import { Button } from "react-bootstrap" // this is better if doing a lot of components
// import Button from 'react-bootstrap/Button' // better to do like this as it doesn't import the whole library with the component

//
import Container from 'react-bootstrap/Container';

// import styles from "./home.css";

//
function Home({Becky}){

  console.log({Becky})


    return (
        <div 
        className = "homePage border border-dark border-3 mx-1 my-2 bg-secondary-subtle" 
        style={{

          }}>   

          {
            Becky ?
            <BeckyAlert/>
            : 
            <NotBeckyAlert/>
          } 
            <Container
            fluid
            className=""
            style={{
              minHeight:"75vh"
            }}
            
            >
            <h2>Home Page</h2>
            <h4>ToDo...</h4>
            <p>Explain idea behind site </p>
            <p>How to use site (maybe pictures???)</p>
            <p>Perhaps a video (tour of site)???</p>
            <p>Change login picture/icon</p>
            <p>Change portfolio picture/icon. Do link to portfolio (todo todo change portfolio)</p>
            <p>Remove console.logs</p>
            <p>Tidy code (alter id and classname names for easier styling with media queries)</p>
            <p>Rest of pages</p>
            <p>fix login</p>
            </Container>
        </div>
    )
}

export default Home