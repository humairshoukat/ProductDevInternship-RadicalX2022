import React from "react"
import {BsLinkedin} from "react-icons/bs"

export default function display(props, func){
    const selectedSkills = []

    if (props.reqSkills){
        for (const [key, value] of Object.entries(props.reqSkills)) {
            if (value){
                selectedSkills.push(key)
            }
      }
    } if (props.comSkills){
        for (const [key, value] of Object.entries(props.comSkills)) {
            if (value){
                selectedSkills.push(key)
            }
      }
    }
      
    return(
        <section className = "box" key = {props.key}>
            <img src = {props.face ? props.face : props.icon} width = {30} className = "face"/> {/*may require conditional rendering */}
            <h4 className = "box-name">{props.name ? props.name: props.role}</h4>
            <h5 className = "close-icon" 
            onClick = {func}
            // id = {props.key !== undefined ? props.key : props.name}
            id = {props.key}
            >x</h5>
            <p className = "box-blurb">{props.roleDescription}</p>
            {selectedSkills.map( (ele, index) => (
                <article className = "skill-display" key = {index}>
                    {ele}
                </article>
            ) ) }

            {props.LinkedIn && <BsLinkedin />}

        </section>
    )
}