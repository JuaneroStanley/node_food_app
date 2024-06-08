// eslint-disable-next-line no-unused-vars
import "./App.css";
import Start from "./components/startpage/Start";
import Login from "./components/login/Login";
import NewOrder from "./components/neworder/NewOrder";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Services from "./components/services/Services";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <Start />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/services",
		element: <Services />,
	},
	{
		path: "/neworder",
		element: <NewOrder />,
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
