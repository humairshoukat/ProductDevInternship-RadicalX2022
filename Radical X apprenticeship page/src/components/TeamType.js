import React from "react"
import data from "../Data/TeamData"

export default function TeamType(props){

    const [team, setTeam] = React.useState({
        cohort: ""
    })

    function handleChange(event){
        // console.log(team)
        const {name, value, checked} = event.target
        setTeam( prevVal => ({...prevVal, [name]: value}))
    }

    React.useEffect( () => {
        props.func( prevVal => ({
            ...prevVal,
            teamType: team.cohort
        }
        )
        )
    }, [team]
    )

    return (
        <fieldset>

            {data.map( //array used to generate all the roles, so we only need to change original Data for new cohorts
                (ele, index) => ( //function to a JSX snippet for each object in file
                <section className = "team-container" key = {index}>
                    <input type="radio" id= {ele.title} name="cohort" value= {ele.title} onChange = {handleChange} checked = {team.cohort ===  ele.title}/>
                    <label htmlFor= {ele.title}>
                        {ele.icon}
                        <span className = "cohorts">{ele.title}</span>
                    </label>
                </section>
                )
            )}

        </fieldset>

    )
}