import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import ShimmerCard from "../UI/ShimmerCard";
import LostConnection from "../pages/LostConnection";
import useGetRestaurant from "../../hooks/useGetRestaurant";
import { filterRestaurants } from "../utils/helper";
import useIsOnline from "../../hooks/useIsOnline";

const MainBody = () => {
	const [searchText, setSearchText] = useState("");
	const getRestaurants = useGetRestaurant();
	const [filterRestaurant, setFilterRestaurant] = useState([]);
	const isOnline = useIsOnline();

	useEffect(() => {
		setFilterRestaurant(getRestaurants);
	}, [getRestaurants]);

	if (!isOnline) {
		return <LostConnection />;
	}

	return (
		<div className="bg-gray-50">
			<div className="flex justify-center ">
				<input
					type="text"
					placeholder="Search for restaurants and food..."
					onChange={(e) => setSearchText(e.target.value)}
					className="h-10 bottom-2 w-96 px-4 py-4 outline-none border-solid border-2 border-gray-300"
				/>
				<button
					type="button"
					className="h-10 w-20 bg-zinc-900 text-white"
					onClick={() => {
						const filter = filterRestaurants(getRestaurants, searchText);
						setFilterRestaurant(filter);
					}}
				>
					Search
				</button>
			</div>

			{filterRestaurant?.length === 0 && <ShimmerCard />}
			<div className="grid grid-cols-4 gap-4 place-content-center mt-4 mx-3">
				{filterRestaurant?.map((restaurant) => (
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
