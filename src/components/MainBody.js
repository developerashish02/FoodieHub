import React, { useEffect, useState } from "react";
import { SWIGGY_API } from "./utils/constants";
import Card from "./card/Card";
import "../../public/css/MainBody.css";
import { Link } from "react-router-dom";
import ShimmerCard from "./UI/ShimmerCard";

const MainBody = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurantData, setRestaurantData] = useState([]);

    console.log("Render");

    useEffect(() => {
        getRestaurant();
    }, []);

    const getRestaurant = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    };

    const handleSearch = () => {
        const filterData = RES_LIST_DATA.filter((restaurant) =>
            restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
        );
        setRestaurantData(filterData);
    };

    // show shimmer ui insted of loder

    return (
        <div className="body">
            <div className="search-form">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button type="button" onClick={handleSearch}>
                    Search
                </button>
            </div>

            {restaurantData.length === 0 && <ShimmerCard />}
            <div className="cards">
                {restaurantData?.map((restaurant) => (
                    <Link
                        to={"/card-detail/" + restaurant.data.id}
                        key={restaurant.data.id}
                    >
                        <Card resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MainBody;
