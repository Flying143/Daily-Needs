import React, { useState, useEffect } from "react";
import "./Css/ProductMaster.css";
import { db, storage } from "../Firebase";
import firebase from "firebase";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import "./Css/Customer.css"

function ProductMaster() {
  const [pdcName, setPdcName] = useState("");
  const [pdcDesc, setPdcDesc] = useState("");
  const [pdcPrice, setPdcPrice] = useState("");
  const [pdcImage, setPdcImage] = useState(null);

  //set the table data
  const [info, setInfo] = useState([]);

  useEffect(() => {
    // get the all user data 
    db.collection("product_master").get().then((elements) => {
      setInfo(elements.docs.map(doc => doc.data()))
    });
  });

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fillRef = storageRef.child(`ProductImages/${file.name}`);
    await fillRef.put(file).then(() => {
      alert("Image Uploaded Success Fully 🥳", "Image Name Is: ", file.name);
    });
    setPdcImage(await fillRef.getDownloadURL());
  };

  const formSubmit = (e) => {
    e.preventDefault();

    let nameErr = "Enter Product Name ☠️";
    let descErr = "Enter Product Description ☠️";
    let priceErr = "Enter Product Price ☠️";

    if (pdcName.length === 0) {
      document.getElementById("nameErr").innerHTML = nameErr;
    } else if (pdcDesc.length === 0) {
      document.getElementById("descErr").innerHTML = descErr;
    } else if (pdcPrice.length === 0) {
      document.getElementById("priceErr").innerHTML = priceErr;
    } else {
      //Add Product Data And Description In DataBase

      db.collection("product_master").add({
        p_name: pdcName,
        p_desc: pdcDesc,
        p_price: pdcPrice,
        p_main_img: pdcImage,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setPdcName("");
      setPdcDesc("");
      setPdcPrice("");

      let mass = "Product Has Been Added 🥳";
      alert(mass);
      console.log(mass);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="heading">
          <h2 className="titleText">Product Master</h2>
        </div>
        <div className="item">
          <form onSubmit={formSubmit} className="textContent">
            <div className="left">
              <label className="label">Product Name :</label>
              <input
                type="text"
                className="inputField"
                onChange={(e) => setPdcName(e.target.value)}
                value={pdcName}
              />
              <p className="errMessages" id="nameErr"></p>
              <br />

              <label className="label">Product Description</label>
              <textarea
                name="pd Description"
                cols="30"
                rows="10"
                maxLength="100"
                className="inputField"
                onChange={(e) => setPdcDesc(e.target.value)}
                value={pdcDesc}
              ></textarea>
              <p className="errMessages" id="descErr"></p>
              <br />
            </div>

            <div className="right">
              <label className="label">Product Prices</label>
              <input
                type="number"
                className="inputField"
                onChange={(e) => setPdcPrice(e.target.value)}
                value={pdcPrice}
              />
              <p className="errMessages" id="priceErr"></p>
              <br />

              <label className="label">Select Product 1. Image</label>
              <br />
              <input type="file" onChange={handleChange} />
              <p className="errMessages" id="imageErr"></p>
              <br />
              <div className="addProduct">
                <button className="addBtn" type="submit">
                  Add Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Display the all product data */}

      <div className="t_data" id="table">
        <table cellSpacing="10" className="t_content">

          {/* table headers */}

          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>DateTime</th>
            <th></th>
            <th></th>
          </tr>

          {/* Display the all user data */}

          {info.map((info) => (
            <tr>
              <td>{info.p_name}</td>
              <td width="250px">{info.p_desc}</td>
              <td>{info.p_price}</td>
              {/* <td>{info.}</td>
              <td>{info.}</td> */}
              <td><IconButton><EditIcon className="t_icon" /></IconButton></td>
              <td><IconButton><DeleteIcon className="t_icon" /></IconButton></td>
            </tr>
          ))}

        </table>
      </div>
    </div>
  );
}

export default ProductMaster;
