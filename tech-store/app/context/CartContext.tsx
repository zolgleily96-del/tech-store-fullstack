"use client";


/*
  useState:
  نگهداری وضعیت سبد خرید

  useEffect:
  خواندن و ذخیره اطلاعات در LocalStorage

  createContext:
  ساخت فضای مشترک برای کل سایت
*/
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


import type { CartProduct } from "../types/cart";


/*
  هر آیتم داخل سبد خرید
  شامل محصول و تعداد است.
*/
export type CartItem = {

  product: CartProduct;

  quantity:number;

};



/*
  چیزهایی که قرار است
  در کل سایت قابل دسترسی باشند.
*/
type CartContextType = {


  items:CartItem[];


  addToCart:
(product:CartProduct)=>void;


  removeFromCart:
  (id:number)=>void;


  increase:
  (id:number)=>void;


  decrease:
  (id:number)=>void;


  total:number;
  cartCount:number;


};





/*
  ساخت Context
*/
const CartContext =
createContext<CartContextType | undefined>(
  undefined
);





/*
  Provider دور کل سایت قرار می‌گیرد.
*/
export function CartProvider({

children,

}:{

children:React.ReactNode;

}){


  const [items,setItems]=useState<CartItem[]>([]);



  /*
    هنگام باز شدن سایت،
    سبد خرید قبلی را بخوان.
  */
  useEffect(()=>{


    const saved =
    localStorage.getItem("cart");


    if(saved){

      setItems(
        JSON.parse(saved)
      );

    }


  },[]);




  /*
    هر تغییر سبد خرید
    ذخیره شود.
  */
  useEffect(()=>{


    localStorage.setItem(
      "cart",
      JSON.stringify(items)
    );


  },[items]);







  /*
    افزودن محصول
  */
    function addToCart(product:CartProduct){


    setItems(prev=>{


      const exists =
      prev.find(
        item=>item.product.id===product.id
      );



      if(exists){


        return prev.map(item=>

          item.product.id===product.id

          ?

          {
            ...item,
            quantity:item.quantity+1
          }

          :

          item

        );


      }



      return [

        ...prev,

        {
          product,
          quantity:1
        }

      ];

    });


  }





  /*
    حذف محصول
  */
  function removeFromCart(id:number){


    setItems(prev=>

      prev.filter(
        item=>item.product.id!==id
      )

    );


  }





  /*
    افزایش تعداد
  */
  function increase(id:number){


    setItems(prev=>

      prev.map(item=>


        item.product.id===id

        ?

        {
          ...item,
          quantity:item.quantity+1
        }

        :

        item


      )

    );


  }





  /*
    کاهش تعداد
  */
  function decrease(id:number){


    setItems(prev=>

      prev.map(item=>{


        if(item.product.id===id){


          return {

            ...item,

            quantity:
            item.quantity>1
            ?
            item.quantity-1
            :
            1

          };


        }


        return item;


      })

    );


  }





  /*
    محاسبه قیمت کل
  */
    const total =
    items.reduce(
    
    (sum,item)=>
    
    sum +
    
    (
    item.product.discount_price ??
    item.product.price
    )
    
    *
    
    item.quantity,
    
    0
    
    );


  /*
    تعداد کل کالاهای داخل سبد خرید

    مثال:

    محصول اول:
    quantity = 2

    محصول دوم:
    quantity = 1

    نتیجه:
    cartCount = 3
  */
  const cartCount = items.reduce(

    (sum,item)=>
      sum + item.quantity,

    0

  );



  





  return (

    <CartContext.Provider

    value={{

      items,
      
      addToCart,
      
      removeFromCart,
      
      increase,
      
      decrease,
      
      total,
      
      cartCount
      
      }}

    >

      {children}

    </CartContext.Provider>

  );


}






/*
  Hook اختصاصی برای استفاده آسان
*/
export function useCart(){


  const context =
  useContext(CartContext);



  if(!context){

    throw new Error(
      "useCart must be inside CartProvider"
    );

  }


  return context;


}