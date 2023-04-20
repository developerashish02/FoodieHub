import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/layout/Header";
import MainBody from "./components/Home/MainBody";
import AboutPage from "./components/pages/AboutPage";
import ContactUs from "./components/pages/ContactUs";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CardDetail from "./components/card/CardDetail";
import ErrorPage from './components/pages/ErrorPage';


const App = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
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
				element: <AboutPage />,
			},
			{
				path: "/",
				element: <MainBody />,
			},
			{
				path: "/contact-us",
				element: <ContactUs />,
			},
			{
				path: "/card-detail/:id",
				element: <CardDetail />
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
