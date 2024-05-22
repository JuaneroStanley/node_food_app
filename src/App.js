// eslint-disable-next-line no-unused-vars
import "./App.css";
import Start from "./components/startpage/Start";
import Login from "./components/login/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
