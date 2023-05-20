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
		<div className="body">
			<div className="flex justify-center my-4">
				<input
					type="text"
					placeholder="Search..."
					onChange={(e) => setSearchText(e.target.value)}
					className="h-10 bottom-2 w-96 px-4 py-4 outline-none"
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
			<div className="flex flex-wrap gap-6 justify-center mx-4 overflow-x-hidden">
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
