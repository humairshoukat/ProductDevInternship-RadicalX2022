import React from "react"
import TempDisplay from "./BorderDisplay"

export default function Overlay(props){
    const [com, setCom] = [props.com, props.setCom]
    const [req, setReq] = [props.req, props.setReq]
    const [loc, setLoc] = [props.loc, props.setLoc]
    
    const [memberData, setMemberData] = React.useState(//Single Role's Data
        props.data
    )

    function handleSubmit(event){
        event.preventDefault()
        props.state(!props.hidden)
       
        props.setTeam(prevVal => { //adding member to the team database
            props.team.push(memberData)
            return props.team}
        //altering overlay from the inner function as we need
        // to close overlayed form upon submit or cancellation
        )
    }

    return(
        <form hidden = {props.hidden} 
        className = "overlay" 
        onSubmit = {handleSubmit}>
            <props.innerForm 
            handleData = {setMemberData} 
            data = {memberData}
            com = {com}
            setCom = {setCom}
            req = {req}
            setReq = {setReq}
            loc = {loc}
            setLoc = {setLoc}
            />
            <button type = "submit">Click Here</button>
        </form>
    )
}