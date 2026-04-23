import { Button } from "@heroui/react";
import Image from "next/image";
import bannerImage from "../../public/image/foodbanner.jpg";
const Banner = () => {
  return (
    <div className="grid md:grid-cols-2  items-center mt-10">
      <div className="space-y-10">
        <h1 className="text-7xl">
          Healthy <span className="text-[#ca2628]">Eating is an</span>
          <span className="text-[#ff8933]"> Important</span> Part of Lifestyle
        </h1>
        <p className="text-2xl w-75 text-muted">
          We prepare delicious Food For you we are always
        </p>
        <Button variant="danger">Explore Now</Button>
      </div>

      <div className="p-10">
        <Image
          className="rounded-sm"
          src={bannerImage}
          loading="eager"
          alt="recipe"
        />
      </div>
    </div>
  );
};

export default Banner;
