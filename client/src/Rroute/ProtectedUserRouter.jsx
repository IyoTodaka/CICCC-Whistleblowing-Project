import { lazy } from "react";

const UserHome = lazy(() => import("../Pages/Protected/UserHome"));
const UserReport = lazy(() => import("../Pages/Protected/UserReportList"));

export const ProtectedUserRoutes = [
  { path: "/home", element: <UserHome /> },
  { path: "/history", element: <UserReport /> },
];
