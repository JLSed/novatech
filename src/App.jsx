import UpperBody from "./Body/UpperBody"
import MiddleBody from "./Body/MiddleBody"
import LowerBody from "./Body/LowerBody";
import Footer from "./Body/Footer";

const App = () => {
	return (
	<main className="min-h-dvh">
		<UpperBody />
		<MiddleBody />
		<LowerBody />
		<Footer />
	</main>
	);
}

export default App
