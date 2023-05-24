import React from "react";

const ShimmerCard = () => {
    return (
        <div className="grid grid-cols-4 gap-4 place-content-center mt-4 mx-9">
            {Array(12)
                .fill("")
                .map((shimmerCard, index) => (
                    <div className="w-72 h-80  bg-gray-300  " key={index}></div>
                ))}
        </div>
    );
};

export default ShimmerCard;
