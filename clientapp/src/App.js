import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
	//const user = localStorage.getItem("token");

	return (
    <BrowserRouter>
		<Routes>
		<Route path='/' element={<Signup />}></Route>
    <Route path='/Login' element={<Login />}></Route>
    <Route path='/Signup' element={<Signup />}></Route>
    <Route path='/Home' element={<Main />}></Route>
		</Routes>
    </BrowserRouter>
	);
}

export default App;
 