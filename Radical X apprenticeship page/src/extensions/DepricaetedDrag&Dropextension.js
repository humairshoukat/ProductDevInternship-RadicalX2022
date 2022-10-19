/* This section has 2 codes, which served to display 
all the different pngs and vid files the user dropped
This section has no use in the current system as I had misunderstood the question

import React from "react"
import PNG from "../images/PNG-img.jpg"
import VID from "../images/VID-img.jpg"

export default function DragAndDrop(props){

    let icon;

    console.log(props.filetype, props.name)
    if (/image/.test(props.filetype)){
        icon = PNG
    } else if (/video/.test(props.filetype)){
        icon = VID
    }

    return (
        <section className = "file-icons">
              <img src = {icon} className = "icons" />
              {props.name}
        </section>
    )
}*/

/* Drag&Drop for multiple files... 
import React from "react"
import FileIcons from "./Drag&Dropextension"

export default function DragAndDrop(){

  let [uploadFiles, setUploadFiles] = React.useState([])//probably send this via props

    function dragOver(event){
        console.log("item detected")
        event.preventDefault();
    }

    function drop(event){
        event.preventDefault()
        let file = event.dataTransfer.files[0]
        let reader = new FileReader()
        
        if (file){//checks if file exists, if yes then load and reads it.
          reader.readAsDataURL(file)
        }

        reader.addEventListener("load", () => { //triggered by above function
          if (!(uploadFiles.findIndex( ele => ele.data === reader.result) > -1)){
            setUploadFiles( () => {//weird logic to make useEffect work
              let temp = uploadFiles.filter( ele => true)
              temp.push({data: reader.result, type: file.type, name: file.name})
              return temp
            }
            )
          }
        }, false)
    }

    React.useEffect( () => {
      console.log(uploadFiles)}, [uploadFiles]
    )

    return (
        <section className = "drop-container">
            <input type = "file" id = "dragFile" hidden = {true} multiple/>
            <label
            htmlFor = "dragFile" 
            className = "drop-zone" 
            onDrop = {drop} 
            onDragOver = {dragOver}
            >
              Drag File Here
            </label>

            <section className = "dynamic-files">
            {[...Array(uploadFiles.length)].map(
              (elem, index) =>
              < FileIcons key={index} 
              filetype = {uploadFiles[index].type}
              name = {uploadFiles[index].name}/>)}

            </section>
        </section>
    )
}*/