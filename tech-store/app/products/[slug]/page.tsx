import { notFound } from "next/navigation";

import ProductDetails from "../../components/product/ProductDetails";

import {
  getProductBySlug
} from "../../services/productService";


type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};



export default async function ProductPage({
  params,
}: ProductPageProps) {


  const { slug } = await params;



  const product =
    await getProductBySlug(slug);



  if (!product) {

    notFound();

  }



  return (

    <main className="min-h-screen bg-base-200">


      <div className="mx-auto max-w-7xl px-4 py-10">


        <ProductDetails
          product={product}
        />


      </div>


    </main>

  );

}