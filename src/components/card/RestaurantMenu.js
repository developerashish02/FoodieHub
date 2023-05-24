import { useDispatch } from "react-redux";
import { CARD_IMG } from "../utils/constants";
import { addToCart } from "../../features/cartSlice";

const RestaurantMenu = (props) => {
	const { name, price, description, isBestseller, imageId, quntity } =
		props.restaurant;
	// console.log(props.restaurant)
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		const restaurant = {
			...props.restaurant,
			quntity: 1,
		};
		dispatch(addToCart(restaurant));
	};

	return (
		<>
			<hr className="my-4" />
			<div className="flex content-center space-x-6">
				<div className="p-2 mb-6 w-4/5">
					{isBestseller && (
						<div className="space-x-2">
							<span>⭐</span>
							<span className="text-orange-300 ">Bestseller</span>
						</div>
					)}
					<div className="">
						<h3 className="text-lg font-medium">{name}</h3>

						<p className="text-base">Rs {Number(price / 100)}</p>

						<p className="text-sm font-thin">{description}</p>
					</div>
				</div>

				<div className="w-28 h-20 rounded-lg  relative flex items-center justify-center ">
					{imageId && (
						<img
							src={CARD_IMG + imageId}
							alt=""
							className="rounded-lg opacity-60 w-full h-full object-cover"
						/>
					)}

					<button
						className="px-6 rounded-xl font-bold absolute bottom-[-1.2rem]  p-2 bg-orange-400 text-white text-sm"
						onClick={handleAddToCart}
					>
						ADD
					</button>
				</div>
			</div>
		</>
	);
};

export default RestaurantMenu;
