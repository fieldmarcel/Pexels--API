import React from 'react'
import './Navbar.css';
import {useLocation, useNavigate } from 'react-router-dom';
const Navbar = ({setSearch}) => {

const navigate= useNavigate()
const location= useLocation()

  return (
    <div> 
 <div className="nav mt-3">
        <div
          className="button btn btn-outline-warning mx-3 my-2"
          onClick={() => {
            setSearch("nature");
            navigate("/");
          }}
        >
          Nature
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {
            setSearch("travel");
            navigate("/");
          }}
        >
          Travel
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {
            setSearch("city");
            navigate("/");
          }}
        >
          City
        </div>
        <div
          className="button btn btn-outline-secondary mx-3"
          onClick={() => {
            setSearch("car");
            navigate("/");
          }}
        >
          Car
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("fashion");
            navigate("/");
          }}
        >
          Fashion
        </div>
        <div
          className="button btn btn-outline-light mx-3"
          onClick={() => {
            setSearch("animals");
            navigate("/");//here we can do n2 works simultaneously 
          }}//we can use handler for this purpose though
        >
          Animals
        </div>
        <div
          className="button btn btn-outline-dark text-light mx-3"
          onClick={() => {
            setSearch("technology");
            navigate("/");
          }}
        >
          Technology
        </div>
        <div
          className="button btn btn-outline-warning mx-3"
          onClick={() => {
            setSearch("finance");
            navigate("/");
          }}
        >
          Business & Finance
        </div>
        <div
          className="button btn btn-outline-primary mx-3"
          onClick={() => {
            setSearch("Mumbai");
            navigate("/");
          }}
        >
          Mumbai
        </div>
        <div
          className="button btn btn-outline-info mx-3"
          onClick={() => {
            setSearch("lucknow");
            navigate("/");
          }}
        >
          Lucknow
        </div>

        {location.pathname == "/saved" ? (//if this then saved else home
          <div
            className="button btn btn-warning mx-3"
            onClick={() => navigate("/")}
          >
            Home
          </div>
        ) : (
          <div
            className="button btn btn-warning mx-3"
            onClick={() => navigate("/saved")}
          >
            Saved
          </div>
        )}
      </div>
<div className="container my-3 " style={{width :"45%"}}>

{  location.pathname  ==='/ ' &&  (
  <div className="mb-3">
    <input type="text" 
     className="form-control bg-dark text-light  "  
    id="exampleInput" 
    onChange={(e)=>setSearch(e.target.value)}//when use changes a input field set search function is called
    />
  </div>

)}

</div>
    </div>
  )
}

export default Navbar;


