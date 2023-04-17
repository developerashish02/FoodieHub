import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import AboutPage from "./components/pages/AboutPage";
import ContactUs from "./components/pages/ContactUs";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CardDetail from "./components/card/CardDetail";


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
