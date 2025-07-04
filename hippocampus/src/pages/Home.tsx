import photo from "../../public/photo.jpg"
import bg from "../assets/Flux_Dev_High_quality_modern_vector_illustration_featuring_thr_3.jpg"
const Home = () => {
  return (
    <section className="container pt-28">
        <div className="flex justify-center min-sm:hidden pt-[65px] flex-col gap-4">
            <img src={photo} alt=""  />
            <h1 className="font-extrabold  text-[22px] mx-auto">HippoCampus</h1>
        </div>
        <div className="max-sm:hidden min-lg:w-[960px] min-lg:h-[512px] min-sm:aspect-[1.875] mx-auto relative bg-[#307E7B] rounded-2xl flex justify-end items-center flex-col min-sm:py-20">
            <div className="absolute w-full h-full top-0 g1 rounded-2xl"></div>
            <h1 className="min-lg:text-[40px]/[60px] min-sm:text-[35px] text-p4 z-10 font-black pl-12 pb-4">Advance Your Medical Career with HippoCampus Academy</h1>
            <p className="text-p4 text-[16px] pl-12 pr-[110px] pb-4">Gain expertise in specialized medical fields through our comprehensive online courses, designed for professionals seeking to enhance their skills and knowledge.</p>
        </div>
    </section>
  )
}

export default Home
