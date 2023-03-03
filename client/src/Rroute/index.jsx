// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import React from "react";

// const index = () => {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         {/* <Navbar /> */}

//         <Routes>
//           <Route
//             path="/"
//             element={<Navigate to="/login" />}
//             // element={user ? <Home /> : <Navigate to="/login" />}
//           />
//           <Route path="/home" element={<Navigate to="/home" />} />
//           <Route path="/signup" element={<Navigate to="/signup" />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default index;

// import { lazy, Suspense } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import UserHome from "../Pages/Protected/UserHome";
// // const UserLogin = lazy(() => import(''))

// const router = createBrowserRouter([
//   {
//     path: "*",
//     element: <PrivateRoute />,
//     children: [
//       { path: "/home", element: <UserHome /> },
//       { path: "/admin/dashboard", element: <AdminDashboard /> },
//       { path: "/admin/reports", element: <AdminReportList /> },
//       { path: "/admin/agentlist", element: <AdminAgentList /> },
//       { path: "/admin/userlist", element: <AdminUserList /> },
//     ],
//   },
//   { path: "/login", element: <UserLogin /> },
//   { path: "/signup", element: <UserSignup /> },
//   { path: "/admin/login", element: <AdminLogin /> },
//   { path: "/admin/signup", element: <AdminSignup /> },
// ]);

// const MainRoute = () => {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex justify-center items-center">
//           <div
//             className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
//             role="status"
//           ></div>
//         </div>
//       }
//     >
//       <RouterProvider router={router} />
//     </Suspense>
//   );
// };

// export default MainRoute;
