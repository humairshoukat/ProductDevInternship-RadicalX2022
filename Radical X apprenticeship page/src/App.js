import React, { useEffect } from "react"
import CompanyName from "./components/CompanyName"
import DragAndDrop from "./components/Drag&Drop"
import Team from "./components/TeamType"
import UploadImg from "./components/uploadImg"
import Roles from "./components/TeamRoles"
import greyBackground from "./images/empty-bakground.jpg"
import Mentors from "./components/Mentors"
import Timeline from "./components/Timeline"
import Description from "./components/CompanyDes"

//Elegant? no. functional? yes
//need to fix termination of overlay

export default function App(){
    const [data, setData] = React.useState({
        companyName: "",
        companyDescription: "",
        apprenticeshipDescription: "",
        pic: greyBackground,
        video: {name: "", data: ""},
        teamType: "",
        teams: [],
        mentors: [],
        time: {}
    })

    //need to send this object to backend and we are done
    return(
        // <SetterContext.Provider>
            <main>
                <section className = "company-description-title">
                    <h3 className = "heading">Company Logo & Apprenticeship Title</h3>
                    < UploadImg
                    value = {data.pic}
                    name = "pic"
                    onChange = {setData}
                    />
                    <CompanyName func = {setData} data = {data}/>
                </section>

                <Description setData = {setData} 
                data = {data} 
                name = "companyDescription"
                value = {data.companyDescription}
                className = "Company Description"/>
                {/* <h3>Company Description</h3> 
                <textarea 
                className = "comp-description" 
                name = "compDescription"
                value = {data.companyDescription}
                onChange = {() => setData(
                    prevVal => {
                        ...prevVal,
                        companyDescription: value
                    }
                )}></textarea>

                <h3>Apprenticeship Description</h3>
                <textarea 
                className = "apprenticeship" 
                name = "compDescription"
                value = {data.apprenticeshipDescription}
                onChange = {() => setData(
                    prevVal => ({
                        ...prevVal,
                        apprenticeshipDescription: value
                    })
                )}></textarea> */}

                <DragAndDrop func = {setData}/> 
                
                <Team func = {setData}/>

                <Roles func = {setData}/>

                <Mentors func = {setData}/>
                
                <h3>Time Period</h3>
                <Timeline func = {setData}/>
            </main>
        //</SetterContext.Provider>
        
    )
}