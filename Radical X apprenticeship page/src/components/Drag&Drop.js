import React from "react"
import VID from "../images/VID-img.jpg"

export default function DragAndDrop(props){

  let [uploadFiles, setUploadFiles] = React.useState({
    data: "",
    name: "",
    icon: ""
  })//probably send this via props

    function dragOver(event){//preventing OS objects to be undraggable on Browser
        event.preventDefault();
    }

    function handleDrop(event){//draggin file
        event.preventDefault()
        let file = event.dataTransfer.files[0]
        let reader = new FileReader()
        
        if (file && /video/.test(file.type)){//checks if file exists, if yes then load and reads it.
          reader.readAsDataURL(file)
        }

        reader.addEventListener("load", () => { //triggered by above function
            setUploadFiles({data: reader.result, name: file.name, icon: VID})
          }, false)

    }

    function handleChange(event){ //manually adding file via browsing
      let file = event.target.files[0]
      const reader = new FileReader ()

      //checking when the video is uploaded then we update the logo parameter 
      //to its new URL value (i think). Reference: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
      reader.addEventListener("load", () => {
      setUploadFiles({data: reader.result, name: file.name, icon: VID})
    }, false)

    if (file){
      reader.readAsDataURL(file)
    }
    }

    React.useEffect( () => {
      props.func( prevVal => (
        {...prevVal, 
        video: {name: uploadFiles.name, data: uploadFiles.data}
        }
        )
        )
      }, [uploadFiles]
    )

    return (
        <section className = "drop-container">
            <input type = "file" id = "dragFile" hidden = {true} accept = "video/*" onChange = {handleChange}/>
            <label
            htmlFor = "dragFile" 
            className = "drop-zone" 
            onDrop = {handleDrop} 
            onDragOver = {dragOver}
            >
              Drag File Here (replace by dragging another file)
            </label>

        <section className = "file-icons">
              <img src = {uploadFiles.icon} className = "icons" alt = "video-icon-png"/>
              <h4>{uploadFiles.name}</h4>
        </section>

        </section>
    )
}