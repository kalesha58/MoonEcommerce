import React, { useState,useEffect } from "react";
import axios from "axios"
import "./AdminDashboard.css";
// import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import SideBar from "../../components/Layout/SidebarAdmin/SideBar";
const AdminDashboard = () => {
  const [auth, setAuth] = useAuth();
  const [data,setData]=useState ([])
  const users = data.length;


    const getAllUsers=async()=>{

         const {data}=await axios.get("http://localhost:8080/api/v1/auth/admin/getAllusers") 
           setData(data.users)
    } 
    getAllUsers()
 
  console.log(data)
  console.log(users)
  return (
    <Layout title={"Admin Pannel Moon"}>
       <div className="dashboard">
     
      <SideBar />

      <div className="dashboardContainer">
        <h1 component="h1">Dashboard</h1>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{0}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              {/* <p>{products && products.length}</p> */}<p>{0}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              {/* <p>{orders && orders.length}</p> */}<p>{0}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users}</p>
            </Link>
          </div>
        </div>

        {/* <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div> */}
      </div>
    </div>
    </Layout>
  );
};

export default AdminDashboard;
