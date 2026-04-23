import Banner from "@/components/Banner";
import FoodCard from "@/components/FoodCard";
import { getProducts } from "@/service/getProducts";
import Link from "next/link";

export default async function Home() {
  const data = await getProducts();
  const foods = data.data;
  return (
    <div className="container mx-auto">
      <Banner />
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold text-green-950">
          Our Trending Foods
        </h1>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {foods.slice(0, 10).map((food) => (
          <Link href={`/${food.id}`} key={food.id}>
            <FoodCard  food={food}></FoodCard>
          </Link>
        ))}
      </div>
      <div className="my-10 text-center">
        <Link
          href="/foods"
          className="text-white font-semibold rounded-lg p-2 bg-linear-to-r from-green-900 to-green-400"
        >
          View All
        </Link>
      </div>
    </div>
  );
}
