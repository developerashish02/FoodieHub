import React from "react";
import "./Shimmer.css";

const ShimmerCard = () => {
    return (
        <div className="grid grid-cols-4 gap-4 place-content-center mt-4 mx-3">
            {Array(12)
                .fill("")
                .map((shimmerCard, index) => (
                    <div className="card-container shimmer-effect" key={index}></div>
                ))}
        </div>
    );
};

export default ShimmerCard;
