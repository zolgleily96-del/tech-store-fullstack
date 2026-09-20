/*
  Link مربوط به Next.js است.

  برای رفتن بین صفحات داخلی سایت استفاده می‌شود
  بدون اینکه کل صفحه دوباره Reload شود.
*/
import Link from "next/link";


/*
  آیکون‌هایی که از lucide-react نیاز داریم.
*/
import {
  ChevronDown,
  Menu,
} from "lucide-react";


/*
  Navbar منوی اصلی فروشگاه است.

  شامل:
  - صفحه اصلی
  - محصولات
  - پرینتر
  - اسکنر
  - MikroTik
  - مقالات
*/
export default function Navbar() {
  return (
    /*
      border-t:
      خط ظریف بالای Navbar.

      bg-base-100:
      رنگ پس‌زمینه از daisyUI.

      sticky را فعلاً اضافه نمی‌کنیم.
      بعداً کل Header را Sticky خواهیم کرد.
    */
    <nav className="border-t border-base-300 bg-base-100">

      {/*
        عرض محتوا را محدود می‌کنیم
        تا در مانیتورهای خیلی بزرگ بیش از حد کشیده نشود.
      */}
      <div className="mx-auto flex h-14 max-w-7xl items-center px-4 lg:px-6">

        {/*
          منوی موبایل

          در صفحه‌های بزرگ مخفی است.
          lg:hidden
        */}
        <div className="dropdown lg:hidden">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-square"
          >
            <Menu size={22} />
          </div>


          {/*
            dropdown-content مربوط به daisyUI است.
          */}
          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-56 rounded-box bg-base-100 p-2 shadow-xl"
          >
            <li>
              <Link href="/">
                صفحه اصلی
              </Link>
            </li>

            <li>
              <Link href="/products">
                همه محصولات
              </Link>
            </li>

            <li>
              <Link href="/products?category=printer">
                پرینتر
              </Link>
            </li>

            <li>
              <Link href="/products?category=scanner">
                اسکنر
              </Link>
            </li>

            <li>
              <Link href="/products?category=mikrotik">
                MikroTik
              </Link>
            </li>

            <li>
              <Link href="/blog">
                مقالات
              </Link>
            </li>
          </ul>

        </div>


        {/*
          منوی دسکتاپ

          hidden:
          روی موبایل مخفی

          lg:flex:
          از سایز بزرگ به بعد نمایش داده می‌شود.
        */}
        <div className="hidden items-center gap-1 lg:flex">

          <Link
            href="/"
            className="btn btn-ghost btn-sm"
          >
            صفحه اصلی
          </Link>


          {/*
            منوی کشویی دسته‌بندی محصولات
          */}
          <div className="dropdown dropdown-hover">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm gap-1"
            >
              دسته‌بندی محصولات

              <ChevronDown size={16} />
            </div>


            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-1 w-56 rounded-box bg-base-100 p-2 shadow-xl"
            >
              <li>
                <Link href="/products">
                  همه محصولات
                </Link>
              </li>

              <li>
                <Link href="/products?category=printer">
                  پرینتر
                </Link>
              </li>

              <li>
                <Link href="/products?category=scanner">
                  اسکنر
                </Link>
              </li>

              <li>
                <Link href="/products?category=mikrotik">
                  تجهیزات MikroTik
                </Link>
              </li>
            </ul>

          </div>


          <Link
            href="/products?category=printer"
            className="btn btn-ghost btn-sm"
          >
            پرینتر
          </Link>


          <Link
            href="/products?category=scanner"
            className="btn btn-ghost btn-sm"
          >
            اسکنر
          </Link>


          <Link
            href="/products?category=mikrotik"
            className="btn btn-ghost btn-sm"
          >
            MikroTik
          </Link>


          <Link
            href="/blog"
            className="btn btn-ghost btn-sm"
          >
            مقالات
          </Link>

        </div>


        {/*
          این قسمت سمت دیگر Navbar قرار می‌گیرد.
          فعلاً یک متن اعتمادساز کوچک داریم.
        */}
        <div className="mr-auto hidden text-sm text-base-content/60 md:block">
          خرید مطمئن تجهیزات کامپیوتری
        </div>

      </div>

    </nav>
  );
}