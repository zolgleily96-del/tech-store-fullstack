/*
  ProductCard برای نمایش هر محصول
*/
import ProductCard from "../components/product/ProductCard";


/*
  قسمت فیلترها
*/
import ProductFilters from "../components/product/ProductFilters";


/*
  داده‌های آزمایشی محصولات
*/
import {
  getProducts
} from "../services/productService";

/*
  آیکون برای زمانی که محصولی پیدا نشود
*/
import { PackageSearch } from "lucide-react";


/*
  نوع اطلاعاتی که ممکن است
  داخل URL دریافت کنیم.

  مثال:

  /products?search=hp&category=printer
*/
type ProductsPageProps = {
  searchParams?: Promise<{
    search?: string;
    category?: string;
    sort?: string;
  }>;
};


export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {

  /*
    پارامترهای URL را دریافت می‌کنیم.
  */
    const products = await getProducts();
  const params = await searchParams;


  /*
    مقدار Search

    اگر وجود نداشت،
    رشته خالی قرار می‌دهیم.
  */
  const search =
    params?.search?.trim() || "";


  /*
    دسته‌بندی انتخاب شده
  */
  const category =
    params?.category || "";


  /*
    نوع مرتب‌سازی
  */
  const sort =
    params?.sort || "";


  /*
    ابتدا از تمام محصولات
    یک کپی می‌گیریم.

    دلیل استفاده از [...products]:
    نمی‌خواهیم آرایه اصلی را تغییر دهیم.
  */
  let filteredProducts = [...products];


  /*
    ===============================
    Search
    ===============================
  */

  if (search) {

    /*
      جستجو را به حروف کوچک تبدیل می‌کنیم
      تا بزرگی و کوچکی حروف مهم نباشد.

      HP
      hp
      Hp

      همگی یکسان خواهند بود.
    */
    const normalizedSearch =
      search.toLowerCase();


    filteredProducts =
      filteredProducts.filter((product) => {

        /*
          جستجو داخل نام محصول
        */
        const matchesName =
          product.name
            .toLowerCase()
            .includes(normalizedSearch);


        /*
          جستجو داخل برند
        */
          const matchesBrand =
          product.brand_name
            .toLowerCase()
            .includes(normalizedSearch);


        /*
          جستجو داخل توضیحات
        */
          const matchesDescription =
          product.short_description
            .toLowerCase()
            .includes(normalizedSearch);


        /*
          اگر حداقل یکی true باشد،
          محصول نمایش داده می‌شود.
        */
        return (
          matchesName ||
          matchesBrand ||
          matchesDescription
        );

      });

  }


  /*
    ===============================
    Category Filter
    ===============================
  */

  if (
    category === "printer" ||
    category === "scanner" ||
    category === "mikrotik"
  ) {

    filteredProducts =
    filteredProducts.filter(
      (product) =>
        product.category_name
          .toLowerCase()
          .includes(category.toLowerCase())
    );

  }


  /*
    ===============================
    Sorting
    ===============================
  */

  switch (sort) {

    /*
      قیمت کم به زیاد
    */
    case "price-asc":

      filteredProducts.sort(
        (a, b) => a.price - b.price
      );

      break;


    /*
      قیمت زیاد به کم
    */
    case "price-desc":

      filteredProducts.sort(
        (a, b) => b.price - a.price
      );

      break;


    /*
      مرتب‌سازی بر اساس نام
    */
    case "name":

      filteredProducts.sort(
        (a, b) =>
          a.name.localeCompare(b.name)
      );

      break;

  }


  return (

    /*
      صفحه اصلی Products
    */
    <main className="min-h-screen bg-base-200">


      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">


        {/*
          ===============================
          Header صفحه
          ===============================
        */}
        <section className="mb-8">

          <div className="text-sm font-bold text-primary">
            فروشگاه
          </div>


          <h1 className="mt-2 text-3xl font-black md:text-4xl">
            همه محصولات
          </h1>


          <p className="mt-3 max-w-2xl leading-7 text-base-content/60">
            پرینتر، اسکنر و تجهیزات شبکه MikroTik
            را بررسی، جستجو و مقایسه کنید.
          </p>

        </section>


        {/*
          ===============================
          Filters
          ===============================
        */}
        <ProductFilters
          search={search}
          category={category}
          sort={sort}
        />


        {/*
          ===============================
          نتیجه جستجو
          ===============================
        */}
        <div className="mt-8 flex items-center justify-between">


          <div>

            <span className="font-bold">
              {filteredProducts.length}
            </span>

            {" "}

            <span className="text-sm text-base-content/60">
              محصول پیدا شد
            </span>

          </div>


          {/*
            اگر Search فعال باشد
            عبارت جستجو را نمایش می‌دهیم.
          */}
          {search && (

            <div className="text-sm text-base-content/60">

              نتیجه جستجو برای:

              {" "}

              <span className="font-bold text-base-content">
                «{search}»
              </span>

            </div>

          )}

        </div>


        {/*
          ===============================
          Product Grid
          ===============================
        */}

        {filteredProducts.length > 0 ? (

          /*
            اگر محصول وجود داشته باشد
          */
          <section className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProducts.map(
              (product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              )
            )}

          </section>

        ) : (

          /*
            اگر هیچ محصولی پیدا نشود
          */
          <section className="mt-6 flex min-h-96 flex-col items-center justify-center rounded-3xl border border-base-300 bg-base-100 p-8 text-center">


            <div className="flex size-20 items-center justify-center rounded-full bg-base-200">

              <PackageSearch
                size={38}
                className="text-base-content/40"
              />

            </div>


            <h2 className="mt-6 text-xl font-black">
              محصولی پیدا نشد
            </h2>


            <p className="mt-2 max-w-md leading-7 text-base-content/60">
              عبارت جستجو یا فیلترهای انتخاب‌شده را
              تغییر دهید و دوباره امتحان کنید.
            </p>


            <a
              href="/products"
              className="btn btn-primary mt-6"
            >
              مشاهده همه محصولات
            </a>


          </section>

        )}

      </div>

    </main>

  );
}