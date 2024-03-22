import { Link } from "react-router-dom";

export default function PlantCollection() {
  return (
    <form action="" method="post" name="plantCollection" className="w-full mt-28">
      <span className="block text-center text-5xl font-bold tracking-wide font-serif">Flower Collection</span>
      <div className="grid grid-cols-3 gap-2 mt-20">
        <Link to={"/Product"} name="springFlower" className="h-96 w-full col-span-2 relative">
            <span className="absolute bottom-4 left-4 text-white text-2xl font-semibold">Spring</span>
          <img
            className="w-auto h-full"
            src={`Home-Images/FlowerCollection/Columbine-Flower.jpg`}
            alt="Post Img"
          />

        </Link>
        <Link to={"/Product"} name="summerFlower" className="h-96 w-full relative">
        <span className="absolute bottom-4 left-4 text-white text-2xl font-semibold">Summer</span>
          <img
            className="w-auto h-full"
            src={`Home-Images/FlowerCollection/Marigold-Flower.jpg`}
            alt="Post Img"
          />
        </Link>
        <Link to={"/Product"} name="autumnFlower" className="h-96 w-full relative">
        <span className="absolute bottom-4 left-4 text-white text-2xl font-semibold">Autumn</span>
          <img
            className="w-auto h-full"
            src={`Home-Images/FlowerCollection/Dahlia-Flower.jpg`}
            alt="Post Img"
          />
        </Link>
        <Link to={"/Product"} name="winterFlower" className="h-96 w-full col-span-2 relative">
        <span className="absolute bottom-4 left-4 text-white text-2xl font-semibold">Winter</span>
          <img
            className="w-auto h-full"
            src={`Home-Images/FlowerCollection/Winter-Flower.jpg`}
            alt="Post Img"
          />
        </Link>
      </div>
    </form>
  );
}
