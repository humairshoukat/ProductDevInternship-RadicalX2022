import React, { useEffect } from "react"
import {BiImageAdd} from "react-icons/bi";

export default function UploadPic(props){
  
  let [img, setImg] = React.useState(props.value)

  function imgHandler(event){
    //making a file reader variable
    let files = event.target.files[0]
    const reader = new FileReader ()

    //checking when the picture is uploaded then we update the logo parameter 
    //to its new URL value (i think). Reference: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
    reader.addEventListener("load", () => {
      // console.log("File is loaded")
        setImg(reader.result)
        }
    , false)

    if (files){
      reader.readAsDataURL(files)
    }
  }

  // props.func(prevVal => ({
  //   ...prevVal,
  //   pic: img
  // }))

  useEffect( () => {
    props.onChange(prevVal => ({
      ...prevVal,
      [props.name]: img
    })
  )}, [img])

  return(
    <section className = "logo">
      <img src = {img} className = "img" alt = "logo"/>
      <input type = "file" name = {props.name} onChange={imgHandler} accept = "image/*" id = {props.name} hidden = {true}/>
      <label htmlFor = {props.name}  className = "upload-icon"><BiImageAdd /></label>
    </section>
  )
}

//bugged code, the label header had wrong path so that is now fixed
  
//   let logo = props.pic
//   let stateFunction = props.func
  
//   function imgHandler(event){
//     //making a file reader variable
//     let files = event.target.files[0]
//     const reader = new FileReader ()

//     //checking when the picture is uploaded then we update the logo parameter 
//     //to its new URL value (i think). Reference: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
//     reader.addEventListener("load", () => {
//       // console.log("File is loaded")
//       stateFunction( prevVal => {
//         return ({...prevVal, pic: reader.result})
//         }
//     )}, false)

//     if (files){
//       reader.readAsDataURL(files)
//     }
//   }
  

//   return(
//     <section className = "logo" id = {props.keyId}>
//       <img src = {logo} className = "img" alt = "logo"/>
//       <input type = "file" name = "upload" onChange={imgHandler} accept = "image/*" id = "upload" hidden = {true}/>
//       <label htmlFor = "upload"  className = "upload-icon"><BiImageAdd /></label>
//     </section>
//   )
// }

// function useUploadPic(pic){
  
//   const [img, setImg] = React.useState("")

//   React.useEffect( () => {
//     setImg (pic)
//   }, [])
  
  
//   return img
// }

//changes pic prop automatically for some reason...