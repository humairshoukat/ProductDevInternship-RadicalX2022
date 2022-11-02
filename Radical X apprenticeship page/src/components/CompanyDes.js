import React from "react"

export default function TextAreas(props){
    return (
        <section className = {props.name}>
            <h3>{props.className}</h3> 
                <textarea 
                className = {props.className}
                name = {props.name}
                value = {props.value}
                onChange = {(event) => props.setData(
                    prevVal => ({
                        ...prevVal,
                        [props.name]: event.target.value
                    })
                )}></textarea>
        </section>
    )
}