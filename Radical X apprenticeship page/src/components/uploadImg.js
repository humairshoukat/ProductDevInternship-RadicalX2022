import React from "react"
import {BiImageAdd} from "react-icons/bi";
import greyBackground from "../images/empty-bakground.jpg"

export default function uploadPic(props){
  
  const [logo, setLogo] = React.useState(greyBackground);

  function imgHandler(event){
    //making a file reader variable
    let files = event.target.files[0]
    const reader = new FileReader ()

    //checking when the picture is uploaded then we update the logo parameter 
    //to its new URL value (i think). Reference: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
    reader.addEventListener("load", () => {
      setLogo(reader.result)
    }, false)

    if (files){
      reader.readAsDataURL(files)
    }
  }
  
  let stateFunction = props.func;
  //useEffect to prevent infinite rendering and only updating the values in App
    //when the picURL changes names changes
    React.useEffect(  () => stateFunction( prevVal => (
      {...prevVal, pic: logo}
      )), [logo]
  )

  return(
    <section className = "logo">
      <img src = {logo} className = "img" alt = "logo"/>
      <input type = "file" name = "upload" onChange={imgHandler} accept = "image/*" id = "upload" hidden = {true}/>
      <label htmlFor = "upload"  className = "upload-icon"><BiImageAdd /></label>
    </section>
  )
}