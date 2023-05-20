import { CARD_IMG } from "../utils/constants";

const Card = (props) => {
	const { avgRating, cuisines, name, cloudinaryImageId } = props.resData.data;

	return (
		<div className="w-72 h-auto rounded-lg bg-white shadow-md p-4">
			<div className="">
				<img src={CARD_IMG + cloudinaryImageId} className="w-auto h-auto object-cover" />
			</div>

			<h2 className="">{name}</h2>

			<p className="whitespace-normal overflow-hidden">{cuisines.join(",")}</p>

			<div className="">
				<p> {avgRating} ⭐</p>
			</div>
		</div>
	);
};

export default Card;
