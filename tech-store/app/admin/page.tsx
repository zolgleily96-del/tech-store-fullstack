"use client";


import {
  useEffect,
  useState
} from "react";


import {
  useRouter
} from "next/navigation";

export const dynamic = "force-dynamic";

const API_URL =
"http://localhost:8001/api";



type Category = {

  id:number;

  name:string;

};



type Brand = {

  id:number;

  name:string;

};





export default function CreateProductPage(){


  const router = useRouter();



  const [categories,setCategories] =
    useState<Category[]>([]);



  const [brands,setBrands] =
    useState<Brand[]>([]);



  const [error,setError] =
    useState("");





  const [form,setForm] = useState({


    name:"",

    description:"",

    short_description:"",

    price:"",

    discount_price:"",

    stock:"",

    sku:"",

    category:"",

    brand:"",


  });





  useEffect(()=>{


    async function fetchData(){


      const categoriesResponse =
        await fetch(
          `${API_URL}/categories/`
        );


      const brandsResponse =
        await fetch(
          `${API_URL}/brands/`
        );



      const categoriesData =
        await categoriesResponse.json();



      const brandsData =
        await brandsResponse.json();




      setCategories(
        categoriesData
      );



      setBrands(
        brandsData
      );


    }



    fetchData();


  },[]);






  function handleChange(
    e:React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ){


    setForm({

      ...form,

      [e.target.name]:
        e.target.value

    });


  }







  async function handleSubmit(
    e:React.FormEvent
  ){


    e.preventDefault();


    setError("");



    const response =
      await fetch(
        `${API_URL}/products/`,
        {

          method:"POST",


          headers:{

            "Content-Type":
            "application/json"

          },



          body:JSON.stringify({

            name:
            form.name,


            description:
            form.description,


            short_description:
            form.short_description,


            price:
            Number(form.price),


            discount_price:
            form.discount_price
            ?
            Number(form.discount_price)
            :
            null,



            stock:
            Number(form.stock),



            sku:
            form.sku,



            category:
            Number(form.category),



            brand:
            form.brand
            ?
            Number(form.brand)
            :
            null,


          })

        }

      );





    if(!response.ok){


      const data =
        await response.json();


      setError(
        JSON.stringify(data)
      );


      return;

    }




    router.push(
      "/admin/products"
    );



  }






  return (


    <main className="min-h-screen bg-base-200">


      <div className="mx-auto max-w-3xl px-4 py-10">



        <h1 className="mb-8 text-3xl font-black">

          افزودن محصول جدید

        </h1>





        {
          error && (

            <div className="alert alert-error mb-5">

              {error}

            </div>

          )
        }






        <form

          onSubmit={handleSubmit}

          className="space-y-5 rounded-3xl bg-base-100 p-8 shadow"

        >





          <input

            name="name"

            placeholder="نام محصول"

            className="input input-bordered w-full"

            value={form.name}

            onChange={handleChange}

          />





          <textarea

            name="description"

            placeholder="توضیحات"

            className="textarea textarea-bordered w-full"

            value={form.description}

            onChange={handleChange}

          />





          <textarea

            name="short_description"

            placeholder="توضیح کوتاه"

            className="textarea textarea-bordered w-full"

            value={form.short_description}

            onChange={handleChange}

          />






          <select

            name="category"

            className="select select-bordered w-full"

            value={form.category}

            onChange={handleChange}

          >

            <option value="">

              انتخاب دسته‌بندی

            </option>



            {
              categories.map(
                category=>(

                  <option

                    key={category.id}

                    value={category.id}

                  >

                    {category.name}

                  </option>

                )

              )
            }


          </select>






          <select

            name="brand"

            className="select select-bordered w-full"

            value={form.brand}

            onChange={handleChange}

          >

            <option value="">

              انتخاب برند

            </option>



            {
              brands.map(
                brand=>(

                  <option

                    key={brand.id}

                    value={brand.id}

                  >

                    {brand.name}

                  </option>

                )

              )
            }


          </select>






          <input

            name="price"

            placeholder="قیمت"

            className="input input-bordered w-full"

            value={form.price}

            onChange={handleChange}

          />






          <input

            name="discount_price"

            placeholder="قیمت تخفیفی"

            className="input input-bordered w-full"

            value={form.discount_price}

            onChange={handleChange}

          />






          <input

            name="stock"

            placeholder="موجودی"

            className="input input-bordered w-full"

            value={form.stock}

            onChange={handleChange}

          />






          <input

            name="sku"

            placeholder="SKU"

            className="input input-bordered w-full"

            value={form.sku}

            onChange={handleChange}

          />







          <button

            className="btn btn-primary w-full"

          >

            ذخیره محصول

          </button>




        </form>



      </div>


    </main>


  );

}