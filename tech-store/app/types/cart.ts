export type CartProduct = {

    id:number;

    name:string;

    slug:string;

    price:number;

    discount_price:number | null;


    primary_image?:{

        image:string;

        alt_text?:string;

    } | null;

};