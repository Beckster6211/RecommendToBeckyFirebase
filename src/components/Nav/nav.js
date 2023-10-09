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
                    className="text-white p-0"
                    style={{
                        // fontSize:"2.5vw"
                    }}
                    >
                        😋
                        <br/>
                        Enjoy
                        {/* 😋 */}
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="border-end border-dark border-2 bg-info"
                >
                    <Nav.Link
                    href="/film"
                    className="text-white p-0"
                    style={{
                        // fontSize:"2.5vw"
                    }}
                    >
                        🎬
                        <br/>
                        Watch
                        {/* 🎬 */}
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="border-end border-dark border-2 bg-danger"
                >
                    <Nav.Link
                    href="/tele"
                    className="text-white p-0"
                    style={{
                        // fontSize:"2.5vw"
                    }}
                    >
                        📺
                        <br/>
                        Binge
                        {/* 📺 */}
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="border-end border-dark border-2 bg-success"
                >
                    <Nav.Link
                    href="/read"
                    className="text-white p-0"
                    style={{
                        // fontSize:"2.5vw"
                    }}
                    >
                        📚
                        <br/>
                        Read
                        {/* 📚 */}
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="border-end border-dark border-2 bg-primary"
                >
                    <Nav.Link
                    href="/visit"
                    className="text-white p-0"
                    style={{
                        // fontSize:"2.5vw"
                    }}
                    >
                        🗺️
                        <br/>
                        Visit
                       {/* 🗺️ */}
                       </Nav.Link>
                </Nav.Item>
                <Nav.Item
                className="bg-secondary"
                >
                    <Nav.Link
                    href="/try"
                    className="text-white p-0"
                    style={{
                        // fontSize:"2.5vw"
                    }}
                    >
                        💡
                        <br/>
                        Try
                        {/* 💡 */}
                        </Nav.Link>
                </Nav.Item>
            </Nav>
      </div>
      
    )
}

export default Navigation