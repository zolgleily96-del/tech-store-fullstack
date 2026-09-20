import Link from "next/link";


import {
  getProducts
} from "../../services/productService";


import ProductCard from "../product/ProductCard";



export default async function FeaturedProducts() {


  const products =
    await getProducts();



  const featuredProducts =
    products.filter(
      (product) =>
        product.is_featured
    );



  return (

    <section className="pb-20">


      <div className="mb-8 flex items-end justify-between gap-4">


        <div>

          <div className="text-sm font-bold text-primary">
            پیشنهادهای فروشگاه
          </div>


          <h2 className="mt-2 text-2xl font-black md:text-3xl">
            محصولات ویژه
          </h2>


          <p className="mt-2 text-base-content/60">
            تعدادی از محصولات منتخب فروشگاه.
          </p>


        </div>



        <Link
          href="/products"
          className="btn btn-outline hidden sm:flex"
        >
          همه محصولات
        </Link>


      </div>





      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


        {
          featuredProducts.map(
            (product)=>(

              <ProductCard

                key={product.id}

                product={product}

              />

            )
          )
        }


      </div>





      <div className="mt-8 sm:hidden">

        <Link

          href="/products"

          className="btn btn-outline w-full"

        >

          مشاهده همه محصولات

        </Link>


      </div>


    </section>

  );

}