"use client";

import Link from "next/link";

import {
  Printer,
  ScanLine,
  Router,
  ShoppingCart,
} from "lucide-react";

import type { Product } from "../../types/product";

import { formatPrice } from "../../utils/formatPrice";

import {
  useCart
} from "../../context/CartContext";


type ProductCardProps = {
  product: Product;
};


export default function ProductCard({
  product,
}: ProductCardProps) {


  const {
    addToCart
  } = useCart();



  const category =
  product.category_name?.toLowerCase() || "";



const ProductIcon =
  category.includes("printer")
    ? Printer
    : category.includes("scanner")
      ? ScanLine
      : Router;



  const categoryName =
    product.category_name;



  return (

    <article className="card border border-base-300 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">


      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-base-200">


        {
          product.primary_image ? (

            <img

              src={`http://localhost:8001/media/${product.primary_image.image}`}

              alt={product.primary_image.alt_text || product.name}

              className="h-full w-full object-contain"

            />

          ) : (

            <>

              <div className="absolute size-40 rounded-full bg-primary/10" />


              <ProductIcon

                size={90}

                strokeWidth={1.2}

                className="relative text-primary"

              />

            </>

          )
        }



        {
          product.discount_price && (

            <div className="badge badge-error absolute right-4 top-4 text-white">

              تخفیف

            </div>

          )
        }



        <div className="badge badge-neutral absolute left-4 top-4">

          {product.brand_name}

        </div>


      </div>



      <div className="card-body">



        <div className="text-xs font-medium text-primary">

          {categoryName}

        </div>



        <h2 className="card-title min-h-14 text-lg">

          {product.name}

        </h2>



        <p className="min-h-12 text-sm leading-6 text-base-content/60">

          {product.short_description}

        </p>



        <div className="mt-2">

          {
            product.stock > 0 ? (

              <span className="text-xs text-success">

                موجود در انبار

              </span>

            ) : (

              <span className="text-xs text-error">

                ناموجود

              </span>

            )
          }

        </div>




        <div className="mt-3">


          {
            product.discount_price && (

              <div className="text-sm text-base-content/40 line-through">

                {formatPrice(product.price)}

              </div>

            )
          }



          <div className="mt-1 text-xl font-black text-primary">

            {
              formatPrice(
                product.discount_price
                  ?
                  product.discount_price
                  :
                  product.price
              )
            }

          </div>


        </div>




        <div className="card-actions mt-4 grid grid-cols-[1fr_auto]">



          <Link

            href={`/products/${product.slug}`}

            className="btn btn-primary"

          >

            مشاهده محصول

          </Link>



          <button

            onClick={() => addToCart(product)}

            className="btn btn-outline btn-square"

          >

            <ShoppingCart size={20}/>

          </button>



        </div>


      </div>


    </article>

  );

}