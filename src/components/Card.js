import { CARD_IMG } from "../utils/constants";

const Card = (props) => {
    const { avgRating, cuisines, name, cloudinaryImageId } = props.resData.data;

    return (
        <div className='card'>
            <div className='card__img'>
                <img src={CARD_IMG + cloudinaryImageId} />
            </div>

            <h2 className='card_hed'>
                {name}
            </h2>

            <p className='cousines'>
                {cuisines.join(",")}
            </p>

            <div className="star_rating">
                <p> {avgRating} ⭐</p>
            </div>
        </div>
    )
}

export default Card; 