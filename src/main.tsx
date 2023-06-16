import React from "react";
import "./index.css";

// router
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import App from "./App.tsx";
import Extra from "./pages/Extra/Extra.tsx";

const router = createBrowserRouter([
	{
		path: "/home",
		element: <App />,
	},
	{
		path: "/extra",
		element: <Extra />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
