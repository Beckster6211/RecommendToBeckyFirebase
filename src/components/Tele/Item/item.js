import React from "react"
import "./item.css"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Stack from 'react-bootstrap/Stack'

function TeleItem({
    tele,
    teleItem
}){

    // console.log({tele})

    return (
        <tr
        className="border border-dark border-4"
        >
            <td
            className="p-2 align-middle border border-dark border-4 bg-info"
            style={{
              
            }}
            >
                <p 
            // id="foodTableItem1"
            className="filmTableItemFilm bg-light border border-dark border-2 rounded p-1 mb-2"
            style={{
              // fontSize:"1.6vw",

            }}
            >
              {teleItem}
            </p>
            </td>
        </tr>
    )
}

export default TeleItem