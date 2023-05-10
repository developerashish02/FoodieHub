import React, { useEffect, useState } from "react";
import { SWIGGY_API } from "./utils/constants";
import Card from "./card/Card";
import "../../public/css/MainBody.css";
import { Link } from "react-router-dom";
import ShimmerCard from "./UI/ShimmerCard";
import { filterRestaurant } from "./utils/helper";
import useGetRestaurant from "../hooks/useGetRestaurant";

const MainBody = () => {
    const [searchText, setSearchText] = useState("");
    const restaurantData = useGetRestaurant();
    const [filterRestaurants, setFilterRestaurants] = useState([]);

    useEffect(() => {
        setFilterRestaurants(restaurantData);
    }, [restaurantData])

    return (
        <div className="body">
            <div className="search-form">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    type="button"
                    onClick={() => {
                        const filter = filterRestaurant(restaurantData, searchText);
                        setFilterRestaurants(filter);
                    }}
                >
                    Search
                </button>
            </div>

            {restaurantData.length === 0 && <ShimmerCard />}
            <div className="cards">
                {filterRestaurants?.map((restaurant) => (
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
