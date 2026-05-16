import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Blogs from "./pages/blog/Blogs.jsx";
import BlogPost from "./pages/blog/BlogPost.jsx";
import Gallery from "./pages/gallery/Gallery.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Team from "./pages/team_members/Team.jsx";
import Events from "./pages/events/events.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import Verify from "./pages/verify/Verify.jsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },
      {
        path: "events/:eventId",
        element: <Events />,
      },
      {
        path: "blogs/:blogId",
        element: <BlogPost />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "team",
        element: <Team/>,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/verify",
    element: <Verify />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

