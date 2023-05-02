import Arrivals from "../../components/arrivals/Arrivals"
import Discover from "../../components/discover/Discover"
import Slider from "../../components/slider/Slider"
import Steps from "../../components/steps/Steps"
import "./home.css"

const Home = () => {
  return (
    <div >
      <Slider />
      <Discover />
      <Arrivals />
      <hr style={{width:"90%",color : "gray",opacity : "0.5"}} />
      <Steps />
    </div>
  )
}

export default Home