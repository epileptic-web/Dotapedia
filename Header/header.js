import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavLink } from 'react-router-dom';
import '../heroes/skills.css';
import {Items25} from './items25';

export  function Header() {
  return (
    
      <div className = 'header'>
      
         <NavLink className = 'header1' to = '/home' style ={{marginLeft: 50}}> 
           home
     </NavLink> 
    
     
      </div>
    
  );
}



