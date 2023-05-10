import { useState, useEffect } from "react";
import { SWIGGY_API } from "../components/utils/constants";

const useGetRestaurant = () => {
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        getRestaurant();
    }, []);

    const getRestaurant = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    };

    return restaurantData;
};

export default useGetRestaurant;
