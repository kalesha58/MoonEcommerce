import React from "react";
import "./SideBar.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from '@mui/icons-material/Category';

const SideBar = () => {
  return (
    <div className="sidebar">
     
     
        <p>
          <DashboardIcon /> Dashboard
        </p>
     
      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link    to="/dashboard/admin/products">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link  to="/dashboard/admin/create-product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/dashboard/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link  to="/dashboard/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link    to="/dashboard/admin/create-category">
        <p>
          <CategoryIcon />
          Create Category
        </p>
      </Link>
    </div>
  );
};

export default SideBar;
