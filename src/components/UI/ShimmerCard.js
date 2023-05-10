import React from "react";
import "./Shimmer.css";

const ShimmerCard = () => {
    return (
        <div className="cards shimmer">
            {Array(12)
                .fill("")
                .map((shimmerCard, index) => (
                    <div className="card-container shimmer-effect" key={index}></div>
                ))}
        </div>
    );
};

export default ShimmerCard;
