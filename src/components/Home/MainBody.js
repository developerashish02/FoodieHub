import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import ShimmerCard from "../UI/ShimmerCard";
import "./MainBody.css";
import "../../../index.css";
import LostConnection from "../pages/LostConnection";
import useGetRestaurant from "../../hooks/useGetRestaurant";
import { filterRestaurants } from "../utils/helper";
import useIsOnline from "../../hooks/useIsOnline";

const MainBody = () => {
	const [searchText, setSearchText] = useState("");
	const getRestaurants = useGetRestaurant()
	const [filterRestaurant, setFilterRestaurant] = useState([]);
	const isOnline = useIsOnline();

	useEffect(() => {
		setFilterRestaurant(getRestaurants)
	}, [getRestaurants])


	if (!isOnline) {
		return <LostConnection />;
	}

	return (
		<div className="body">
			<div className="search-form">
				<input
					type="text"
					placeholder="Search..."
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button type="button" onClick={() => {
					const filter = filterRestaurants(getRestaurants, searchText)
					setFilterRestaurant(filter);
				}}>
					Search
				</button>
			</div>

			{filterRestaurant?.length === 0 && <ShimmerCard />}
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
