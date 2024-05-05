import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavigationBar from "./components/helpers/Nav";
import Home from "./components/helpers/layouts/pages/Home";


const router = createBrowserRouter([
{
  path: "/",
  element: <Home/>,
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
