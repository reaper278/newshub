import React, { useEffect, useState } from 'react'
import './Addnews.css'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Addnews() {
let Navigate=useNavigate();
useEffect(()=>{
  if(!sessionStorage.getItem("auth-token")){
    Navigate('/login')
  }
  },[])

const [image,setimage]=useState({})
const [filesize,setfilesize]=useState(0)
  const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const imagepreview = async (e) => {
    const imagefile = e.target.files[0];

    setfilesize(e.target.files[0].size);

    let base64 = await toBase64(imagefile);

    setimage(base64);
  };



  const addNewsApi=async()=>{
let title=document.getElementById('title').value
let description=document.getElementById("Description").value;
let source=document.getElementById("Source").value
let tag=document.getElementById("Tag").value
console.log(title,description,source,tag)
if (filesize > 100000) {
  window.alert("The image size should be less than 100kb", "danger");
  console.log(image)
}
else{
  try{
  const response = await fetch('http://localhost:5000/api/news/addnews',

  {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "auth-token": sessionStorage.getItem("auth-token")
    },
    body: JSON.stringify({
      "title": title,
"description": description,
"source": source,
"image": image,
"tag":tag
    }),
  }
);



let result = await response.json();
if (response.status == 404) {
  window.alert(result.error)
} else if (response.status == 200) {
  window.alert(" News added sucessfully")
 
  Navigate('/home')
} else {

}

} catch (error) {

console.log(error.message);
}
}


  }
  return (
    <>
   
      <div className="container">
  <main>
    <div className="py-5 text-center">
      <img className="d-block mx-auto mb-4 " src="others/addnews.jpg" style={{borderRadius:"45px"}}alt="" width="92" height="77"/>
      <h2>ADD NEWS</h2>
      
    </div>

    <div className="row justify-content-center g-5">
     
      <div className="col-md-8 col-lg-8">
        <h4 className="mb-3">ADD News</h4>
        <form className="needs-validation">
          <div className="row g-3">
          
          

            <div className="col-12">
              <label for="address" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" name="title"placeholder="Title of the news" required/>
              <div className="invalid-feedback">
                Please enter the Title of the news.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Source</label>
              <input type="text" className="form-control" id="Source" name="Source"placeholder="Source of the news" required/>
              <div className="invalid-feedback">
                Please enter the Source of the news.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Description</label>
              <input type="text" className="form-control" id="Description" name="Description"placeholder="Description of the news" required/>
              <div className="invalid-feedback">
                Please enter the Description of the news.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Tag</label>
              <input type="text" className="form-control" id="Tag" name="Tag"placeholder="Tag" required/>
              <div className="invalid-feedback">
                Please enter the Tag of the news.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Image</label>
              <input type="file" className="form-control" id="newsimage" name="newsimage"placeholder="Please insert image" onChange={imagepreview} required/>
              <div className="invalid-feedback">
                Please insert Image of the news.
              </div>
            </div>


          

            
        

        

     
            </div>
      
          
          <button className="w-100 btn btn-primary btn-lg my-4" type="button" onClick={addNewsApi}>ADD</button>
        
        </form>
        </div>
        </div>
  </main>

 


  </div>  </>
  )
}
