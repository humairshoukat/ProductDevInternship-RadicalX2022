import React from "react"
import Overlay from "../extensions/Overlay"
import RolesOverlay from "../extensions/TeamRolesExtension"
import ReqSkills from "../Data/ReqSkills"
import ComSkills from "../Data/ComSkills"
import Locations from "../Data/Locations"
import EleDisplay from "../extensions/BorderDisplay"

export default function AddTeamRoles(props){

    const [overlay, setOverlay] = React.useState(true) //checking if overlay exists or not

    const [team, setTeam] = React.useState([])

    const [com, setCom] = React.useState({...ComSkills})
    const [req, setReq] = React.useState({...ReqSkills})
    const [loc, setLoc] = React.useState({...Locations})

    const [member, setMember] = React.useState({role: "",
    roleDescription: "",
    reqSkills: req,
    comSkills: com,
    hours: "",
    locations: loc,
    key: 0})

    function handleClick(){
        setOverlay(!overlay);
    }

    // function deleteBox(event){
    //     event.target.id
    // }

    //console.log("Team Data: ", team)
    React.useEffect( () => { 
        props.func( prevVal => 
        ({
            ...prevVal,
            teams: team
        })
        )
    }, [team.length] //had to use array length, could not just use array as specifier
    )    //because array/object 

    function removeTeam(event){
        let key = event.target.id
        setTeam ( team.filter( role => role.key != key)
                        .map( (role, index) => {
                            role.key = index
                            return role
                        }
                        ))
    }

    // function Display(array){ //need to alter the border display function
    //     array.map( (obj, index) => { //mapping every instance of the array by wrapping it around JSX
    //         <section className = "role-display" key = {index}>
    //             <h4>{obj.role}</h4> {/*Displaying the title of the role*/}
    //             <p>{obj.roleDescription}</p> {/*Displaying role description, need to limit this to 3 lines somehow*/}
    //             <section className = "req-skills-display">
    //                 {/*
    //                 First we will filter the object to obtain keys with true values
    //                 then map those values with the desired JSX
    //                 */}
    //                 {
    //                 Object.enteries(obj.reqSkills)
    //                 .filter( ele => ele[1] === true) //obj filtered
    //                 .map(
    //                     (ele, index) => //sending that array to EleDisplay function
    //                     EleDisplay( {name: ele[0], key: index}, deleteBox ) //as an object so easier to interpret
    //                 )
    //                 } 
    //             </section>
    //         </section>
    //     }
    //     )
    // }

    return(
        <section className = "members">
            <header>
                <h3>Team Roles</h3>
                <button className = "add-members" onClick = {handleClick}>{/*icon*/} Add Team Members</button>
                <Overlay 
                innerForm = {RolesOverlay} 
                hidden = {overlay} 
                state = {setOverlay}  
                team = {team}
                setTeam = {setTeam}
                data = {member}
                setData = {setMember}
                com = {com}
                setCom = {setCom}
                req = {req}
                setReq = {setReq}
                loc = {loc}
                setLoc = {setLoc}
                // index = {team.length}
                /> 
            </header>
            
            {team.map( (ele, index) => {
                ele.key = index
                return ele
            })
            .map( ele => (EleDisplay( ele, removeTeam))   )
            }       
        </section>
    )
}