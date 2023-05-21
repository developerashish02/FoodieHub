import ShimmerCard from "../UI/ShimmerCard";
import { CARD_IMG } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurant from "../../hooks/useRestaurant";

const CardDetail = () => {
	const { id } = useParams();
	const restaurant = useRestaurant(id);
	const { name, cuisines, costForTwo, cloudinaryImageId } = restaurant;

	return (
		<div className="bg-white mx-20 mt-8  ">
			<div className="grid grid-cols-4 gap-4">
				<div className="col-span-3 h-64">
					<img src={CARD_IMG + cloudinaryImageId} alt="Food" className="w-full h-full  object-cover 	" />
				</div>
				<div className="h-52 ">
					<img src={CARD_IMG + cloudinaryImageId} alt="Food" className="w-full h-full  object-cover	" />
				</div>
			</div>
			<div className="">
				<h1 className="font-bold text-2xl"> {name} </h1>
				<p className="font-thin">{cuisines?.join(",")}</p>
				<div className="mt-4">
					<span >Rs {costForTwo / 100}</span>
					<button className="w-full bg-orange-400 text-center px-4 py-2 ">Order Now</button>
				</div>
			</div>
		</div>
	);
};

export default CardDetail;
