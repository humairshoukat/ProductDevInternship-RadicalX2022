import React from "react"
import CheckboxGenerator from "./ListCheckBoxes"
import EleDisplay from "../extensions/BorderDisplay"


export default function OverlayPrompt(props){

    let setRoleData = props.handleData
    let roleData = props.data

    let req = props.req
    let setReq = props.setReq;
    let com = props.com
    let setCom = props.setCom;
    let loc = props.loc
    let setLoc = props.setLoc;
    
    const [display, setDisplay] = React.useState("")


    //handleChange function handles any click event
    function handleChange(event){
        const {name, value, type, checked} = event.target

        setRoleData( prevVal => {
            if (type === "checkbox"){ 
                if (Object.keys(com).find( ele => ele === name)){
                    setCom(prevVal => ({
                        ...prevVal,
                        [name]: checked
                    })
                )}

                else if (Object.keys(req).find( ele => ele === name)){
                    setReq(prevVal => ({
                        ...prevVal,
                        [name]: checked
                    })
                )}

                else{
                    setLoc(prevVal => ({
                        ...prevVal,
                        [name]: checked
                    })
                )}

                return {...prevVal,
                        reqSkills: req,
                        comSkills: com,
                        locations: loc} 
                }

                else {
                    setDisplay("")
                    return {...prevVal, 
                    [name]: value}
                }
        }
        )
    }

    function DisplayOptions(event){
        setDisplay(event.target.name)
    }

    function handlePointerLeave(){ //collapsing the prompt
        setDisplay("")
    }

    function deleteBox(event){ //basically finds and deletes the specified ID
        //where IDs are given by the EleDisplay function/BorderDisplay component
        if (Object.keys(com).findIndex( key => key === event.target.id) !== -1){ 
            //tries to locate id in com obj
            setCom( prevVal => ({
                ...prevVal,
                [event.target.id]: false
            }))
        }

        else if (Object.keys(req).findIndex( key => key === event.target.id) !== -1){
            //tries to locate id in req obj
            setReq( prevVal => ({
                ...prevVal,
                [event.target.id]: false
            }))
        }

        else{
            //tries to locate id in loc obj
            setLoc( prevVal => ({
                ...prevVal,
                [event.target.id]: false
            }))
        }

    }

    React.useEffect( () =>{
        setRoleData( prevVal => ({
            ...prevVal,
            reqSkills: req,
            comSkills: com,
            locations: loc
        }))
    }, [com, req, loc])

    //rendering
    return(
        <fieldset className = "form">

            <h3>Add Role</h3>
            <label htmlFor = "role"></label>

            <select 
            id = "role"
            value = {roleData.role}
            onChange = {handleChange}
            name = "role" required
            > {/*Make this array based*/}
                <option value = "">--Select Role--</option>
                <option value = "ios">iOS Developer</option>
                <option value = "android">Android Developer</option>
                <option value = "fullstack">Full Stack Developer</option>
                <option value = "back-end">Backend Developer</option>
                <option value = "front-end">Front-end Developer</option>
            </select>

            {/* Role Description */}

            <label htmlFor = "role-description"><h5>Role</h5></label> 
            <textarea id = "role-description" 
            name = "roleDescription"
            value = {roleData.roleDescription}
            onChange = {handleChange} 
            required/>   

             {/* Required Skills  will require CSS stuff smh*/}

            <h5>Required Skills</h5>
            <input type = "search" onPointerEnter = {DisplayOptions} name = "ReqSkills"/>
            <section className = "checkboxes" onPointerLeave={handlePointerLeave}>
                <CheckboxGenerator 
                obj = {req}
                handleChange = {handleChange} 
                hidden = {display === "ReqSkills" ? false: true}/>
                
                {/*issues with data transfering*/} 
                 
                <section className = "checkbox-text">
                    {Object.entries(req) //from objects in req
                        .filter( (ele) => ele[1] === true) //filtering objects with true value and making an array
                        .map( (ele, index) => //sending that array to EleDisplay function
                        EleDisplay( {name: ele[0], key: ele[0]}, deleteBox ) //as an object so easier to interpret
                        )} 
                </section>
                {/* <EleDisplay obj = {Object.entries(req).filter ( (ele) => ele[1] === true)}/> */}
                 {/*filtering objects to those which have truthy values*/}
            </section>
               

            {/* Complimentary Skills  will require CSS stuff smh*/}

            <h5>Complimentary Skills</h5>
            <input type = "search" onPointerEnter={DisplayOptions} name = "ComSkills"/>
            <section className = "checkboxes" onPointerLeave={handlePointerLeave}>
                <CheckboxGenerator 
                    obj = {com}
                    handleChange = {handleChange} 
                    hidden = {display === "ComSkills" ? false: true}/>
                
                <section className = "checkbox-text">
                    {/*disp func*/} 
                    {Object.entries(com) //from objects in req
                    .filter( (ele) => ele[1] === true) //filtering objects with true value and making an array
                    .map( (ele, index) => //sending that array to EleDisplay function
                    EleDisplay( {name: ele[0], key: ele[0]}, deleteBox ) //as an object so easier to interpret
                    )}
                </section> 
            </section>

            {/*Hours per week*/}
            <h5>Minmum Hours per Week</h5>
            <input type = "number" name = "hours" value = {roleData.hours} onChange = {handleChange} required/>

            {/* Locations  will require CSS stuff smh*/}

            <h5>Locations</h5>
            <input type = "search" onPointerEnter={DisplayOptions} name = "Locations"/>
            <section className = "checkboxes" onPointerLeave={handlePointerLeave}>
                <CheckboxGenerator 
                obj = {loc}
                handleChange = {handleChange}
                hidden = {display === "Locations" ? false: true}/>

                <section className = "checkbox-text">
                    {/*disp func*/}  
                    {Object.entries(loc) //from objects in req
                        .filter( (ele) => ele[1] === true) //filtering objects with true value and making an array
                        .map( (ele, index) => //sending that array to EleDisplay function
                        EleDisplay( {name: ele[0],key: ele[0]}, deleteBox ) //as an object so easier to interpret
                        )} 
                </section>
            </section>
        </fieldset>
    )
}