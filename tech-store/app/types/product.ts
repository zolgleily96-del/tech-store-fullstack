export interface Product {


  id:number;


  name:string;


  slug:string;


  category_name:string;


  brand_name:string;


  short_description:string;


  price:number;


  discount_price:number | null;


  stock:number;


  is_featured:boolean;


  primary_image?:{

      id:number;

      image:string;

      alt_text:string;

  } | null;


}