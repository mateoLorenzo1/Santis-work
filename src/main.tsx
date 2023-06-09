import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import { ErrorPage } from "./pages/Error";
import { TeamsList } from "./components/TeamsList";
import { Grocery } from "./components/Grocery";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";
import { Message } from "./components/Message";
import { PlayerStatus } from "./components/PlayerStatus";
import { Rating } from "./components/Rating";

export const ROUTES = [
  "Rating",
  "FocusableInput",
  "Grocery",
  "Message",
  "ImageGallery",
  "TeamsList",
  "PlayerStatus",
  "ListItemsForNavigation",
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "TeamsList",
        element: <TeamsList />,
      },
      {
        path: "Grocery",
        element: <Grocery />,
      },
      {
        path: "FocusableInput",
        element: <FocusableInput focusable={true} />,
      },
      {
        path: "ImageGallery",
        element: <ImageGallery links={[]} />,
      },
      {
        path: "ListItemsForNavigation",
        element: <ListItemsForNavigation />,
      },
      {
        path: "Message",
        element: <Message />,
      },
      {
        path: "PlayerStatus",
        element: <PlayerStatus />,
      },
      {
        path: "TeamsList",
        element: <TeamsList />,
      },
      {
        path: "Rating",
        element: <Rating />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
