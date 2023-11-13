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
        <Container 
        fluid
        className = "px-2" 
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
            className="homePage border border-dark border-3 bg-secondary-subtle mt-1 mb-2"
            style={{
              // minHeight:"75vh"
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
              <li>todo like, dislike, helper for each page</li>

              <ul>
                <small>
                <small>
                  

                  Food
                  <small> 
                <li><s>Helpers</s> & <s>checked</s> & <s>styled</s> & <s>media queries</s> </li>
                </small>
                Film
                <small> 
                <li><s>Helpers</s> & <s>checked</s> & <s>styled</s> & <s>media queries</s>  </li>
                </small>
                Tele
                <small> 
                <li><s>Helpers</s> & <s>checked</s> & <s>styled</s> & <s>media queries</s> </li>
                </small>
                Read
                <small> 
                <li><s>Helpers</s> & <s>checked</s> & <s>styled</s> & <s>media queries</s> </li>
                </small>
                Visit
                <small> 
                <li><s>Helpers</s> & <s>checked</s> & <s>styled</s> & <s>media queries</s> </li>
                </small>
                Try
                <small> 
                <li><s>Helpers</s> & <s>checked</s> & <s>styled</s> & <s>media queries</s> </li>
                </small>

                header
                  <small>
                    <li><s>checked</s> & <s>styled</s> & media queries</li>
                  </small>

                  footer
                  <small>
                    <li>checked & styled & media queries</li>
                  </small>

                  nav 
                  <small>
                    <li><s>checked</s> & <s>styled</s> & media queries</li>
                  </small>

                  login 
                  <small>
                    <li>
                      <s>checked</s> & <s>styled</s> & <s>media queries</s>
                    </li>
                  </small>
                  
                  alerts 
                  <small>
                    <li>
                      Becky <s>checked</s> & <s>styled</s> & <s>media queries</s>
                    </li>
                    <li>
                      Not Becky <s>checked</s> & <s>styled</s> & <s>media queries</s>
                    </li>
                  </small>
                </small>
                </small>
              </ul>
              
              <li><s>change icon in tab</s></li>
              <li><s>change login picture/icon (to avatar)</s></li>
              <li>change portfolio picture/icon (todo todo portfolio change)</li>
              <li>remove console logs</li>
              <li>tidy code </li>
              <li>look at id and classnames for easier styling and media queries</li>
              <li><s>rest of pages</s></li>
              <li><s>fix login</s></li>
              <li>todo becky recommends site</li>
              <li>correct welcome message (repeating)????</li>
              <li>Maybe Becky notification for when something added (nodemailer with email)???</li>
              <li>
                user notification when tring to add something to a table/page when a form input empty
              </li>
            </ul>
            </Container>
        </Container>
    )
}

export default Home