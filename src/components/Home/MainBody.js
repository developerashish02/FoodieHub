import React, { useState } from "react";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import ShimmerCard from "../UI/ShimmerCard";
import "./MainBody.css";
import "../../../index.css";
import useGetRestaurant from "../utils/useGetRestaurant";
import useIsOnline from "../utils/useIsOnline";
import LostConnection from "../pages/LostConnection";

const MainBody = () => {
	const [searchText, setSearchText] = useState("");
	const [restaurant, filterRestaurant] = useGetRestaurant();
	const isOnline = useIsOnline();

	const handleSearch = () => {
		// const filterData = restaurant?.filter((restaurant) =>
		// 	restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
		// );
		// setFilterRestaurant(filterData);
	};

	if (!isOnline) {
		return <LostConnection />
	}

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

			{restaurant.length === 0 && <ShimmerCard />}
			<div className="cards">
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
