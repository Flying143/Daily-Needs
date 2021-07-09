import React from 'react';
import { Link } from "react-router-dom"
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import "./Css/Navbar.css"

export default function Navbar() {

    return (
        <div className="sidebar">
            <div className="menu">
                <Link className="logo">
                    <h2>Daily Needs</h2>
                </Link>
                <Link to="/" className="menu-item">
                    <DashboardIcon className="icon" />
                    <h2 className="label">Dashboard</h2>
                </Link>
                <Link to="/order" className="menu-item">
                    <ShoppingCartIcon className="icon" />
                    <h2 className="label">Orders</h2>
                </Link>
                <Link to="/customer" className="menu-item">
                    <PeopleIcon className="icon" />
                    <h2 className="label">Customers</h2>
                </Link>
                <Link to="/product" className="menu-item">
                    <AddCircleIcon className="icon" />
                    <h2 className="label">Product Master</h2>
                </Link>
            </div>
        </div>

    )
}