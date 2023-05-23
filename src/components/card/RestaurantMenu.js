import { CARD_IMG } from "../utils/constants";

const RestaurantMenu = (props) => {
	console.log(props.restaurant, "Res Menu...");

	const { name, price, description, isBestseller, imageId } = props.restaurant;

	return (
		<>
			<hr className="my-4" />
			<div className="flex content-center">
				<div className="p-2 mb-6 w-4/5">
					{isBestseller && (
						<div className="space-x-2">
							<span>⭐</span>
							<span className="text-orange-300 ">Bestseller</span>
						</div>
					)}
					<div className="">
						<h3 className="text-lg font-medium">{name}</h3>

						<p className="text-base">Rs {price / 100}</p>

						<p className="text-sm font-thin">{description}</p>
					</div>
				</div>

				<div className="w-36 h-36 rounded-lg mt-4">
					<img
						src={CARD_IMG + imageId}
						alt=""
						className=" object-contain rounded-lg"
					/>
				</div>
			</div>
		</>
	);
};

export default RestaurantMenu;
