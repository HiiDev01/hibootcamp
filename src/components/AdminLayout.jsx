import React from 'react'
import DashNav from './DashNav';
import { Outlet } from 'react-router-dom';
/*import '../styles/AdminLayout.css';*/
  console.log("hello");
const AdminLayout = () => {
  return (
    <div className='admin_layout'>
      <div className="admin_nav_wrap">
        <DashNav></DashNav>
      </div>
      <div className="admin_main">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default AdminLayout
