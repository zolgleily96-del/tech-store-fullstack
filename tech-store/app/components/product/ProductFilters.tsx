/*
  Link برای دکمه پاک کردن فیلترها استفاده می‌شود.
*/
import Link from "next/link";


/*
  اطلاعاتی که صفحه products
  به کامپوننت فیلتر ارسال می‌کند.
*/
type ProductFiltersProps = {
  search: string;
  category: string;
  sort: string;
};


/*
  این کامپوننت قسمت جستجو،
  دسته‌بندی و مرتب‌سازی را می‌سازد.
*/
export default function ProductFilters({
  search,
  category,
  sort,
}: ProductFiltersProps) {
  return (
    <div className="rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm">

      {/*
        چون method="GET" است،
        اطلاعات فرم داخل URL قرار می‌گیرند.

        مثال:

        /products?search=hp&category=printer&sort=price-asc
      */}
      <form
        action="/products"
        method="GET"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_auto]"
      >

        {/*
          جستجوی محصول
        */}
        <div>
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-bold"
          >
            جستجو
          </label>

          <input
            id="search"
            name="search"
            type="search"
            defaultValue={search}
            placeholder="نام محصول یا برند..."
            className="input input-bordered w-full"
          />
        </div>


        {/*
          فیلتر دسته‌بندی
        */}
        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-bold"
          >
            دسته‌بندی
          </label>

          <select
            id="category"
            name="category"
            defaultValue={category}
            className="select select-bordered w-full"
          >
            <option value="">
              همه دسته‌بندی‌ها
            </option>

            <option value="printer">
              پرینتر
            </option>

            <option value="scanner">
              اسکنر
            </option>

            <option value="mikrotik">
              MikroTik
            </option>
          </select>
        </div>


        {/*
          مرتب‌سازی
        */}
        <div>
          <label
            htmlFor="sort"
            className="mb-2 block text-sm font-bold"
          >
            مرتب‌سازی
          </label>

          <select
            id="sort"
            name="sort"
            defaultValue={sort}
            className="select select-bordered w-full"
          >
            <option value="">
              پیش‌فرض
            </option>

            <option value="price-asc">
              ارزان‌ترین
            </option>

            <option value="price-desc">
              گران‌ترین
            </option>

            <option value="name">
              نام محصول
            </option>
          </select>
        </div>


        {/*
          دکمه اعمال فیلتر
        */}
        <div className="flex items-end">

          <button
            type="submit"
            className="btn btn-primary w-full lg:w-auto"
          >
            اعمال فیلتر
          </button>

        </div>

      </form>


      {/*
        فقط زمانی نمایش داده می‌شود
        که یکی از فیلترها فعال باشد.
      */}
      {(search || category || sort) && (

        <div className="mt-4 border-t border-base-300 pt-4">

          <Link
            href="/products"
            className="btn btn-ghost btn-sm"
          >
            پاک کردن همه فیلترها
          </Link>

        </div>

      )}

    </div>
  );
}