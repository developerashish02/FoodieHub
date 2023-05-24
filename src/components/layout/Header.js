import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const cartItems = useSelector((store) => store.cart.items);

	return (
		<div className="flex items-center w-full px-4 py-4 h-20 bg-white">
			<div>
				<Link to={"/"}>
					<h2 className="font-bold font-serif text-2xl text-red-500">
						FoodieHub
					</h2>
				</Link>
			</div>

			<ul className="flex space-x-12 justify-end w-full py-4 text-base ">
				<li className="hover:text-orange-600 ">
					<i className="fa-solid fa-house mr-1"></i>
					<Link to="/">Home</Link>
				</li>
				<li className="hover:text-orange-600">
					<i className="fa-solid fa-address-card  mr-1"></i>
					<Link to="/about">About</Link>
				</li>
				<li className="hover:text-orange-600">
					<i className="fa-solid fa-address-book  mr-1"></i>
					<Link to="/contact-us">Contact Us</Link>
				</li>
				<li className="hover:text-orange-600">
					<i className="fa-solid fa-cart-shopping  mr-1"></i>
					<Link to="/cart">Cart ({cartItems.length})</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
