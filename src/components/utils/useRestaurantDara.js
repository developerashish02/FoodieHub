import { CARD_DETAIL_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantData = (id) => {
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getCardDetail();
    }, []);

    async function getCardDetail() {
        const response = await fetch(CARD_DETAIL_API + id);
        const data = await response.json();
        setRestaurant(data?.data?.cards[0]?.card?.card?.info);
    }

    return restaurant;
};

export default useRestaurantData;
