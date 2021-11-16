import React from "react";
import './Coping.css';

const Coping = () => {
    return (
        <div className="coping-box">
            <h1 className="title">Coping Mechanisms</h1>
            <div className="coping">
                <div className="anxiety">
                    <p>Anxiety</p>
                    <p className="anx-p">.................</p>
                </div>
                <div className="depression">
                    <p>Depression</p>
                    <p>.................</p>
                </div>
                <div className="ocd">
                    <p>OCD</p>
                    <p>.................</p>
                </div>
                <div className="trauma">
                    <p>Trauma</p>
                    <p>.................</p>
                </div>
                <div className="trauma">
                    <p>Trauma</p>
                    <p>.................</p>
                </div>
                <div className="ptsd">
                    <p>PTSD</p>
                    <p>.................</p>
                </div>
            </div>
        </div>
    )
}

export default Coping;