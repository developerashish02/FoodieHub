import ShimmerCard from "../UI/ShimmerCard";
import { CARD_IMG } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurant from "../../hooks/useRestaurant";
import RestaurantMenu from "./RestaurantMenu";

const CardDetail = () => {
	const { id } = useParams();
	const [restaurant, restaurantMenu] = useRestaurant(id);
	const { name, cuisines, cloudinaryImageId, areaName, avgRating, locality } =
		restaurant;

	return (
		<div className="bg-white mx-20 mt-8  ">
			<div className="grid grid-cols-4 gap-4">
				<div className="col-span-3 h-64">
					<img
						src={CARD_IMG + cloudinaryImageId}
						alt="Food"
						className="w-full h-full  object-cover 	"
					/>
				</div>
				<div className="h-64 ">
					<img
						src={CARD_IMG + cloudinaryImageId}
						alt="Food"
						className="w-full h-full  object-cover	"
					/>
				</div>
			</div>
			<div className="mt-4 flex justify-between mb-4">
				<div>
					<h1 className="font-bold text-3xl"> {name} </h1>
					<p className="font-thin">{cuisines?.join(",")}</p>
					<p className="-mt2 text-sm">
						{areaName} , {locality}
					</p>
				</div>
				<div className="mt-2 flex ">
					<div className="mx-2">
						<p className="bg-green-500 w-16 text-center text-white rounded-md">
							{" "}
							{avgRating} 🌟{" "}
						</p>
					</div>
				</div>
			</div>

			{/* restaurant menu */}
			<hr />
			<div className="mt-4 m-auto ml-6">
				<h1 className="font-bold text-2xl text-center">Menu</h1>
				{restaurantMenu?.map((resMenu) => (
					<RestaurantMenu restaurant={resMenu?.card?.info} />
				))}
			</div>
		</div>
	);
};

export default CardDetail;
