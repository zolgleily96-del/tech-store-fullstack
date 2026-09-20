/*
  Link از Next.js
*/
import Link from "next/link";


/*
  آیکون‌های Hero
*/
import {
  ArrowLeft,
  Printer,
  ScanLine,
  Router,
  ShieldCheck,
} from "lucide-react";


export default function Hero() {
  return (

    /*
      Hero اصلی سایت
    */
    <section className="relative overflow-hidden rounded-3xl bg-neutral text-neutral-content">


      {/*
        دایره تزئینی بالا
      */}
      <div className="absolute -top-32 -left-32 size-80 rounded-full bg-primary/30 blur-3xl" />


      {/*
        دایره تزئینی پایین
      */}
      <div className="absolute -right-32 -bottom-32 size-80 rounded-full bg-primary/20 blur-3xl" />


      {/*
        grid در دسکتاپ Hero را دو قسمتی می‌کند.
      */}
      <div className="relative grid min-h-[520px] items-center gap-12 p-8 md:p-12 lg:grid-cols-2 lg:p-16">


        {/*
          قسمت متن Hero
        */}
        <div>


          <div className="badge badge-primary mb-6">
            فروشگاه تخصصی تجهیزات کامپیوتری
          </div>


          <h1 className="max-w-2xl text-4xl leading-tight font-black md:text-5xl lg:text-6xl">

            تجهیزات حرفه‌ای برای

            {" "}

            <span className="text-primary">
              کسب‌وکار حرفه‌ای
            </span>

          </h1>


          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-content/70 md:text-lg">

            خرید تخصصی پرینتر، اسکنر و تجهیزات شبکه MikroTik
            همراه با بررسی مشخصات، مقایسه محصولات و مشاوره قبل از خرید.

          </p>


          {/*
            دکمه‌های اصلی
          */}
          <div className="mt-8 flex flex-wrap gap-3">

            <Link
              href="/products"
              className="btn btn-primary"
            >
              مشاهده محصولات

              <ArrowLeft size={18} />
            </Link>


            <Link
              href="/blog"
              className="btn btn-outline border-white/30 text-white hover:bg-white hover:text-neutral"
            >
              راهنمای خرید
            </Link>

          </div>


          {/*
            پیام اعتمادسازی
          */}
          <div className="mt-8 flex items-center gap-2 text-sm text-neutral-content/60">

            <ShieldCheck
              size={19}
              className="text-success"
            />

            بررسی تخصصی محصولات قبل از خرید

          </div>

        </div>


        {/*
          سمت چپ Hero

          سه دسته اصلی فروشگاه را
          به صورت نمایشی نشان می‌دهیم.
        */}
        <div className="space-y-4">


          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">


            <div className="flex items-center justify-between">


              <div>

                <div className="text-sm text-neutral-content/60">
                  محصول ویژه
                </div>


                <div className="mt-2 text-2xl font-black">
                  پرینترهای اداری
                </div>


                <p className="mt-2 text-sm text-neutral-content/70">
                  مناسب شرکت‌ها و کسب‌وکارها
                </p>

              </div>


              <Printer
                size={70}
                strokeWidth={1.2}
                className="text-primary"
              />


            </div>


          </div>




          <div className="grid grid-cols-2 gap-4">


            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">


              <ScanLine
                size={42}
                className="text-primary"
              />


              <div className="mt-4 font-bold">
                اسکنر
              </div>


              <div className="mt-1 text-sm text-neutral-content/60">
                دیجیتال‌سازی اسناد
              </div>


            </div>





            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">


              <Router
                size={42}
                className="text-primary"
              />


              <div className="mt-4 font-bold">
                MikroTik
              </div>


              <div className="mt-1 text-sm text-neutral-content/60">
                تجهیزات شبکه
              </div>


            </div>


          </div>





          <div className="flex items-center gap-3 rounded-3xl bg-primary/20 p-5">


            <ShieldCheck
              size={38}
            />


            <div>

              <div className="font-bold">
                خرید مطمئن
              </div>


              <div className="text-sm text-neutral-content/70">
                مشاوره تخصصی قبل از خرید
              </div>


            </div>


          </div>


        </div>

      </div>

    </section>
  );
}