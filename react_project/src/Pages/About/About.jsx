export default function About() {
  return (
    <div className="">
      <div
        className={`bg-[url(src/Pages/About/Nursery-Plant.jpg)] w-full h-[38.3rem] bg-cover bg-center relative mt-[5.125rem]`}
      >
        <span className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white font-bold text-7xl w-full h-full bg-black/40 flex items-center justify-center">
          About Us
        </span>
      </div>
      <div className="mx-auto w-5/6  mt-[5rem] flex flex-col justify-center bg-transparent"></div>
    </div>
  );
}
