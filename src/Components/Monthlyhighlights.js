import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Newsitem from './Newsitem';
export default function Monthlyhighlights() {
  const [News , setNews]=useState({})
    /* The above code is using the `useEffect` hook in React to call the `AllNews` function when the
  component mounts. The `[]` as the second argument to `useEffect` means that the effect will only
  run once, when the component mounts. */
  useEffect(()=>{
    AllNews()
  },[])
  /**
   * The function sends a GET request to a local API endpoint to retrieve all news articles.
   */
  const AllNews = async () => {
    try {
  
      const response = await fetch('http://localhost:5000/api/news/allnews',

        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
           
          },
        }
      );
   
      
      
      let result = await response.json();
      // if (response.status == 404) {
       
      // } else if (response.status == 200) {
       
      // } else {
       
      // }
     setNews(result)
    } catch (error) {
     
      console.log(error.message);
    }
  };
  return (
    <div>
      
       <div className="container " style={{marginTop:"70px"}}>
            <div className="row ">
            {
             News && News?.news?.map((element) => {
                return (
                  <div
                    className="col-md-4 "
                    key={element._id}
                  >
                    <Newsitem
                      title={element.title ? element.title.slice(0, 60) : " "}
                      desc={
                        element.description
                          ? element.description.slice(0, 120)
                          : " "
                      }
                      ImageUrl={element.image ? element.image : "  "}
                      NewsUrl={element.source ? element.source  : " "}
                      time={element.date}
                      
                 
                    />
                  </div>
                );
              })} 
          </div>
        
       
          
          
          
    </div>
    </div>
  )
}
