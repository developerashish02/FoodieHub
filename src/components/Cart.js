import { useSelector } from "react-redux";
import CartDetail from "./CartDetail";


const Cart = () => {
    const cart = useSelector((store) => store.cart);

    const price = Math.round(cart?.totalPrice)


    return (
        <div className="w-3/4 m-auto my-4">
            <h1 className="font-bold text-2xl">Your Orders</h1>
            {cart?.items.map((item) => {
                return <CartDetail restaurant={item} key={item.id} />;
            })}

            {cart.items.length !== 0 && <button className="font-bold bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-300">TO PAY
                : {price}</button>}
        </div>
    );
};

export default Cart;
