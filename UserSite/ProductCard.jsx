import React from 'react'
import "./ProductCard.css"

const ProductCard = () => {
    return (
        <div id="product">
            <div className="main">
                <div className="row">
                    <div className="col">
                        <img src="usersite_img/charcoal.png" alt=""></img>
                        <h2>Peel Of Mask</h2>
                        <p>&#8377;250</p>
                    </div>
                    <div className="col">
                        <img src="usersite_img/FaceScrub.png" alt=""></img>
                        <h2>Face Scrub</h2>
                        <p>&#8377;300</p>
                    </div>
                    <div className="col">
                        <img src="usersite_img/day-cream.png" alt=""></img>
                        <h2>Peel Of Mask</h2>
                        <p>&#8377;250</p>
                    </div>
                    <div className="col">
                        <img src="usersite_img/body-wash.png" alt=""></img>
                        <h2>Face Scrub</h2>
                        <p>&#8377;300</p>
                    </div>
                    <div className="col">
                        <img src="usersite_img/Mud-mask.png" alt=""></img>
                        <h2>Mud-mask</h2>
                        <p>&#8377;300</p>
                    </div>
                    <div className="col">
                        <img src="usersite_img/SleepingMask.png" alt=""></img>
                        <h2>SleepingMask</h2>
                        <p>&#8377;300</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
