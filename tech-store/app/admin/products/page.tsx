import Link from "next/link";


import {
  getProducts
} from "../../services/productService";



export default async function AdminProductsPage() {


  const products =
    await getProducts();



  return (

    <main className="min-h-screen bg-base-200">


      <div className="mx-auto max-w-7xl px-4 py-10">



        <div className="mb-8 flex items-center justify-between">


          <div>

            <h1 className="text-3xl font-black">

              مدیریت محصولات

            </h1>


            <p className="mt-2 text-base-content/60">

              لیست محصولات فروشگاه

            </p>


          </div>





          <Link

            href="/admin/products/create"

            className="btn btn-primary"

          >

            افزودن محصول

          </Link>


        </div>





        <div className="overflow-x-auto rounded-3xl bg-base-100 shadow">


          <table className="table">


            <thead>

              <tr>

                <th>
                  نام محصول
                </th>


                <th>
                  برند
                </th>


                <th>
                  قیمت
                </th>


                <th>
                  موجودی
                </th>


                <th>
                  عملیات
                </th>

              </tr>


            </thead>





            <tbody>


              {
                products.map((product) => (


                  <tr key={product.id}>


                    <td>

                      <div className="font-bold">

                        {product.name}

                      </div>

                    </td>




                    <td>

                      {product.brand_name}

                    </td>





                    <td>

                      {product.price.toLocaleString()}

                      {" "}

                      تومان

                    </td>





                    <td>

                      {product.stock}

                    </td>





                    <td className="flex gap-2">


                      <Link

                        href={`/products/${product.slug}`}

                        className="btn btn-sm btn-outline"

                      >

                        مشاهده

                      </Link>



                      <Link

                        href={`/admin/products/${product.slug}/edit`}

                        className="btn btn-sm btn-primary"

                      >

                        ویرایش

                      </Link>


                    </td>




                  </tr>


                ))
              }


            </tbody>



          </table>


        </div>



      </div>


    </main>

  );

}