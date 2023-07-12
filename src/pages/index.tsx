import Banner from "@/components/Banner/Banner";
import Product from "@/components/Product/Product";
import { Products } from "@/type";

interface Props {
  productData: Products[];
}

export default function Home({ productData }: Props) {
  productData = productData.slice(0, 20);
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lg:-mt-32 xl:-met-60 z-20 mb-10">
          <Product productData={productData} />
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  // const res = await fetch("https://fakestoreapi.com/products");
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const productData = await res.json();
  return { props: { productData } };
};
