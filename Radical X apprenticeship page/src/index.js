import ReactDOM from "react-dom/client"
import React from "react"
import App from "./App"
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

// const [data, setData] = React.useState({
    //     companyName: "",
    //     pic: ""
    // })

    // console.log(data);
    // return(
    //     <section className = "company-description-title">
    //         <article className = "heading">Company Logo & Apprenticeship Title</article>
    //         <UploadImg func = {setData}/>
    //         <CompanyName func = {setData}/>
    //     </section>
    // )