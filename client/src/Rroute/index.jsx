import { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";

import { ProtectedAdminRoutes } from "./ProtectedAdminRouter";
import { ProtectedUserRoutes } from "./ProtectedUserRouter";
import { PublicRoutes } from "../Rroute/PublicRoute";

const AppRoute = () => {
  const user = useSelector((state) => state.userInfo.user);

  useEffect(() => {
    console.log(user);
  }, []);

  const route =
    user && user.role === "admin" ? ProtectedAdminRoutes : ProtectedUserRoutes;

  const routeElem = createBrowserRouter([...route, ...PublicRoutes]);

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          ></div>
        </div>
      }
    >
      <RouterProvider router={routeElem} />
    </Suspense>
  );
};

export default AppRoute;

// https://github1s.dev/alan2207/bulletproof-react/blob/HEAD/src/routes/protected.tsx
// https://github1s.com/iamshaunjp/MERN-Auth-Tutorial/blob/lesson-17/frontend/src/pages/Signup.js
