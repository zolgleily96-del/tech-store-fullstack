import {
  ShoppingCart,
  PackageCheck,
} from "lucide-react";


import type {
  ProductDetail
} from "../../types/productDetail";


import {
  formatPrice
} from "../../utils/formatPrice";


import {
  useCart
} from "../../context/CartContext";



type ProductDetailsProps = {
  product: ProductDetail;
};



export default function ProductDetails({
  product,
}: ProductDetailsProps) {


  const {
    addToCart
  } = useCart();



  const categoryName =
    product.category.name;



  return (

    <section className="grid gap-8 lg:grid-cols-2">


      {/* تصویر محصول */}

      <div className="flex min-h-[450px] items-center justify-center rounded-3xl bg-base-100 shadow-sm">


        {
          product.images.length > 0 ? (

            <img

              src={
                `http://localhost:8001/media/${product.images[0].image}`
              }

              alt={product.name}

              className="max-h-[400px] object-contain"

            />

          ) : (

            <div className="flex size-64 items-center justify-center rounded-full bg-primary/10 text-7xl">

              🖨️

            </div>

          )

        }


      </div>





      {/* اطلاعات محصول */}

      <div className="rounded-3xl bg-base-100 p-8 shadow-sm">



        {/* برند و دسته */}

        <div className="mb-3 flex gap-2">


          {
            product.brand && (

              <div className="badge badge-primary">

                {product.brand.name}

              </div>

            )

          }



          <div className="badge badge-outline">

            {categoryName}

          </div>


        </div>





        {/* نام محصول */}

        <h1 className="text-3xl font-black">

          {product.name}

        </h1>





        {/* توضیح کوتاه */}

        <p className="mt-5 leading-8 text-base-content/60">

          {product.short_description}

        </p>





        {/* قیمت */}

        <div className="mt-8">


          {
            product.discount_price && (

              <div className="text-sm text-base-content/40 line-through">

                {formatPrice(product.price)}

              </div>

            )

          }



          <div className="text-3xl font-black text-primary">

            {
              formatPrice(
                product.discount_price ??
                product.price
              )
            }

          </div>


        </div>





        {/* موجودی */}

        <div className="mt-6 flex items-center gap-2 text-success">


          <PackageCheck size={20}/>


          {
            product.stock > 0
              ?
              "موجود در انبار"
              :
              "ناموجود"
          }


        </div>





        {/* مشخصات اصلی */}

        <div className="mt-8 space-y-3 rounded-2xl bg-base-200 p-5">



          <div className="flex justify-between">

            <span>
              برند
            </span>


            <b>

              {
                product.brand?.name ?? "-"
              }

            </b>


          </div>





          <div className="flex justify-between">

            <span>
              دسته‌بندی
            </span>


            <b>

              {categoryName}

            </b>


          </div>





          <div className="flex justify-between">

            <span>
              موجودی
            </span>


            <b>

              {product.stock}

            </b>


          </div>




        </div>







        {/* مشخصات فنی */}

        {
          product.attributes.length > 0 && (

            <div className="mt-6 rounded-2xl bg-base-200 p-5">


              <h3 className="mb-4 font-bold">

                مشخصات فنی

              </h3>


              {

                product.attributes.map(
                  (item)=>(

                    <div

                      key={item.id}

                      className="flex justify-between border-b border-base-300 py-2 last:border-none"

                    >

                      <span>
                        {item.key}
                      </span>


                      <b>
                        {item.value}
                      </b>


                    </div>

                  )

                )

              }


            </div>

          )

        }








        {/* افزودن به سبد خرید */}

        <button


          onClick={() =>

            addToCart({

              id: product.id,

              name: product.name,

              slug: product.slug,

              price: product.price,

              discount_price:
                product.discount_price,

              primary_image:
                product.images[0] ?? null,

            })

          }


          className="btn btn-primary mt-8 w-full"


        >

          <ShoppingCart size={20}/>


          افزودن به سبد خرید


        </button>




      </div>


    </section>

  );

}