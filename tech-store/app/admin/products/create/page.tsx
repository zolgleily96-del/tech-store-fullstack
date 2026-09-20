"use client";


import {
    useEffect,
    useState
} from "react";


import {
    useRouter
} from "next/navigation";



export default function CreateProductPage() {


    const router = useRouter();



    const [form, setForm] = useState({

        name: "",
        description: "",
        short_description: "",
        price: "",
        discount_price: "",
        stock: "",
        sku: "",
        category: "",
        brand: "",

    });
    const [categories, setCategories] = useState<any[]>([]);

    const [brands, setBrands] = useState<any[]>([]);


    useEffect(() => {

        async function loadData() {

            const categoriesResponse =
                await fetch(
                    "http://localhost:8001/api/categories/"
                );


            const brandsResponse =
                await fetch(
                    "http://localhost:8001/api/brands/"
                );


            const categoriesData =
                await categoriesResponse.json();


            const brandsData =
                await brandsResponse.json();



            setCategories(categoriesData);

            setBrands(brandsData);


        }


        loadData();


    }, []);

    function handleChange(
        
        e:
        React.ChangeEvent<
          HTMLInputElement |
          HTMLSelectElement
        >
    ) {


        setForm({

            ...form,

            [e.target.name]:
                e.target.value

        });


    }





    async function handleSubmit(
        e: React.FormEvent
    ) {


        e.preventDefault();



        const response =
            await fetch(
                "http://localhost:8001/api/products/",
                {


                    method: "POST",


                    headers: {

                        "Content-Type":
                            "application/json"

                    },


                    body:JSON.stringify({

                        ...form,
                      
                        status:"active",
                      
                        is_featured:false,
                      
                        price:Number(form.price),
                      
                        discount_price:
                          form.discount_price
                          ?
                          Number(form.discount_price)
                          :
                          null,
                      
                        stock:Number(form.stock),
                      
                      
                      })


                }

            );




        if (response.ok) {


            router.push(
                "/admin/products"
            );


        }


    }





    return (

        <main className="min-h-screen bg-base-200">


            <div className="mx-auto max-w-3xl px-4 py-10">


                <h1 className="mb-8 text-3xl font-black">

                    افزودن محصول جدید

                </h1>





                <form

                    onSubmit={handleSubmit}

                    className="space-y-5 rounded-3xl bg-base-100 p-8 shadow"


                >



                    <input

                        name="name"

                        value={form.name}

                        onChange={handleChange}

                        placeholder="نام محصول"

                        className="input input-bordered w-full"

                    />





                    <input

                        name="short_description"

                        value={form.short_description}

                        onChange={handleChange}

                        placeholder="توضیح کوتاه"

                        className="input input-bordered w-full"

                    />


                    <select

                        name="category"

                        value={form.category}

                        onChange={handleChange}

                        className="select select-bordered w-full"

                    >

                        <option value="">

                            انتخاب دسته‌بندی

                        </option>


                        {
                            categories.map((category) => (

                                <option

                                    key={category.id}

                                    value={category.id}

                                >

                                    {category.name}

                                </option>

                            ))
                        }


                    </select>
                    <select

                        name="brand"

                        value={form.brand}

                        onChange={handleChange}

                        className="select select-bordered w-full"

                    >

                        <option value="">

                            انتخاب برند

                        </option>


                        {
                            brands.map((brand) => (

                                <option

                                    key={brand.id}

                                    value={brand.id}

                                >

                                    {brand.name}

                                </option>

                            ))
                        }


                    </select>


                    <input

                        name="price"

                        value={form.price}

                        onChange={handleChange}

                        placeholder="قیمت"

                        className="input input-bordered w-full"

                    />





                    <input

                        name="discount_price"

                        value={form.discount_price}

                        onChange={handleChange}

                        placeholder="قیمت تخفیف"

                        className="input input-bordered w-full"

                    />





                    <input

                        name="stock"

                        value={form.stock}

                        onChange={handleChange}

                        placeholder="موجودی"

                        className="input input-bordered w-full"

                    />





                    <input

                        name="sku"

                        value={form.sku}

                        onChange={handleChange}

                        placeholder="SKU"

                        className="input input-bordered w-full"

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