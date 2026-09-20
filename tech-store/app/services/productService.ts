import { Product } from "../types/product";
import { ProductDetail } from "../types/productDetail";

const API_URL = "http://localhost:8001/api";


export async function getProducts(): Promise<Product[]> {


    const response = await fetch(
        `${API_URL}/products/`,
        {
            cache: "no-store",
        }
    );


    if (!response.ok) {

        throw new Error(
            "Failed to fetch products"
        );

    }


    return response.json();

}




export async function getProductBySlug(
  slug:string
){

  const response =
    await fetch(
      `${API_URL}/products/${slug}/`,
      {
        cache:"no-store",
      }
    );


  if(!response.ok){

    return null;

  }


  return response.json();

}
export async function getCategories() {


    const response = await fetch(
      `${API_URL}/categories/`,
      {
        cache:"no-store",
      }
    );
  
  
    if(!response.ok){
  
      throw new Error(
        "Failed to fetch categories"
      );
  
    }
  
  
    return response.json();
  
  }
  
  
  
  export async function getBrands() {
  
  
    const response = await fetch(
      `${API_URL}/brands/`,
      {
        cache:"no-store",
      }
    );
  
  
    if(!response.ok){
  
      throw new Error(
        "Failed to fetch brands"
      );
  
    }
  
  
    return response.json();
  
  }
  export async function updateProduct(
    slug:string,
    data:any
  ){
  
    const response =
      await fetch(
        `${API_URL}/products/${slug}/`,
        {
  
          method:"PATCH",
  
          headers:{
            "Content-Type":
            "application/json"
          },
  
  
          body:
          JSON.stringify(data)
  
        }
      );
  
  
    return response.json();
  
  }