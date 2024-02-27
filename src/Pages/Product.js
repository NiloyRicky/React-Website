import React from 'react'
import { useParams } from 'react-router-dom';
import { useGlobal } from '../Context/Context';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';


function Product() {
  const {all_product}=useGlobal();
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId));
  return (
   <div>
      <BreadCrums product={product}/>
    <ProductDisplay product={product}/>
    <RelatedProduct/>
   </div>
  )
 
}

export default Product;