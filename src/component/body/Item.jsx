

import React, { Component } from 'react'


export default function Item(props) {
    return (
       <li className="border d-flex justify-content-between align-item-center p-2 m-2">
           <div className="p-3">{props.txt}</div>
           <button onClick={props.supprimer} className="btn btn-dark p2 h50">Supprimer</button>
       </li>
    )
}
