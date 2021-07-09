import React, { useEffect, useState } from 'react'
import { db } from "../Firebase"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import "./Css/Customer.css"

const Customer = () => {

    const [uinfo, setUinfo] = useState([]);
    const [uid, setUid] = useState("");
    const [uname, setUname] = useState("");
    const [uemail, setUemail] = useState("");
    const [uphno, setUphno] = useState("");
    const [uaddr, setUaddr] = useState("");

    useEffect(() => {
        // get the all user data 
        db.collection("user_master").get().then((elements) => {
            setUinfo(elements.docs.map(doc => doc))
        });
    });

    var data = document.getElementById("form");

    function displayData() {

        var table = document.getElementById("table");
        if (data.style.display === "none") {
            data.style.display = "flex";
            table.style.opacity = "0.3";
        }
        else {
            data.style.display = "none";
            table.style.opacity = "1";
        }

    }

    //function to update the user data
    function updateData() {
        db.collection("user_master").doc(uid).update({
            u_name: uname,
            u_email: uemail,
            u_phno: uphno,
            u_addr: uaddr
        })
        displayData();
        alert("Data Updated Successfully..")
    }

    return (
        <div id="customer">
            <div id="form">
                <h2 style={{ paddingBottom: "2%" }}>Edit Details</h2>

                <div className="f_content">
                    <h4 className="f_text">User Name:</h4>
                    <input type="text" className="f_input" value={uname} onChange={(e) => setUname(e.target.value)}></input>
                </div>
                <div className="f_content">
                    <h4 className="f_text">Email ID:</h4>
                    <input type="email" className="f_input" value={uemail} onChange={(e) => setUemail(e.target.value)}></input>
                </div>
                <div className="f_content">
                    <h4 className="f_text">Phone No:</h4>
                    <input type="text" className="f_input" value={uphno} onChange={(e) => setUphno(e.target.value)}></input>
                </div>
                <div className="f_content">
                    <h4 className="f_text">Address:</h4>
                    <input type="text" className="f_input" value={uaddr} onChange={(e) => setUaddr(e.target.value)}></input>
                </div>
                <div className="submit">
                    <input type="submit" value="Submit" className="btn" onClick={updateData}></input>
                </div>

            </div>

            <h1>All User Details</h1>
            <div className="t_data" id="table">
                <table cellSpacing="10" className="t_content">

                    {/* table headers */}

                    <tr>
                        <th>User Name</th>
                        <th>Email ID</th>
                        <th>Phone No.</th>
                        <th>Address</th>
                        <th>Password</th>
                        <th></th>
                        <th></th>
                    </tr>

                    {/* Display the all user data */}

                    {uinfo.map((uinfo) => (
                        <tr>
                            <td>{uinfo.data().u_name}</td>
                            <td>{uinfo.data().u_email}</td>
                            <td>{uinfo.data().u_phno}</td>
                            <td>{uinfo.data().u_addr}</td>
                            <td>{uinfo.data().u_pass}</td>
                            <td><IconButton onClick={displayData}><EditIcon className="t_icon" onClick={() => {
                                setUid(uinfo.id)
                                setUname(uinfo.data().u_name)
                                setUemail(uinfo.data().u_email)
                                setUphno(uinfo.data().u_phno)
                                setUaddr(uinfo.data().u_addr)
                            }} /></IconButton></td>
                            <td><IconButton><DeleteIcon className="t_icon" onClick={() => {
                                db.collection("user_master").doc(uinfo.id).delete();
                                alert("User Deleted Successfully")
                            }} /></IconButton></td>
                        </tr>
                    ))}

                </table>
            </div>
        </div>
    )
}

export default Customer
