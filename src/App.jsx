import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Movie } from "./pages/Movie.jsx";
import { Contact } from "./pages/Contact.jsx";
import AppLayout from "./Components/layout/AppLayout.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import "./App.css";
const App=()=>{
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement:<ErrorPage />,
      children:[
      {
      path:"/",
      element:<Home />
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/movie",
      element:<Movie />
    },
    {
      path:"/contact",
      element:<Contact />
    }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
export default App;