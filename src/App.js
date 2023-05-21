import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Header from "./components/layout/Header";
import MainBody from "./components/Home/MainBody";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import CardDetail from "./components/card/CardDetail";
import ErrorPage from "./components/pages/ErrorPage";
import LostConnection from "./components/pages/LostConnection";
import useIsOnline from "./hooks/useIsOnline";

// lazy loding
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ContactUs = lazy(() => import("./components/pages/ContactUs"));

const App = () => {
	const isOnline = useIsOnline();

	if (!isOnline) {
		return <LostConnection />;
	}

	return (
		<div className="">
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
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
