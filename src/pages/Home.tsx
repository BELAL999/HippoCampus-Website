import Hero from "../components/Hero"
import FeatureCourses from "../components/FeatureCourses"
import BrowseCourses from "../components/BrowseCourses"

const Home = () => {
return (
    <main className="container pt-28">
        <Hero />
        <FeatureCourses />
        <BrowseCourses />
    </main>
)
}

export default Home
