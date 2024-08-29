import React from 'react'
import './SidebarLayout.css'
import { Link } from 'react-router-dom';
function SidebarLayout({showLayout,icon,refL}) {
  return (
    <div className={`sidebar-layout ${showLayout?"show":""}`} ref={refL}>
        {icon}
        <Link to="/react-app-demo/">Home</Link>
        <Link to="/react-app-demo/account">Account</Link>
        <Link to="/react-app-demo/help">Help</Link>
        <Link to="/react-app-demo/about">About</Link>
        <Link to="/react-app-demo/settings">Settings</Link>

    </div>
  )
}

export default SidebarLayout