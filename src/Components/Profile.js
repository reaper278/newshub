import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  
  let Nevigate=useNavigate()
  useEffect(()=>{
  getuserdata();
  },[sessionStorage.getItem("auth-token")])
    const [loggeduserdata,setloggeduserdata]=useState({})
    const getuserdata=async()=>{
      try{
        const response = await fetch('http://localhost:5000/api/auth/getuser',
      
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "auth-token": sessionStorage.getItem("auth-token")
          },
         
        }
      );
      
      
      
      let result = await response.json();
      if (response.status == 404) {
    
      } else if (response.status == 200) {
      setloggeduserdata(result)
       
     
      } else {
     
      }
      
      } catch (error) {
      
      console.log(error.message);
      }
    }
   
  return (
    <div>
      <div className="container py-5">
   
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4 boxshadow">
          <div className="card-body text-center">
            <img src= {loggeduserdata?.image} alt="avatar"
              className="rounded-circle img-fluid" style={{width: "150px"}}/>
            <h5 className="my-3"> {loggeduserdata?.name}</h5>
            <p className="text-muted mb-1">  {loggeduserdata?.email}</p>
            
          </div>
        </div>
       
      </div>
      <div className="col-lg-8">
        <div className="card mb-4 boxshadow">
          <div className="card-body">
            <div className="row m-3">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0"> {loggeduserdata?.name}</p>
              </div>
            </div>
            <hr/>
            <div className="row m-3">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0"> {loggeduserdata?.email}</p>
              </div>
            </div>
            <hr/>
            {/* <div className="row m-3">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(097) 234-5678</p>
              </div>
            </div>
            <hr/>
            <div className="row m-3 ">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(098) 765-4321</p>
              </div>
            </div>
            <hr/>
            <div className="row m-3">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
              </div>
            </div> */}
          </div>
        </div>
  
      </div>
    </div>
  </div>
    </div>
  )
}
