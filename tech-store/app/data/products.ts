/*
  Product type را وارد می‌کنیم
  تا تمام داده‌های محصولات بررسی شوند.
*/
import type { Product } from "../types/product";


/*
  محصولات آزمایشی فروشگاه.

  فعلاً این داده‌ها داخل Frontend هستند.

  در آینده این فایل جای خودش را به
  Django REST API خواهد داد.
*/
export const products: Product[] = [
  {
    id: 1,

    name: "HP LaserJet Pro M404dn",

    slug: "hp-laserjet-pro-m404dn",

    shortDescription:
      "پرینتر لیزری حرفه‌ای HP مناسب شرکت‌ها و محیط‌های اداری.",

    price: 18500000,

    oldPrice: 19800000,

    brand: "HP",

    category: "printer",

    stock: 8,

    featured: true,
  },

  {
    id: 2,

    name: "Canon CanoScan LiDE 300",

    slug: "canon-canoscan-lide-300",

    shortDescription:
      "اسکنر تخت Canon مناسب اسناد و تصاویر با طراحی جمع‌وجور.",

    price: 7200000,

    oldPrice: 7600000,

    brand: "Canon",

    category: "scanner",

    stock: 12,

    featured: true,
  },

  {
    id: 3,

    name: "MikroTik hAP ax3",

    slug: "mikrotik-hap-ax3",

    shortDescription:
      "روتر قدرتمند MikroTik با Wi-Fi 6 مناسب شبکه‌های حرفه‌ای.",

    price: 9800000,

    brand: "MikroTik",

    category: "mikrotik",

    stock: 15,

    featured: true,
  },

  {
    id: 4,

    name: "HP LaserJet M111w",

    slug: "hp-laserjet-m111w",

    shortDescription:
      "پرینتر لیزری کوچک HP با اتصال بی‌سیم مناسب خانه و دفتر.",

    price: 10800000,

    oldPrice: 11500000,

    brand: "HP",

    category: "printer",

    stock: 5,

    featured: true,
  },

  {
    id: 5,

    name: "MikroTik RB5009UG+S+IN",

    slug: "mikrotik-rb5009",

    shortDescription:
      "روتر حرفه‌ای MikroTik مناسب شبکه‌های سازمانی و پیشرفته.",

    price: 14500000,

    brand: "MikroTik",

    category: "mikrotik",

    stock: 7,

    featured: true,
  },

  {
    id: 6,

    name: "Canon imageFORMULA R40",

    slug: "canon-imageformula-r40",

    shortDescription:
      "اسکنر حرفه‌ای اسناد Canon مناسب دفاتر و حجم کاری بالا.",

    price: 23800000,

    brand: "Canon",

    category: "scanner",

    stock: 3,

    featured: true,
  },
];