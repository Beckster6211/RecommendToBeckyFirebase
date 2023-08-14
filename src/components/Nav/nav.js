import React from "react"

import "./nav.css"

//
import {Link} from "react-router-dom"
/* COULD DELETE LINK IMPORTED */

//
import Nav from 'react-bootstrap/Nav';

function Navigation(){
    return (
        <div 
        className=""
        >
            <Nav 
            // id="navLinks"
            className="navLinks border border-dark border-3 rounded bg-light m-1"
            style={{
                // fontSize:"3.5vw"
            }}
            justify 
            variant="tabs" 
            defaultActiveKey={"/home"}
            >
                <Nav.Item
                className="border-end border-dark border-2 bg-warning"
                >
                    <Nav.Link 
                    
                    href="/food"
                    className="text-dark p-0"
                    style={{
                        // fontSize:"2.5vw"
                    }}
                    >
                        😋Enjoy 
                        {/* 😋 */}
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="border-end border-dark border-2 bg-info"
                >
                    <Nav.Link
                    href="/film"
                    className="text-dark p-0"
                    style={{
                        // fontSize:"2.5vw"
                    }}
                    >
                        🎬Watch 
                        {/* 🎬 */}
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="border-end border-dark border-2 bg-danger"
                >
                    <Nav.Link
                    className="text-dark p-0"
                    style={{
                        // fontSize:"2.5vw"
                    }}
                    >
                        📺Binge 
                        {/* 📺 */}
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="border-end border-dark border-2 bg-success"
                >
                    <Nav.Link
                    className="text-dark p-0"
                    style={{
                        // fontSize:"2.5vw"
                    }}
                    >
                        📚Read 
                        {/* 📚 */}
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="border-end border-dark border-2 bg-primary"
                >
                    <Nav.Link
                    className="text-dark p-0"
                    style={{
                        // fontSize:"2.5vw"
                    }}
                    >
                       🗺️Visit 
                       {/* 🗺️ */}
                       </Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="bg-secondary"
                >
                    <Nav.Link
                    className="text-dark p-0"
                    style={{
                        // fontSize:"2.5vw"
                    }}
                    >
                        💡Try 
                        {/* 💡 */}
                        </Nav.Link>
                </Nav.Item>
            </Nav>
      </div>
    )
}

export default Navigation