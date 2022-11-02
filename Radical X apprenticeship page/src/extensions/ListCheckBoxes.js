import React from "react"

export default function CheckboxGenerator(props){
    return (
        Object.entries(props.obj).map( (ele, index) => {
            return (
            <section key = {index} hidden = {props.hidden}>
                <input 
                type = "checkbox" 
                id = {ele[0]}
                name = {ele[0]} 
                onChange = {props.handleChange}
                checked = {ele[1]}/>
                <label htmlFor = {ele[0]}>{ele[0]}</label>
            </section>
                )
        }
        )
    )
}