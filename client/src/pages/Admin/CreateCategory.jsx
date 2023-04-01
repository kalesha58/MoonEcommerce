import React from 'react'
import Layout from '../../components/Layout/Layout';
import SideBar from '../../components/Layout/SidebarAdmin/SideBar';

const CreateCategory = () => {
    return (
        <Layout title={"Dashboard - All Categories"}>
          <div className="container-fluid m-3 p-3">
            <div className="row">
              <div className="col-md-3">
                <SideBar />
              </div>
              <div className="col-md-9">
                <h1>All Cat</h1>
              </div>
            </div>
          </div>
        </Layout>
      );
    };
    
export default CreateCategory
