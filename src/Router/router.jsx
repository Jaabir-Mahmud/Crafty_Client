import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../Components/Home/Home";
import MyArtCraftList from "../Components/Crafts/MyArtCraftList";
import AllArt from "../Components/AllArt/allArt";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import UpdateCraft from "../Components/UpdateCraft/UpdateCraft";
import ProtectedRoute from "../Protected/ProtectedRoute";
import Order from "../Components/Order/Order";
import AddCraftItem from "../Components/Crafts/AddCraftItem";
import NotFound from "../Components/NOtFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/allArt",
        element: <AllArt></AllArt>,
        loader: () =>
          fetch("https://creative-corner-server.vercel.app/craft")
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed to fetch craft items");
              }
              return response.json();
            })
            .then((data) => ({ craftItems: data })),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },

      {
        path: "/addCraftItem",
        element: (
          <ProtectedRoute>
            <AddCraftItem></AddCraftItem>
          </ProtectedRoute>
        ),
      },

      {
        path: "/myArtCraftList",
        element: (
          <ProtectedRoute>
            <MyArtCraftList></MyArtCraftList>
          </ProtectedRoute>
        ),
      },

      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/update/:itemId",
        element: <UpdateCraft></UpdateCraft>,
        loader: ({ params }) =>
          fetch(
            `https://creative-corner-server.vercel.app/craft/${params.itemId}`
          ),
      },

      {
        path: "order",
        element: <Order></Order>,
      },
    ],
  },
]);

export default router;
