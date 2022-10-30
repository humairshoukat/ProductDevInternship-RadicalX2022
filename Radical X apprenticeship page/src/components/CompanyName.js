import React from "react"

export default function CompanyName(props){
    //making an object as we need to use it alongside form in JSX
    const [name, setName] = React.useState(
        {
            compName: ""
        }
    );

    function handleInputs(event){
        const {name, value} = event.target;
        setName( prevData => ({
                    [name]: value
                }))
    }

    let stateFunction = props.func;
    //useEffect to prevent infinite rendering and only updating the values in App
    //when the company names changes
    React.useEffect(  () => stateFunction( prevVal => (
        {...prevVal, companyName: name.compName}
        )), [name.compName]
    )


    return(
        <section className = "comp-details">
            <form className = "company-name">
                <label htmlFor = "name">
                <input 
                name = "compName"
                placeholder="Enter companies name"
                id = "name" 
                value = {name.compName} 
                onChange = {handleInputs}
                />
                </label>
            </form>
        </section>
    )
}
