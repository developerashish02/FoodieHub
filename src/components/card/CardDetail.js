import ShimmerCard from "../UI/ShimmerCard";
import styles from "./CardDetail.module.css";
import { CARD_DETAIL_API, CARD_IMG } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CardDetail = () => {
	const { id } = useParams();
	const [restaurant, setRestaurant] = useState({});
	const { name, cuisines, costForTwo, cloudinaryImageId } = restaurant;

	useEffect(() => {
		getCardDetail();
	}, []);

	async function getCardDetail() {
		const response = await fetch(CARD_DETAIL_API + id);
		const data = await response.json();
		setRestaurant(data?.data?.cards[0]?.card?.card?.info);
		console.log(data?.data?.cards[0]?.card?.card?.info);
	}

	return !restaurant ? (
		<ShimmerCard />
	) : (
		<div className={styles.foodDetail}>
			<div className={styles.foodImage}>
				<img src={CARD_IMG + cloudinaryImageId} alt="Food" />
			</div>
			<div className={styles.foodInfo}>
				<h1 className={styles.foodTitle}> {name} </h1>
				<p className={styles.foodDescription}>{cuisines?.join(",")}</p>
				<div className={styles.foodMeta}>
					<span className={styles.foodPrice}>Rs {costForTwo / 100}</span>
					<button className={styles.orderButton}>Order Now</button>
				</div>
			</div>
		</div>
	);
};

export default CardDetail;
