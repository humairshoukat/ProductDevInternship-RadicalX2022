import React from "react"

export default function TempDisplay(props, func){
    return(
        <section className = "box" key = {props.key}>
            <h4>{props.name}</h4>
            <h5 className = "close-icon" 
            onClick = {func}
            id = {props.name}>x</h5>
        </section>
    )
}