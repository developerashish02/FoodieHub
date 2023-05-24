const ShimmerDeatils = () => {
    return (
        <>
            <div className="bg-gray-300 mx-20 mt-8  ">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3 h-64"></div>
                    <div className="h-64 "></div>
                </div>
            </div>

            <div className=" mt-4 mx-20  border-2 ">
                <div className="flex flex-col gap-2 ">
                    {Array(6)
                        .fill("")
                        .map((shimmerCard, index) => (
                            <div className=" w-full h-36 bg-gray-300  " key={index}></div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default ShimmerDeatils;
