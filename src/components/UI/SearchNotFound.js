
// import { NOT_FOUND } from "../utils/constants"
import { NOT_FOUND_IMG } from "../utils/constants";

const SearchNotFound = () => {
    return (
        <div className="shadow-md rounded-lg  m-auto  w-[350px] my-4 flex flex-col items-center p-10">
            <div>
                <img src={NOT_FOUND_IMG} alt="search.." />
            </div>
            <div>
                <h1 className="text-2xl mb-2 font-bold text-center">Restaurant Not Found</h1>
            </div>

            <div className="w-60 ">
                <p className=" text-center font-thin">
                    Whoops this restaurant not avalible for this moment {" "}
                </p>
            </div>
        </div>
    );
};

export default SearchNotFound;
