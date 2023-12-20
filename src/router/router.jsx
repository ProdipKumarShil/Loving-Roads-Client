import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import SingleBlog from "../pages/SingleBlog/SingleBlog";
import NewBlog from "../pages/NewBlog/NewBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'blog',
        element: <SingleBlog />
      },
      {
        path: 'newBlog',
        element: <NewBlog />
      },
      {
        path: 'allBlogs',
        element: <AllBlogs />
      }
    ]
  }
])