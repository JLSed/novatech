import UpperBody from "./UpperBody"
import MiddleBody from "./MiddleBody"
import LowerBody from "./LowerBody";
import Footer from "./Footer";

const ParentBody = () => {
  return (
    <main className="min-h-dvh">
        <UpperBody />
		<MiddleBody />
		<LowerBody />
		<Footer />
    </main>
  )
  	
}

export default ParentBody