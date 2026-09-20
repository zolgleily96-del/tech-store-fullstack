export interface ProductDetail {


    id:number;


    name:string;


    slug:string;


    description:string;


    short_description:string;



    category:{
        id:number;
        name:string;
    };



    brand:{
        id:number;
        name:string;
    } | null;



    price:number;


    discount_price:number | null;


    stock:number;


    sku:string;



    images:{
        id:number;
        image:string;
        alt_text:string;
        is_primary:boolean;
    }[];



    attributes:{
        id:number;
        key:string;
        value:string;
    }[];


}