"use client";


import {
    useEffect,
    useState
} from "react";


import {
    useParams,
    useRouter
} from "next/navigation";



const API_URL =
    "http://localhost:8001/api";



export default function EditProductPage() {


    const router = useRouter();


    const params =
        useParams();


    const slug =
        params.slug as string;




    const [loading, setLoading] =
        useState(true);

    const [categories, setCategories] =
        useState<any[]>([]);


    const [image, setImage] =
        useState<File | null>(null);


    const [images, setImages] =
        useState<any[]>([]);


    const [preview, setPreview] =
        useState<string | null>(null);


    const [brands, setBrands] =
        useState<any[]>([]);


    const [form, setForm] =

        useState({

            name: "",

            description: "",

            short_description: "",

            price: "",

            discount_price: "",

            stock: "",

            sku: "",

            status: "",
            category: "",
            brand: "",

        });





    useEffect(() => {


        async function loadProduct() {


            const response =
                await fetch(
                    `${API_URL}/products/${slug}/`
                );


            const data =
                await response.json();

            setImages(
                data.images || []
            );




            setForm({

                name: data.name || "",

                description: data.description || "",

                short_description: data.short_description || "",

                price: data.price || "",

                discount_price:
                    data.discount_price || "",

                stock: data.stock || "",

                sku: data.sku || "",

                status: data.status || "draft",
                category:
                    data.category?.id || "",


                brand:
                    data.brand?.id || "",

            });

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



            setCategories(categoriesData);

            setBrands(brandsData);

            setLoading(false);


        }



        if (slug) {

            loadProduct();

        }


    }, [slug]);






    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) {


        setForm({

            ...form,

            [e.target.name]:
                e.target.value

        });


    }



    async function uploadImage() {

        if (!image) {
            return;
        }


        const formData =
            new FormData();


        formData.append(
            "image",
            image
        );



        await fetch(
            `${API_URL}/products/${slug}/images/`,
            {

                method: "POST",

                body: formData,

            }
        );

    }
    async function setPrimaryImage(id: number) {

        await fetch(
            `${API_URL}/product-images/${id}/primary/`,
            {
                method: "PATCH",
            }
        );


        setImages((prev) =>


            prev.map((item) =>


                item.id === id

                    ?

                    {
                        ...item,
                        is_primary: true
                    }

                    :

                    {
                        ...item,
                        is_primary: false
                    }


            )

        );


    }

    async function deleteImage(id: number) {


        await fetch(
            `${API_URL}/product-images/${id}/`,
            {
                method: "DELETE",
            }
        );


        setImages(
            prev =>
                prev.filter(
                    item =>
                        item.id !== id
                )
        );

    }



    async function handleSubmit(
        e: React.FormEvent
    ) {


        e.preventDefault();

        async function setPrimaryImage(
            id: number
        ) {

            await fetch(
                `${API_URL}/product-images/${id}/primary/`,
                {
                    method: "PATCH",
                }
            );


            setImages(
                prev =>
                    prev.map(item =>
                        item.id === id
                            ?
                            {
                                ...item,
                                is_primary: true
                            }
                            :
                            {
                                ...item,
                                is_primary: false
                            }
                    )
            );

        }

        await fetch(
            `${API_URL}/products/${slug}/`,
            {


                method: "PATCH",


                headers: {

                    "Content-Type":
                        "application/json"

                },


                body: JSON.stringify({

                    ...form,

                    price: Number(form.price),

                    discount_price:
                        form.discount_price
                            ?
                            Number(form.discount_price)
                            :
                            null,


                    stock: Number(form.stock),
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

        if (image) {

            await uploadImage();

        }

        router.push(
            "/admin/products"
        );


    }






    if (loading) {


        return (

            <div className="p-10">

                در حال بارگذاری...

            </div>

        );

    }






    return (

        <main className="min-h-screen bg-base-200">


            <div className="mx-auto max-w-3xl px-4 py-10">


                <h1 className="mb-8 text-3xl font-black">

                    ویرایش محصول

                </h1>





                <form

                    onSubmit={handleSubmit}

                    className="space-y-5 rounded-3xl bg-base-100 p-8 shadow"

                >



                    <input

                        name="name"

                        value={form.name}

                        onChange={handleChange}

                        className="input input-bordered w-full"

                        placeholder="نام محصول"

                    />





                    <textarea

                        name="description"

                        value={form.description}

                        onChange={handleChange}

                        className="textarea textarea-bordered w-full"

                        placeholder="توضیحات"

                    />
                    <div className="space-y-2">

                        <label className="font-bold">
                            تصویر محصول
                        </label>


                        <input

                            type="file"

                            accept="image/*"

                            className="file-input file-input-bordered w-full"

                            onChange={(e) => {

                                if (e.target.files?.[0]) {

                                    const file =
                                        e.target.files[0];


                                    setImage(file);


                                    setPreview(
                                        URL.createObjectURL(file)
                                    );

                                }

                            }}

                        />
                        {
                            preview && (

                                <img

                                    src={preview}

                                    alt="preview"

                                    className="mt-4 h-40 rounded-xl object-contain"

                                />

                            )
                        }

                    </div>



                    <select

                        name="category"

                        value={form.category}

                        onChange={handleChange}

                        className="select select-bordered w-full"

                    >

                        <option value="">

                            انتخاب دسته

                        </option>


                        {
                            categories.map((item) => (

                                <option

                                    key={item.id}

                                    value={item.id}

                                >

                                    {item.name}

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
                            brands.map((item) => (

                                <option

                                    key={item.id}

                                    value={item.id}

                                >

                                    {item.name}

                                </option>

                            ))
                        }


                    </select>

                    <input

                        name="price"

                        value={form.price}

                        onChange={handleChange}

                        className="input input-bordered w-full"

                        placeholder="قیمت"

                    />





                    <input

                        name="discount_price"

                        value={form.discount_price}

                        onChange={handleChange}

                        className="input input-bordered w-full"

                        placeholder="قیمت تخفیف"

                    />





                    <input

                        name="stock"

                        value={form.stock}

                        onChange={handleChange}

                        className="input input-bordered w-full"

                        placeholder="موجودی"

                    />





                    <select

                        name="status"

                        value={form.status}

                        onChange={handleChange}

                        className="select select-bordered w-full"

                    >

                        <option value="draft">

                            پیش‌نویس

                        </option>


                        <option value="active">

                            فعال

                        </option>


                        <option value="archive">

                            آرشیو

                        </option>


                    </select>





                    <div className="space-y-4">


                        <h3 className="font-bold">

                            تصاویر محصول

                        </h3>


                        <div className="grid grid-cols-3 gap-4">


                            {
                                images.map((item) => (

                                    <div

                                        key={item.id}

                                        className="rounded-xl bg-base-200 p-3"

                                    >


                                        <img

                                            src={
                                                `http://localhost:8001/media/${item.image}`
                                            }

                                            alt="product"

                                            className="h-32 w-full object-contain rounded-lg"

                                        />



                                        <button

                                            type="button"

                                            onClick={() =>
                                                deleteImage(item.id)
                                            }

                                            className="btn btn-error btn-sm mt-3 w-full"

                                        >

                                            حذف

                                        </button>
                                        <button

                                            type="button"

                                            onClick={() =>
                                                setPrimaryImage(item.id)
                                            }

                                            className="btn btn-primary btn-sm w-full"

                                        >

                                            {
                                                item.is_primary
                                                    ?
                                                    "⭐ تصویر اصلی"
                                                    :
                                                    "انتخاب تصویر اصلی"
                                            }

                                        </button>


                                    </div>

                                ))
                            }


                        </div>


                    </div>
                    <button

                        className="btn btn-primary w-full"

                    >

                        ذخیره تغییرات

                    </button>



                </form>



            </div>


        </main>

    );

}
