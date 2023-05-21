import { useState, useEffect } from "react";
import { CARD_DETAIL_API } from "../components/utils/constants";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState({});


    useEffect(() => {
        getCardDetail();
    }, []);

    const getCardDetail = async () => {
        const response = await fetch(CARD_DETAIL_API + id);
        const data = await response.json();
        console.log(data, "Fetch")
        setRestaurant(data?.data?.cards[0]?.card?.card?.info);
    };

    return restaurant;
};

export default useRestaurant;
