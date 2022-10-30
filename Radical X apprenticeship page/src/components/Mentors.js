import React, { useEffect } from "react"
import Overlay from "../extensions/Overlay"
import InnerForm from "../extensions/MentorExtension"
import BaseImg from "../images/Person.jpg"
import Display from "../extensions/BorderDisplay"

export default function AddMentor(props){
    const [overlay, setOverlay] = React.useState(true) //checking if overlay exists or not

    const [mentorList, setMentorList] = React.useState([])

    const [mentor, setMentor] = React.useState({
        face: BaseImg,
        name: "",
        email: "",
        LinkedIn: "",
        key: mentorList.length
    })

    useEffect( () => {
        props.func( prevVal => ({
            ...prevVal,
            mentors: mentorList
        }))
    }, [mentorList.length])

    function handleClick(){
        setOverlay(!overlay);
    }

    function removeMentor(event){
        let key = event.target.id
        console.log(typeof key)
        //console.log("out: ", key, mentorList.filter( ppl => ppl.key != key))
        setMentorList(mentorList.filter( ppl => ppl.key != key)
            .map( (ppl, index) => {
            ppl.key = index
            return ppl
            }                                
        ))
    }

    return (
        <section className = "members">
            <h3>Team Admins</h3>
            <button className = "add-members" onClick = {handleClick}>{/*icon*/} Add Team Admins</button>
                <Overlay 
                innerForm = {InnerForm} 
                hidden = {overlay} 
                state = {setOverlay}  
                team = {mentorList}
                setTeam = {setMentorList}
                data = {mentor}
                setData = {setMentor}
                />

            {mentorList.map( (ppl, index) => {
                ppl.key = index
                return ppl
            })
            .map(ppl => Display(ppl, removeMentor)
                )}
        </section>
    )
}