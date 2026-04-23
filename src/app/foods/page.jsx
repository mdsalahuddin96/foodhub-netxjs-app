import FoodCard from '@/components/FoodCard';
import { getProducts } from '@/service/getProducts';
import Link from 'next/link';


const ProductsPage =async ({searchParams}) => {
  const sp=await searchParams;
    const data=await getProducts(sp.category,sp.search);
    const foods=data.data;
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {foods.map((food) => (
          <Link href={`/${food.id}`} key={food.id}>
            <FoodCard  food={food}></FoodCard>
          </Link>
        ))}
      </div>
    );
};

export default ProductsPage;