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
          {/* <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">54 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">DanielD</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">256 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">251 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">223 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
       
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Bootstrap 4 development in record time with AppStrap Bootstrap 4 Theme</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">32 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">AppStrapMaster</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">245 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">116 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">257 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-warning border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Bootstrap 4 development in record time with AppStrap Bootstrap 4 Theme</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">29 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">Themelize.me</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> <a className="text-black mr-2" href="#">#Drupal</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">49 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">29 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">170 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Drupal 8 quick starter guide</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">53 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">Themelize.me</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#iOS</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">164 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">82 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">240 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-danger border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Custom shortcut or command to launch command in terminal?</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">44 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">DanielD</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#C++</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">180 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">35 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">44 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
       
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">3 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">DanielD</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#C++</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> <a className="text-black mr-2" href="#">#Drupal</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">236 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">79 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">162 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Bootstrap 4 development in record time with AppStrap Bootstrap 4 Theme</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">46 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">DanielD</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#C++</a> <a className="text-black mr-2" href="#">#Drupal</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">130 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">121 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">191 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">41 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">KylieJ</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">194 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">16 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">113 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">30 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">AppStrapMaster</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">179 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">194 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">167 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Bootstrap 4 development in record time with AppStrap Bootstrap 4 Theme</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">56 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">AppStrapMaster</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">11 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">120 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">240 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-danger border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Windows batch, recursively copy files</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">25 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">Wizzy</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">25 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">211 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">234 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Drupal 8 quick starter guide</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">21 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">KylieJ</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#C++</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">70 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">187 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">234 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Windows batch, recursively copy files</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">60 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">KenyeW</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#iOS</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">288 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">206 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">1 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Custom shortcut or command to launch command in terminal?</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">27 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">KylieJ</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#AppStrap Theme</a> <a className="text-black mr-2" href="#">#Wordpress</a> <a className="text-black mr-2" href="#">#Drupal</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">144 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">92 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">25 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">22 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">Themelize.me</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">199 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">75 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">61 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">HELP! My Windows XP machine is down</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">14 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">AppStrapMaster</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#C++</a> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#Drupal</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">74 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">77 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">144 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Custom shortcut or command to launch command in terminal?</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">15 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">Themelize.me</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#AppStrap Theme</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">88 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">48 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">283 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Drupal 8 quick starter guide</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">59 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">KylieJ</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Android</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">82 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">22 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">40 Views</span> </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="card row-hover pos-relative py-3 px-3 mb-3 border-primary border-top-0 border-right-0 border-bottom-0 rounded-0">
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-sm-0">
                <h5>
                  <a href="#" className="text-primary">Bootstrap 4 development in record time with AppStrap Bootstrap 4 Theme</a>
                </h5>
                <p className="text-sm"><span className="op-6">Posted</span> <a className="text-black" href="#">26 minutes</a> <span className="op-6">ago by</span> <a className="text-black" href="#">Themelize.me</a></p>
                <div className="text-sm op-5"> <a className="text-black mr-2" href="#">#Development</a> <a className="text-black mr-2" href="#">#iOS</a> <a className="text-black mr-2" href="#">#Bootstrap 4</a> <a className="text-black mr-2" href="#">#Wordpress</a> </div>
              </div>
              <div className="col-md-4 op-7">
                <div className="row text-center op-7">
                  <div className="col px-1"> <i className="ion-connection-bars icon-1x"></i> <span className="d-block text-sm">163 Votes</span> </div>
                  <div className="col px-1"> <i className="ion-ios-chatboxes-outline icon-1x"></i> <span className="d-block text-sm">236 Replys</span> </div>
                  <div className="col px-1"> <i className="ion-ios-eye-outline icon-1x"></i> <span className="d-block text-sm">22 Views</span> </div>
                </div>
              </div>
            </div>
          </div> */}
      
        </div>
    
      
      </div>
    </div>
    </div>
  )
}
