import React from "react"

import {Link} from "react-router-dom"
/* COULD DELETE LINK IMPORTED */

import "./header.css"

//
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

//
function Header(){
    return(
        <div 
        className=""
        style={{
            
        }}
        >
                <Navbar 
                className="m-0"
                >
                    
                    <Container
                    fluid
                    className="bg-secondary-subtle py-2 mx-1  
                    border border-dark border-3
                    "
                    style={{
                        // fontSize:"3vw"
                    }}
                    >
                        <Navbar.Brand 
                        className="p-0 m-0"
                        // href="/login" 
                        >
                            <Image 
                            // id="headerImage1"
                            className="headerImagePortfolio"
                            style={{
                                // width:"8vw"
                            }}
                            src="https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?cs=srgb&dl=pexels-ann-h-14936128.jpg&fm=jpg" 
                            roundedCircle
                            />
                                
                            {/* 
                            May do portfolio site link
                            Portfolio 
                            */}
                        </Navbar.Brand>
                        <Nav.Item
                className=""
                style={{
                }}
                >
                    <Nav.Link 
                    href = "/"
                    id = "headerTitle"
                    className="text-dark p-0"
                    style={{
                        // fontSize:"5vw"
                    }}
                    >
                        Recommend To Becky
                        </Nav.Link>
                </Nav.Item>
                        {/* Recommend To Becky */}
                        <Navbar.Brand 
                        href="/login" 
                        className="p-0 py-1 m-0"
                        >
                            <Image
                            // id="headerImage2"
                            className="headerImageLogin"
                            style={{
                                // width:"7vw"
                            }}
                            src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
                            roundedCircle
                            />

                            {/* Login */}
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            {/* </Container> */}
        </div>
    )

}

export default Header