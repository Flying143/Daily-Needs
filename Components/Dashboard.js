import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { Grid } from "@material-ui/core"
import "./Css/Dashboard.css"
import { db } from "../Firebase"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Dashboard = () => {

    const [customer, setCustomer] = useState("");
    const [product, setProduct] = useState("");
    const [order, setOrder] = useState("");

    useEffect(() => {
        db.collection("user_master").get().then((element) => {
            setCustomer(element.size)
        })

        db.collection("product_master").get().then((element) => {
            setProduct(element.size)
        })

        db.collection("order_master").get().then((element) => {
            setOrder(element.size)
        })
    })

    return (
        <div id="dashboard">
            <Grid container className="d_container">
                <Grid item xs={12} sm={4}>
                    <Link to="/customer" className="d_link">
                        <div className="d_content">
                            <div className="d_icon">
                                <PeopleIcon />
                            </div>
                            <div>
                                <h3>Customers</h3>
                                <p>{customer}</p>
                            </div>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Link to="/product" className="d_link">
                        <div className="d_content">
                            <div className="d_icon">
                                <AddCircleIcon />
                            </div>
                            <div>
                                <h3>Products</h3>
                                <p>{product}</p>
                            </div>
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Link to="/order" className="d_link">
                        <div className="d_content">
                            <div className="d_icon">
                                <ShoppingCartIcon />
                            </div>
                            <div>
                                <h3>Orders</h3>
                                <p>{order}</p>
                            </div>
                        </div>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard
