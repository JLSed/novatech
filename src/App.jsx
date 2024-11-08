import ParentBody from "./Body/ParentBody";
import LoginPage from "./Body/LoginPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<ParentBody />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	);
}

export default App
