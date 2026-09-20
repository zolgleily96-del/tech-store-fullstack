"use client";
/*
  برای لینک‌های داخلی سایت
*/
import Link from "next/link";


/*
  آیکون‌های مورد نیاز Header
*/
import {
  Search,
  ShoppingCart,
  UserRound,
  Cpu,
} from "lucide-react";


/*
  Navbar که خودمان ساختیم.
*/
import Navbar from "./Navbar";
import {
  useCart
} from "../../context/CartContext";


export default function Header() {
  const {
    cartCount
  } = useCart();
  
  return (
    /*
      Header اصلی سایت
    */
    <header className="bg-base-100 shadow-sm">


      {/*
        نوار خیلی بالای سایت

        برای پیام‌هایی مثل:
        ارسال، پشتیبانی، تخفیف و ...
      */}
      <div className="bg-neutral text-neutral-content">

        <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-between px-4 text-xs lg:px-6">

          <span>
            فروش تخصصی تجهیزات کامپیوتری و شبکه
          </span>

          <span className="hidden sm:inline">
            پشتیبانی و مشاوره قبل از خرید
          </span>

        </div>

      </div>


      {/*
        قسمت اصلی Header
      */}
      <div className="mx-auto max-w-7xl px-4 py-4 lg:px-6">

        <div className="flex items-center gap-4">


          {/*
            لوگوی فروشگاه
          */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2"
          >

            {/*
              مربع لوگو
            */}
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-content shadow-sm">

              <Cpu size={25} />

            </div>


            {/*
              نام فروشگاه

              در موبایل کوچک مخفی می‌شود
              تا فضای بیشتری برای Search داشته باشیم.
            */}
            <div className="hidden sm:block">

              <div className="text-xl font-black">
                تک استور
              </div>

              <div className="text-[11px] text-base-content/50">
                تجهیزات کامپیوتری
              </div>

            </div>

          </Link>


          {/*
            Search Box

            flex-1 باعث می‌شود
            تمام فضای آزاد Header را بگیرد.
          */}
          <form
            action="/products"
            method="GET"
            className="relative flex-1"
          >

            {/*
              ورودی جستجو

              name="search"
              خیلی مهم است.

              اگر مثلاً کاربر بنویسد:
              HP Printer

              مرورگر بعداً می‌رود به:

              /products?search=HP+Printer
            */}
            <input
              type="search"
              name="search"
              placeholder="جستجوی پرینتر، اسکنر، MikroTik..."
              className="input input-bordered w-full pl-12"
            />


            {/*
              دکمه Search
            */}
            <button
              type="submit"
              aria-label="جستجو"
              className="btn btn-primary btn-square absolute top-0 left-0"
            >
              <Search size={20} />
            </button>

          </form>


          {/*
            قسمت حساب کاربری و سبد خرید
          */}
          <div className="flex shrink-0 items-center gap-1">


            {/*
              ورود / حساب کاربری
            */}
            <Link
              href="/login"
              className="btn btn-ghost btn-square"
              aria-label="حساب کاربری"
            >
              <UserRound size={22} />
            </Link>


            {/*
              سبد خرید

              indicator مربوط به daisyUI است
              و Badge کوچک روی آیکون قرار می‌دهد.
            */}
            <Link
              href="/cart"
              className="btn btn-ghost btn-square"
              aria-label="سبد خرید"
            >

              <div className="indicator">

                {/*
                  فعلاً تعداد سبد خرید را دستی صفر گذاشته‌ایم.

                  بعداً این عدد از Cart State می‌آید.
                */}
                <span className="badge badge-primary badge-xs indicator-item">

                  {cartCount}
                </span>

                <ShoppingCart size={22} />

              </div>

            </Link>

          </div>

        </div>

      </div>


      {/*
        Navbar را پایین Header نمایش می‌دهیم.
      */}
      <Navbar />

    </header>
  );

}
