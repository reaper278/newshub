import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Button, Dropdown,Avatar,Input, Text,Link as Linkank } from "@nextui-org/react";

// import { Layout } from "./Layout.js";
import { icons } from './Icon';
import { useState } from 'react';
import { useEffect } from 'react';

import { Logo } from "./Logo.js";

/**
 * This is a JavaScript function that creates a navbar with collapsible items and uses the useNavigate
 * hook.
 */

const MyNavbar=()=> {
  let Navigate=useNavigate();
  const collapseItems = [
    "Home",
    "Bussiness",
    "Entertainment",
    "Sports",
    "Health",
    "Technology",
    "Science",
    
    
   
  ];
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
        <>
        


    
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
          <Logo></Logo>
          <Text b color="inherit" hideIn="xs">
            NewsHub
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor="error" hideIn="xs" varient="highlight-solid-rounded" >
       
        <Navbar.Link  > <div className='home' onClick={()=>{Nevigate('/home')}}>Home</div></Navbar.Link>

        <Navbar.Link> <div className='Monthlyhighlights' onClick={()=>{Nevigate('/Monthlyhighlights')}}>Monthlyhighlights</div> </Navbar.Link>

        <Navbar.Link> <div className='bussiness' onClick={()=>{Nevigate('/bussiness')}}>Bussiness</div> </Navbar.Link>
        <Navbar.Link> <div className='entertainment' onClick={()=>{Nevigate('/entertainment')}}>Entertainment</div> </Navbar.Link>
        <Navbar.Link> <div className='sports' onClick={()=>{Nevigate('/sports')}}>Sports</div> </Navbar.Link>
        <Navbar.Link> <div className='health' onClick={()=>{Nevigate('/health')}}>Health</div> </Navbar.Link>
        <Navbar.Link> <div className='technology' onClick={()=>{Nevigate('/technology')}}>Technology</div> </Navbar.Link>
        <Navbar.Link> <div className='science' onClick={()=>{Nevigate('/science')}}>Sceince</div> </Navbar.Link>
         
         
         
              
        </Navbar.Content>
       
        <Navbar.Content>
        {sessionStorage.getItem("auth-token")?  <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src={loggeduserdata?.image}
                />
                
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
            
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                {loggeduserdata?.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings"  withDivider>
                <div  onClick={()=>{Nevigate('/ADDNews')}}> ADD News</div>
               
              </Dropdown.Item>
              <Dropdown.Item key="team_settings"> <div onClick={()=>{Navigate('/Profile')}}>Profile</div> </Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider >
              <div onClick={()=>{Navigate('/Activity')}}>News Operations</div> 
              </Dropdown.Item>
             
              <Dropdown.Item key="logout" withDivider color="error" ><div onClick={()=>{sessionStorage.removeItem("auth-token"); Navigate('/login')}}>Log Out</div>  </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>: <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
            
            >
             
        
              <Dropdown.Item key="help_and_feedback" ><div className='home' onClick={()=>{Navigate('/login')}}> Login</div></Dropdown.Item>
              <Dropdown.Item key="logout"  ><div className='home' onClick={()=>{Navigate('/Signup')}}>Sign Up</div>  </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>}
      




        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Linkank
              color="inherit"
              css={{
                minWidth: "100%",
              }}
       
            > <Link to={`/${item}`}>{item}</Link>
              
             </Linkank>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
   
  


       








      </>
    )
  }


export default MyNavbar
