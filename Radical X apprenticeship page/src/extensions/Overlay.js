import React from "react"

export default function Overlay(props){
    const [com, setCom] = [props.com, props.setCom]
    const [req, setReq] = [props.req, props.setReq]
    const [loc, setLoc] = [props.loc, props.setLoc]
    
    //console.log(props.index)
    function handleSubmit(event){
        event.preventDefault()
        props.state(!props.hidden)
       
        props.setData( prevVal => ({
            ...prevVal,
            key: props.team.length
        }))

        console.log(props.team)
        props.setTeam(prevVal => { //adding member to the team database
            props.team.push(props.data)
            return props.team}
        //altering overlay from the inner function as we need
        // to close overlayed form upon submit or cancellation
        )
    }

    return(
            <form hidden = {props.hidden} 
            className = "overlay" 
            onSubmit = {handleSubmit}>
                <section className = "inner-overlay">
                <header className = "overlay-header">
                    <h3>Add Role</h3>
                    <button type = "submit">Save</button>
                    <button type = "button" className = "close-icon" onClick = {() => props.state(!props.hidden)}>x</button> {/**needs to override and close this overlay */}
                </header>
                    <props.innerForm 
                    handleData = {props.setData} 
                    data = {props.data}
                    com = {com}
                    setCom = {setCom}
                    req = {req}
                    setReq = {setReq}
                    loc = {loc}
                    setLoc = {setLoc}
                    />
                </section>
            </form>
    )
}