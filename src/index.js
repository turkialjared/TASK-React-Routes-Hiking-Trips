import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import TripsList from "./components/TripsList";
import Home from "./components/Home";
import TripDetail from "./components/TripDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trips",
        element: <TripsList />,
      },
      {
        path: "/tripDetail/:id",
        element: <TripDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
