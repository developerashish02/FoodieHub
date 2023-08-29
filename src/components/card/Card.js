import { CARD_IMG } from "../utils/constants";

const Card = (props) => {
	// const { avgRating, cuisines, name, cloudinaryImageId } = props.resData.data;
	const { resData } = props;
	const { name, avgRating, cuisines, cloudinaryImageId, areaName } = resData.info;

	return (
		<div className="w-72 h-auto rounded-lg  shadow-md p-4 bg-white ">
			<div className="h-40">
				<img
					src={CARD_IMG + cloudinaryImageId}
					className="h-full w-full object-cover"
				/>
			</div>

			<h2 className="text-xl mt-2 font-bold">{name}</h2>

			<p className="font-thin overflow-hidden text-ellipsis">{cuisines.join(",")}</p>

			<div className="bg-green-500 h-auto w-16 text-center px-2 my-2 text-white">
				<p> {avgRating} ⭐</p>
			</div>
		</div>
	);
};

export default Card;
