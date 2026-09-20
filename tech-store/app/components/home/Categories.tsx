import Link from "next/link";

import {
  Printer,
  ScanLine,
  Router,
  ArrowLeft,
} from "lucide-react";


export default function Categories() {
  return (

    /*
      قسمت دسته‌بندی‌ها
    */
    <section className="py-16">


      {/*
        عنوان بخش
      */}
      <div className="mb-8">

        <div className="text-sm font-bold text-primary">
          دسته‌بندی محصولات
        </div>

        <h2 className="mt-2 text-2xl font-black md:text-3xl">
          دنبال چه تجهیزاتی هستی؟
        </h2>

        <p className="mt-2 text-base-content/60">
          محصولات مورد نظر خود را بر اساس دسته‌بندی پیدا کن.
        </p>

      </div>


      {/*
        Grid دسته‌بندی‌ها
      */}
      <div className="grid gap-5 md:grid-cols-3">


        {/*
          Printer
        */}
        <Link
          href="/products?category=printer"
          className="group rounded-3xl border border-base-300 bg-base-100 p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-xl"
        >

          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">

            <Printer size={34} />

          </div>


          <h3 className="mt-6 text-xl font-black">
            پرینتر
          </h3>


          <p className="mt-2 text-sm leading-7 text-base-content/60">
            انواع پرینتر لیزری، اداری و خانگی از برندهای معتبر.
          </p>


          <div className="mt-5 flex items-center gap-2 text-sm font-bold text-primary">

            مشاهده محصولات

            <ArrowLeft
              size={16}
              className="transition group-hover:-translate-x-1"
            />

          </div>

        </Link>


        {/*
          Scanner
        */}
        <Link
          href="/products?category=scanner"
          className="group rounded-3xl border border-base-300 bg-base-100 p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-xl"
        >

          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">

            <ScanLine size={34} />

          </div>


          <h3 className="mt-6 text-xl font-black">
            اسکنر
          </h3>


          <p className="mt-2 text-sm leading-7 text-base-content/60">
            اسکنرهای اسناد و تصاویر برای خانه، اداره و سازمان.
          </p>


          <div className="mt-5 flex items-center gap-2 text-sm font-bold text-primary">

            مشاهده محصولات

            <ArrowLeft
              size={16}
              className="transition group-hover:-translate-x-1"
            />

          </div>

        </Link>


        {/*
          MikroTik
        */}
        <Link
          href="/products?category=mikrotik"
          className="group rounded-3xl border border-base-300 bg-base-100 p-7 transition hover:-translate-y-1 hover:border-primary hover:shadow-xl"
        >

          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">

            <Router size={34} />

          </div>


          <h3 className="mt-6 text-xl font-black">
            MikroTik
          </h3>


          <p className="mt-2 text-sm leading-7 text-base-content/60">
            روتر، تجهیزات شبکه و محصولات تخصصی MikroTik.
          </p>


          <div className="mt-5 flex items-center gap-2 text-sm font-bold text-primary">

            مشاهده محصولات

            <ArrowLeft
              size={16}
              className="transition group-hover:-translate-x-1"
            />

          </div>

        </Link>

      </div>

    </section>
  );
}