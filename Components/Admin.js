import React from 'react';
import "./Css/Admin.css"
import { Grid } from "@material-ui/core"

export default function Admin() {
    return (
        <div className="admin">
            <h1 className="m_title">Welcome To Flying Eagle Admin Site</h1>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <div className="card">
                        <div className="c_img">
                            <img src="img/FlyingEagle.png" alt="" />
                        </div>
                        <div className="content">
                            <h2 className="c_title">Flying Eagle</h2>
                            <p className="c_desc">Our Portfolio Website</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="card">
                        <div className="c_img">
                            <img src="img/FlyingEagle.png" alt="" />
                        </div>
                        <div className="content">
                            <h2 className="c_title">Flying Eagle</h2>
                            <p className="c_desc">Some Description</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}