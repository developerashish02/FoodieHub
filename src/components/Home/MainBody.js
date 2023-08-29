import React, { useEffect, useState } from "react";
import ShimmerCard from "../UI/ShimmerCard";
import LostConnection from "../pages/LostConnection";
import Card from "../card/Card";
import SearchNotFound from "../UI/SearchNotFound";
import { Link } from "react-router-dom";
import { filterRestaurants } from "../utils/helper";
import useGetRestaurant from "../../hooks/useGetRestaurant";
import useIsOnline from "../../hooks/useIsOnline";


const MainBody = () => {
	const { handleSearchSubmit, filterRestaurant, setSearch, restaurant } = useGetRestaurant();
	const isOnline = useIsOnline();


	if (!isOnline) {
		return <LostConnection />;
	}

	return (
		<div className="bg-gray-50">
			<div className="flex justify-center ">
				<input
					type="text"
					placeholder="Search for restaurants and food..."
					onChange={(e) => setSearch(e.target.value)}
					className="h-10 bottom-2 w-96 px-4 py-4 outline-none border-solid border-2 border-gray-300"
				/>
				<button
					type="button"
					className="h-10 w-20 bg-zinc-900 text-white"
					onClick={handleSearchSubmit}
				>
					Search
				</button>
			</div>

			{restaurant?.length === 0 && <ShimmerCard />}
			<div className="grid grid-cols-4 gap-4 place-content-center mt-4 mx-3">
				{filterRestaurant?.map((restaurant) => (
					<Link
						to={"/card-detail/" + restaurant?.info?.id}
						key={restaurant?.info?.id}
					>
						<Card resData={restaurant} />
					</Link>
				))}
			</div>

			{/* <div className="res-container">
                {filterRestaurant?.map(restaurant => (
                    <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                        <Restaurant resObj={restaurant} />
                    </Link>
                ))}
            </div> */}

			{filterRestaurant?.length === 0 && <SearchNotFound />}
		</div >
	);
};

export default MainBody;
