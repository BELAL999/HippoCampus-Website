import photo from "../../public/photo.jpg"
const Home = () => {
  return (
    <div className="flex justify-center min-sm:hidden pt-[65px] flex-col gap-4">
        <img src={photo} alt=""  />
        <h1 className="font-extrabold  text-[22px] mx-auto">HippoCampus</h1>
    </div>
  )
}

export default Home
