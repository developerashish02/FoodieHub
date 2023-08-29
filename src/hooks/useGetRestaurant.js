import { useState, useEffect } from "react";
import { ALL_RESTAURANT } from "../components/utils/constants";
// import { ALL_RESTAURANT } from "../utils/constants";

const useGetRestaurant = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getAllRestaurants();
    }, [])

    const handleSearchSubmit = () => {
        const filterRes = restaurant.filter((restaurant) =>
            restaurant?.info?.name?.toLowerCase()?.includes(search?.toLowerCase())
        );

        setFilterRestaurant(filterRes);
    };

    // fetching all restaurants data from swiggy public api  
    const getAllRestaurants = async () => {
        try {
            const response = await fetch(ALL_RESTAURANT);
            const data = await response.json();
            const restaurants =
                data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants;

            setFilterRestaurant(restaurants);
            setRestaurant(restaurants);

        } catch (error) {
            console.log("error while fetching data" + error);
        }
    }


    // filterRestaurant restaurant 
    return {
        filterRestaurant,
        restaurant,
        setSearch,
        handleSearchSubmit
    }
}

export default useGetRestaurant; 