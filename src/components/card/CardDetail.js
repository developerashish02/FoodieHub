import ShimmerCard from "../UI/ShimmerCard";
import styles from "./CardDetail.module.css";
import { CARD_DETAIL_API, CARD_IMG } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantDara";

const CardDetail = () => {
	const { id } = useParams();
	// const [restaurant, setRestaurant] = useState({});
	const restaurant = useRestaurantData(id);
	const { name, cuisines, costForTwo, cloudinaryImageId } = restaurant;

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
