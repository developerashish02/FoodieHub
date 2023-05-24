import { useDispatch, useSelector } from "react-redux";
import { CARD_IMG } from "./utils/constants";
import { addToCart, removeItem } from "../features/cartSlice";

const CartDetail = (props) => {
    const { name, price, id, imageId, quntity } = props.restaurant;
    const dispatch = useDispatch();

    const handleaddToCart = () => {
        dispatch(addToCart(props.restaurant));
    };

    const handleRemoveItem = () => {
        dispatch(removeItem(id));
    };

    return (
        <>
            <div className="flex justify-between p-4 my-4 border-2 border-orange-400-600 rounded-md">
                <div className=" flex space-x-6">
                    {imageId && (
                        <div className="w-14">
                            <img src={CARD_IMG + imageId} alt={name} />
                        </div>
                    )}

                    <div>
                        <h2 className="font-bold">{name}</h2>
                        <p>Rs {(price / 100).toFixed(2)}</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <button
                        className="px-2 py-1 border border-gray-300 rounded-md mr-2"
                        onClick={handleRemoveItem}
                    >
                        -
                    </button>
                    <span className="font-bold mr-2"> {quntity}</span>
                    <button
                        className="px-2 py-1 border border-gray-300 rounded-md"
                        onClick={handleaddToCart}
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartDetail;
