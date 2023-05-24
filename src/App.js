import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Header from "./components/layout/Header";
import MainBody from "./components/Home/MainBody";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CardDetail from "./components/card/CardDetail";
import ErrorPage from "./components/pages/ErrorPage";
import LostConnection from "./components/pages/LostConnection";
import useIsOnline from "./hooks/useIsOnline";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";
import ShimmerDeatils from "./components/UI/ShimmerDetails";
// lazy loding
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ContactUs = lazy(() => import("./components/pages/ContactUs"));
const Cart = lazy(() => import("./components/Cart"));

const App = () => {
	const isOnline = useIsOnline();

	if (!isOnline) {
		return <LostConnection />;
	}

	return (
		<div className="">
			<Provider store={store}>
				<Header />
				<Outlet />
			</Provider>
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/about",
				element: (
					<Suspense fallback={<h1>Loding...</h1>}>
						<AboutPage />
					</Suspense>
				),
			},
			{
				path: "/",
				element: <MainBody />,
			},
			{
				path: "/contact-us",
				element: (
					<Suspense fallback={<h1>Loding....</h1>}>
						<ContactUs />
					</Suspense>
				),
			},
			{
				path: "/card-detail/:id",
				element: <CardDetail />,
			},
			{
				path: "/cart",
				element: (
					<Suspense fallback={<ShimmerDeatils />}>
						<Cart />
					</Suspense>
				),
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

/**  
 *create store 
 *  1) configureStore() - RTK 
 * 
 * provide my store to app - React-redux
 *  2) <Provider store={store}> 
 *          <App/>
 *     <Provider/> 
 * 
 * 3) Slice -  RTK 
 *      createSlice({
 *          name:"" , 
 *          initialState:"" ,
 *          reducers:{
				addItem : (state , action ) => {}
  *          }
 *      }) 
 * 
//  * export reduces 
 * export defailt cartSlice.reducer 

// * export actions 
export const {addToCart , removeItem} = cartSlice.actions;

// * put that slice in store 

{
	reducer: {
		cart:cartSlice
	}
}
**/
