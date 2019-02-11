import React, { Component } from 'react';

import 'firebase/database';
import '../App.css'
import employee from '../images/download.jpeg';
import customer from '../images/download1.jpeg';
import {Link} from 'react-router-dom';
class Employee extends Component {
  customer(){
    alert("Server side in progress")
  }
  employee(){

  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
            <h1 style={{fontSize:"3.5rem"}}>GO Sure</h1>
         </div>
        <div className="notesBody">
        <div style={{height:"45%"}}><Link to="/customer"><p style={{height:"15rem"}}><img src={employee}  style={{height:"160px",padding:"0px 5.0rem"}} alt="emp" /><span style={{padding:"10.5rem 7rem 0rem 7rem",fontFamily:"arial black",fontSize:"1.5rem"}}>Internal</span></p></Link></div>
        <div  onClick={this.customer} style={{height:"45%"}}><p style={{height:"15rem"}}><img src={customer} style={{height:"160px",padding:"0px 5.0rem"}} alt="emp" /><span style={{padding:"6.5rem",fontFamily:"arial black",fontSize:"1.5rem"}}>External</span></p></div>
          
        </div>
        
      </div>
    );
  }
}

export default Employee;
