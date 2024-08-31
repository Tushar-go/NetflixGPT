import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { MovieDetail } from "./MovieDetail";

const Body = () => {



  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"movie/:id",
      element: <MovieDetail />,
    },
  ]);

  

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;