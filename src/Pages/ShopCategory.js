import React from 'react'
import './Css/ShopCategory.css';
import { useGlobal } from '../Context/Context';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/items/Item';
function ShopCategory(props) {
  const {all_product}=useGlobal();
  return (
    <div className='shop_category'>
      <img className='shop_category_banner'src={props.banner}/>
      <div className='ShopCategory_indexsort'>
        <p>
          <span>
            Showing 1-12 
          </span>Out of 36 Products
        </p>
        <div className='shopCategory_sort'>
          sort by <img src={dropdown_icon}/>
        </div>
      </div>
      <div className='shopCategory_product'>
        {all_product.map((item,i)=>{
       if(props.category===item.category){
        return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price} />
       }
       else{return null}
        })}
      </div>
      <div className='load_more'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory