import Banner from "@/components/Banner/Banner";
import Product from "@/components/Product/Product";
import { setAllProducts } from "@/store/nextSlice";
import { Products } from "@/type";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {
  productData: Products[];
}

export default function Home({ productData }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllProducts(productData));
  }, [dispatch, productData]);


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
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  // const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const productData = await res.json();
  return { props: { productData } };
};
