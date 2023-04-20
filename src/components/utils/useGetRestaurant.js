import { SWIGGY_API } from "./constants";
import { useState, useEffect } from "react";

const useGetRestaurant = () => {
	const [restaurant, setRestaurant] = useState([]);
	const [filterRestaurant, setFilterRestaurant] = useState([]);

	useEffect(() => {
		getRestaurantData();
	}, []);

	async function getRestaurantData() {
		try {
			const response = await fetch(SWIGGY_API);
			const data = await response.json();
			const res = data?.data?.cards[2]?.data?.data?.cards;
			setRestaurant(res);
			setFilterRestaurant(res);
		} catch (error) {
			console.error(error);
		}
	}

	return [restaurant, filterRestaurant];
};

export default useGetRestaurant;
