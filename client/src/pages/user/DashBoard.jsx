import React from "react";
import { Link, NavLink } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import "./DashBoard.css";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
    <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              {/* <img src={user.avatar.url} alt={user.name} /> */}
              {/* <Link to="/me/update">Edit Profile</Link> */}
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{auth?.user?.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{auth?.user?.email}</p>
              </div>
              <div>
                <h4>Address</h4>
                <p>{auth?.user?.address}</p>
              </div>

              <div>
              <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
              </div>
            </div>
          </div>
    </Layout>
  );
};

export default Dashboard;
