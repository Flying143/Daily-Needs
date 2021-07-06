import React, { useEffect, useState } from 'react'
import { db } from "../Firebase"
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import "./Css/Customer.css"

const Order = () => {
    const [uinfo, setUinfo] = useState([]);

    useEffect(() => {
        // get the all user data 
        db.collection("order_master").get().then((elements) => {
            setUinfo(elements.docs.map(doc => doc.data()))
        });
    });

    return (
        <div id="customer">
            <h1>All User Details</h1>
            <div className="t_data">
                <table cellSpacing="10" className="t_content">

                    {/* table headers */}

                    <tr>
                        <th>User ID</th>
                        <th>Order Address</th>
                        <th>Order Amount</th>
                        <th>Order Date</th>
                        <th></th>
                        <th></th>
                    </tr>

                    {/* Display the all user data */}

                    {uinfo.map((uinfo) => (
                        <tr>
                            <td>{uinfo.u_id}</td>
                            <td>{uinfo.o_addr}</td>
                            <td>{uinfo.o_amount}</td>
                            {/* <td>{uinfo.o_date}</td> */}
                            <td><EditIcon /></td>
                            <td><DeleteIcon /></td>
                        </tr>
                    ))}

                </table>
            </div>
        </div>
    )
}

export default Order
