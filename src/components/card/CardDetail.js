import ShimmerCard from "../UI/ShimmerCard";
import { CARD_IMG } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurant from "../../hooks/useRestaurant";

const CardDetail = () => {
	const { id } = useParams();
	const restaurant = useRestaurant(id);
	const {
		name,
		cuisines,
		costForTwo,
		cloudinaryImageId,
		areaName,
		avgRating,
		costForTwoMessage,
		locality,
	} = restaurant;

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
			<div className="mt-4 flex justify-between">
				<div>
					<h1 className="font-bold text-3xl"> {name} </h1>
					<p className="font-thin">{cuisines?.join(",")}</p>
					<p className="-mt2 text-sm">
						{areaName} , {locality}
					</p>
					<button className="bg-green-500 px-4 mt-4 text-white rounded-lg h-8 ">
						ADD
					</button>
				</div>
				<div className="mt-2 flex ">
					<span>Rs {costForTwo / 100}</span>

					<div className="mx-2">
						<p className="bg-green-500 w-16 text-center text-white rounded-md">
							{" "}
							{avgRating} 🌟{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardDetail;
