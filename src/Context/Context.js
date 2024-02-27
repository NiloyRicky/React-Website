import React, { createContext, useContext, useState } from "react";

import all_product from "../Components/Assets/all_product"

export const Context=createContext();
const getDefaultCart=()=>{
   let cart={};
   for(let index=0;index<all_product.length+1;index++){
       cart[index]=0;
   }
return cart;
}



const ContextProvider=(props)=>{
   const [cartItems,setCartItems]=useState(getDefaultCart())

const addToCart=(itemId)=>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
console.log(cartItems)
}

const removeFromCart=(itemId)=>{
   setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }




    const getCartAmount=()=>{
       let totalAmount=0;
       for(const item in cartItems){
           if(cartItems[item]>0){
               let itemInfo=all_product.find((product)=>product.id===Number(item))
                   totalAmount +=itemInfo.new_price*cartItems[item];
               } 
               
           }
           return totalAmount;
   }
   const getTotalCartitems=()=>{
       let totalItem=0;
       for(let item in cartItems){
           if(cartItems[item]>0){
               totalItem+=cartItems[item]
           }
       }
       return totalItem;
   }

    const ContextValue={all_product,cartItems,addToCart,removeFromCart,getCartAmount,getTotalCartitems}
return(
   <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
)

}
const useGlobal=()=>{return useContext(Context)}
export {useGlobal}

export default ContextProvider;
