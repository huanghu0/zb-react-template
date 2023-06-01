import React,{  memo } from "react";
import { Outlet } from 'react-router-dom'

const LayoutMenu = memo(() => {
  return (<div className="layout-menu">
    LayoutMenu
    <Outlet></Outlet>
  </div>)   
})

export default LayoutMenu;