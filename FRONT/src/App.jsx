import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavigationBar from "./components/helpers/Nav";
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
