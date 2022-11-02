import React from "react"
import ImagePrompt from "../components/uploadImg"
import {BsFillPersonFill, BsLinkedin} from "react-icons/bs"
import {MdEmail} from "react-icons/md"


export default function AddMentor(props){
    //console.log("Props data: ", props.handleData)
    let setMentor = props.handleData
    let mentor = props.data

    function update(event){
        const {name, value} = event.target
        setMentor ( prevVal => ({
            ...prevVal,
            [name]: value
        }))
    }

    return (
        <section className = "mentor"> 

        <section className = "face">
            <ImagePrompt value = {mentor.face} name = "face" onChange = {setMentor}/>
            {/*onChange = {imgHandler}/> onChange extra */}
        </section>  

        
        
            <section className = "mentor-name">
                <label htmlFor = "mentor-name"> <BsFillPersonFill /></label>
                <input id = "mentor-name" onChange= {update}  
                placeholder = "Full Name" minLength= {3} 
                pattern = "\w+ \w+" value = {mentor.name}
                name = "name" required/>
            </section>

            <section className = "email">
                <label htmlFor = "email"> <MdEmail /></label>
                <input type="email" id="email" name = "email"
                pattern=".+@.+\.com" onChange= {update}
                placeholder = "Email" value = {mentor.email} required/>    
            </section>

            <section className = "LinkedIn">
                <label htmlFor = "LinkedIn"> <BsLinkedin /></label>
                <input type="url" id="url" name = "LinkedIn"
                pattern="https://www.linkedin\.com/in/.+/" 
                placeholder = "LinkedIn page (optional)"
                onChange= {update} value = {mentor.LinkedIn}/>    
            </section>

        </section>

    )
}