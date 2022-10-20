import React from "react"
import UploadImg from "./components/uploadImg"
import CompanyName from "./components/CompanyName"
import DragAndDrop from "./components/Drag&Drop"
import Team from "./components/TeamType"
import Roles from "./components/TeamRoles"

export default function App(){
    const [data, setData] = React.useState({
        companyName: "",
        pic: "",
        video: {name: "", data: ""},
        teamType: "",
        teams: []
    })

    console.log(data);
    return(
        <main>
            <section className = "company-description-title">
                <article className = "heading">Company Logo & Apprenticeship Title</article>
                <UploadImg func = {setData}/>
                <CompanyName func = {setData}/>
            </section>

            <DragAndDrop func = {setData}/> 
            
            <Team func = {setData}/>

            <Roles func = {setData}/>

        </main>
    )
}