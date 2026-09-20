"use client";


import Link from "next/link";

import {
  Trash2,
  Plus,
  Minus,
} from "lucide-react";


import {
  useCart
} from "../context/CartContext";


import {
  formatPrice
} from "../utils/formatPrice";




export default function CartPage() {


  const {
    items,
    increase,
    decrease,
    removeFromCart,
    total,

  } = useCart();




  if (items.length === 0) {


    return (

      <main className="min-h-screen bg-base-200 flex items-center justify-center">


        <div className="rounded-3xl bg-base-100 p-10 text-center shadow">


          <h1 className="text-2xl font-black">

            سبد خرید خالی است

          </h1>


          <Link

            href="/products"

            className="btn btn-primary mt-6"

          >

            مشاهده محصولات

          </Link>


        </div>


      </main>

    );

  }




  return (

    <main className="min-h-screen bg-base-200">


      <div className="mx-auto max-w-7xl px-4 py-10">


        <h1 className="mb-8 text-3xl font-black">

          سبد خرید

        </h1>





        <div className="grid gap-8 lg:grid-cols-3">





          {/* محصولات */}

          <section className="space-y-4 lg:col-span-2">



            {
              items.map((item) => (


                <div

                  key={item.product.id}

                  className="flex items-center gap-4 rounded-3xl bg-base-100 p-5 shadow-sm"

                >



                  <img

                    src={
                      item.product.primary_image
                        ?
                        `http://localhost:8001/media/${item.product.primary_image.image}`
                        :
                        "/placeholder.png"
                    }

                    alt={item.product.name}

                    className="h-24 w-24 rounded-xl object-contain"

                  />





                  <div className="flex-1">


                    <h2 className="font-bold">

                      {item.product.name}

                    </h2>



                    <p className="mt-2 text-primary font-bold">

                      {
                        formatPrice(
                          item.product.discount_price ??
                          item.product.price
                        )
                      }

                    </p>



                  </div>






                  {/* تعداد */}

                  <div className="flex items-center gap-2">


                    <button

                      onClick={() =>
                        decrease(item.product.id)
                      }

                      className="btn btn-sm btn-circle"

                    >

                      <Minus size={16} />

                    </button>




                    <span className="font-bold">

                      {item.quantity}

                    </span>





                    <button

                      onClick={() =>
                        increase(item.product.id)
                      }

                      className="btn btn-sm btn-circle"

                    >

                      <Plus size={16} />

                    </button>


                  </div>






                  <button

                    onClick={() =>
                      removeFromCart(item.product.id)
                    }

                    className="btn btn-error btn-sm btn-circle"

                  >

                    <Trash2 size={16} />


                  </button>




                </div>


              ))
            }



          </section>







          {/* خلاصه سفارش */}

          <aside className="rounded-3xl bg-base-100 p-6 shadow-sm">


            <h2 className="text-xl font-black">

              خلاصه سفارش

            </h2>



            <div className="mt-6 flex justify-between">


              <span>
                مبلغ کل
              </span>


              <strong>

                {formatPrice(total)}

              </strong>


            </div>





            <button

              className="btn btn-primary mt-8 w-full"

            >

              ادامه خرید

            </button>



          </aside>





        </div>


      </div>


    </main>

  );

}