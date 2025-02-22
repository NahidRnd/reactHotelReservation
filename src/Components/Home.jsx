import Hero from "./Hero"
import BestHotels from "./BestHotels/BestHotels"
import Navbar from "./Navbar"
import Reviews from "./Reviews"
import TopDestinations from "./TopDestinations"
import Features from "./Features"
import Video from "./Video"
import Footer from "./Footer"


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BestHotels />
      <Features />
      <Video />
      <TopDestinations />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home
