/*
  Hero صفحه اصلی
*/
import Hero from "./components/home/Hero";


/*
  دسته‌بندی‌های فروشگاه
*/
import Categories from "./components/home/Categories";


/*
  محصولات ویژه
*/
import FeaturedProducts from "./components/home/FeaturedProducts";


export default function Home() {
  return (

    /*
      صفحه اصلی سایت
    */
    <main className="min-h-screen bg-base-200">


      {/*
        محدوده مرکزی محتوا
      */}
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6">


        {/*
          بنر اصلی
        */}
        <Hero />


        {/*
          دسته‌بندی‌ها
        */}
        <Categories />


        {/*
          محصولات ویژه
        */}
        <FeaturedProducts />


      </div>

    </main>
  );
}