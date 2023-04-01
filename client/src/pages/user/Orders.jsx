import React from 'react'
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
const Orders = () => {
  return (
    <Layout title={"Your Orders"}>

    <div>
      orders
    </div>
    </Layout>
  )
}

export default Orders
