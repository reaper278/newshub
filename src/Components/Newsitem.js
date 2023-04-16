import React from 'react'
import { useState } from 'react';

 const Newsitem =(props)=> {
 
    // let {title, desc,ImageUrl,NewsUrl,time,author,source}=this.props;
   
    return (
    <>
        <div className="card m-3" >
  <img src={props.ImageUrl} className="card-img-top" alt="..."      width="400" 
     height="200" />
  <div className="card-body">
    <h5 className="card-title">{props.title}.....</h5>
    <p className="card-text">{props.desc}</p>
    {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:1}}>
    {props.source}
    <span className="visually-hidden"></span>
  </span> */}
    <p className="card-text"><small className="text-muted"> {(new Date(props.time).toUTCString())} By {props.author?props.author:"Rohit"}</small></p>
    <a href={props.NewsUrl} target= "_blank" className="btn btn-primary">Read More</a>
  
  </div>
</div>
</>
    )
  }


export default Newsitem
