import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Historia from "./components/layouts/pages/Historia"
import Home from "./components/layouts/pages/Home";
import Noticias from "./components/layouts/pages/Noticias";


const router = createBrowserRouter([
{
  path: "/",
  element: <Home/>,
},
{
  path: "noticias",
  element:<Noticias/>
},
{
  path: "/historia",
  element: <Historia/>
}

])

function App() {


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
