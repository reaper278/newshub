import React, { Component, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useState } from 'react';

export default function Login() {
let Navigate=useNavigate();
useEffect(()=>{
if(sessionStorage.getItem("auth-token")){
  Navigate('/home')
}
},[])
 /**
  * This is a JavaScript function that sends a POST request to a login API endpoint with user email and
  * password, and returns the response in JSON format.
  */
  const loginapi = async () => {
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    if(email.length<8){
      window.alert("email must contain atleast 8 characters")
  
    }
    else if(password.length<8){
      window.alert("password must contain atleast 8 characters")
     }
     else{
      try {
  
        const response = await fetch('http://localhost:5000/api/auth/login',
  
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
             
            },
            body: JSON.stringify({
   
              "email": email,
              "password": password
            }),
          }
        );
     
        
        
        let result = await response.json();
        if (response.status == 404) {
          window.alert(result.error)
        } else if (response.status == 200) {
          // console.log(result)
          sessionStorage.setItem("auth-token",result.authtoken)
          // console.log(sessionStorage.getItem("auth-token"))
          Navigate("/home")
        } else {
         
        }
   
      } catch (error) {
       
        console.log(error.message);
      }
     }
   
  };
  return (
    <div>
      <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input type="email"  className="form-control form-control-lg" id="email" name="email" />
                <label className="form-label" for="typeEmailX" >Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" className="form-control form-control-lg" id="password" name="password"/>
                <label className="form-label" for="typePasswordX" >Password</label>
              </div>

              {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

              <button className="btn btn-outline-light btn-lg px-5" type="button" onClick={loginapi}>Login</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <Link to="/signup" className="text-white-50 fw-bold">Sign Up</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
