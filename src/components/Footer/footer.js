import React from "react"

import "./footer.css"

//
import Container from "react-bootstrap/Container"
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

//
function Footer(){
    return(
        <div
        className=""
        style={{
            // border:"solid black 2px"
        }}
        >
            <Navbar 
                className="m-0"
                >
                    
                    <Container
                    fluid
                    className="bg-secondary-subtle px-1 py-0 mx-1  
                    border border-dark border-3 mt-0
                    "
                    style={{
                        // fontSize:"3vw"
                    }}
                    >
                        <Navbar.Brand 
                        className="py-1 m-0"
                        // href="/login" 
                        >

                        <Image 
                            // id="footerImage2"
                            className="footerImagePortfolio"
                            style={{
                                // width:"5vw"
                            }}
                            src="./Capture1.PNG" 
                            roundedCircle
                            />
                            {/* Login */}

                            
                        </Navbar.Brand>


                        <Nav.Item
                className=""
                style={{
                }}
                >
                    <Nav.Link 
                    // href = "/"
                    id = "footerTitle"
                    className="text-dark p-0"
                    style={{
                        // fontSize:"5vw"
                    }}
                    >
                        Becky Recommends
                        </Nav.Link>
                </Nav.Item>
                        {/* Becky Recommends */}
                        <Navbar.Brand 
                        href="/login" 
                        className="p-0 m-0"
                        >
                            <Image
                            // id="footerImage1"
                            className="footerImageLogin"
                            style={{
                                // width:"5vw"
                            }}
                            src="./Capture.PNG"                        roundedCircle
                            />
                            
                                
                            {/* Portfolio */}

                        </Navbar.Brand>
                    </Container>
                </Navbar>
        </div>
    )
}

export default Footer