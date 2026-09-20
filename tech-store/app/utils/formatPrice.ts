/*
  یک عدد را دریافت می‌کند
  و آن را به قیمت فارسی تبدیل می‌کند.
*/
export function formatPrice(price: number): string {
  /*
    fa-IR باعث می‌شود اعداد
    به فرمت فارسی نمایش داده شوند.
  */
  return `${price.toLocaleString("fa-IR")} تومان`;
}