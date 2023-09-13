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
            <br/>
            <ul 
            className="text-start"
            >
              <li>Explain idea behind site</li>
              <li>How to use site (maybe pictures)</li>
              <li>Perhaps video (tour of site)</li>
              <li>todo like, dislike, helper for each page
              <ul>
                <small>
                <small>
                <small>
                <s><li>Food</li></s>
                <s><li>Film</li></s>
                <s><li>Tele</li></s>
                <s><li>Read</li></s>
                <s><li>Visit</li></s>
                <s><li>Try</li></s>
                </small>
                </small>
                </small>
              </ul>
              <small><small>Need to read throught and check them all</small></small>
              </li>
              <li><s>change icon in tab</s></li>
              <li><s>change login picture/icon (to avatar)</s></li>
              <li>change portfolio picture/icon (todo todo portfolio change)</li>
              <li>remove console logs</li>
              <li>tidy code </li>
              <li>look at id and classnames for easier styling and media queries</li>
              <li><s>rest of pages</s></li>
              <li><s>fix login</s></li>
              <li>todo becky recommends site</li>
              <li>correct welcome message????</li>
            </ul>
            </Container>
        </div>
    )
}

export default Home