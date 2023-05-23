import { useState, useEffect } from "react";
import { CARD_DETAIL_API } from "../components/utils/constants";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState({});
    const [restaurantMenu, setRestaurantMenu] = useState([]);


    useEffect(() => {
        getCardDetail();
    }, []);

    const getCardDetail = async () => {
        const response = await fetch(CARD_DETAIL_API + id);
        const data = await response.json();
        console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        setRestaurant(data?.data?.cards[0]?.card?.card?.info);
        setRestaurantMenu(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    };

    return [restaurant, restaurantMenu];
};

export default useRestaurant;
