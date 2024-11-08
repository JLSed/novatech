import ParentBody from "./Body/ParentBody";
import LoginPage from "./Body/LoginPage";
import HomePage from "./Body/HomePage";
import NotFound from "./Body/NotFound";
import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<>
		<Routes>
			<Route path="/" element={<ParentBody />} />
			<Route path="/novatech" element={<ParentBody />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/home/" element={<HomePage />} />
			<Route path="/home/:id" element={<HomePage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
		</>
		
	);
}

export default App
