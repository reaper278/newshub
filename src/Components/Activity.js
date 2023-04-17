import React, { useEffect } from 'react'
import './Activity.css'
import { useState } from 'react'
export default function Activity() {
  /* The above code is using the `useEffect` hook in React to call the `AllNews` function when the
  component mounts. The `[]` as the second argument to `useEffect` means that the effect will only
  run once, when the component mounts. */
  useEffect(()=>{
    AllNews()
  },[])
  /**
   * The function sends a GET request to a local API endpoint to retrieve all news articles.
   */
 
 const [allusernews, setallusernews]=useState({})
  const AllNews = async () => {
    try {
  
      const response = await fetch('http://localhost:5000/api/news/allnewsbyid',

        {
          method: "GET",
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
    setallusernews(result)
     
   
    } else {
    
    }
      console.log(result)
    } catch (error) {
     
      console.log(error.message);
    }
  };
  return (
    <div className='Activity pt-4'>
    
      <div className="container">
      <div className="row">

        <div className="col-lg-12 mb-3">
         
        {allusernews?.news && allusernews?.news?.map((element)=>{
        return  <div className="card row-hover pos-relative py-3 px-3 mb-3 border-warning border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">{element?.title}</a>
                </h5>
                <p className="text-sm">{element?.description}</p>
                <div className="text-sm op-5">  <a className="text-black mr-2" >by {element?.userdata?.name}</a> <a className="text-black mr-2" href="#">{element?.tag}</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">{element?.email}</span> </div>
              
                </div>
              </div>
            </div>
          </div>
         })}
          
        </div>
    
      
      </div>
    </div>
    </div>
  )
}
