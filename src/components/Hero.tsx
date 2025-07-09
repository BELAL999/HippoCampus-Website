import photo from "../../public/photo.jpg"
import { whyHippocampus } from "../assets/data"
import { useTheme } from "../contexts/context"



const Hero = () => {
    const {currentMode} = useTheme()
    
    return (
        <div className='hero'>
            <div className="flex justify-center min-sm:hidden pt-[65px] flex-col gap-4">
                <img src={photo} alt="" />
                <h1 className="font-extrabold  text-[22px] mx-auto">HippoCampus</h1>
            </div>
            <div className="max-sm:hidden min-lg:w-[960px] min-lg:h-[512px] min-sm:aspect-[1.875] mx-auto relative bg-[#307E7B] rounded-2xl flex justify-end items-center flex-col min-sm:py-20">
                <div className="absolute w-full h-full top-0 g1 rounded-2xl"></div>
                <h1 className="min-lg:text-[40px]/[60px] min-sm:text-[35px] text-p4 z-10 font-black pl-12 pb-4">Advance Your Medical Career with HippoCampus Academy</h1>
                <p className="text-p4 text-[16px] pl-12 pr-[110px] pb-4">Gain expertise in specialized medical fields through our comprehensive online courses, designed for professionals seeking to enhance their skills and knowledge.</p>
            </div>
            <div className="min-lg:w-[960px] pt-12 mx-auto">
                <div className="py-[40px]">
                    <p className="text-[36px]/[45px] font-black pb-4 dark:text-p4">
                        Why Hippocamps Acadmey ?
                    </p>
                    <p className="text-[16px] dark:text-p4 opacity-70">
                        Our courses are designed to meet the needs of busy medical professionals, offering flexibility and depth in various specialties.
                    </p>
                </div>
                <div className="flex flex-wrap gap-[12px]">
                    {whyHippocampus.map((item, index) => (
                        <div key={index} className="w-full min-lg:w-[calc(25%-12px)] min-md:w-[calc(50%-12px)] border-2 border-[#DBE0E5] dark:bg-[#21262B] dark:border-dark-Cs p-[16px] rounded-2xl transition-all duration-500 hvoer:translate-y-[30px] hover:scale-105 flex flex-col gap-4">
                            <img src={currentMode === "dark" ? item.darkIcon : item.lightIcon} className="w-[24px]"/>
                            <p className="dark:text-p4 text-p2 font-bold">{item.title}</p>
                            <p className=" text-[#637387] dark:text-[#94ABC7] slef-end">{item.text}</p>
                        </div>
                    )
                    )}
                </div>

            </div>
        </div>
    )
}

export default Hero


