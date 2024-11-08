import HomeHeadNav from "../Components/HomeHeadNav"
import HomeAdsSection from "../Components/HomeAdsSection"
import ServiceSelection from "../Components/ServiceSelection"

import { useParams } from "react-router-dom"


const HomePage = () => {
    const {id} = useParams()
  return (
    <section className="bg-background min-h-dvh">
        <HomeHeadNav />
        <HomeAdsSection />
        <ServiceSelection />
        <h1>Welcome Back, {id}</h1>
    </section>
  )
}

export default HomePage