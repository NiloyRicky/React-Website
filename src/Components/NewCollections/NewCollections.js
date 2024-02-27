import React from 'react'
import './NewCollections.css' 
import new_collection from '../Assets/new_collections'
import Item from '../items/Item';
function NewCollections() {
  return (
    <div className='new_collection'>
        <h1>New Collections</h1><hr/>
        <div className='collection'>
          {new_collection.map((item,i)=>{
return(<Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}  old_price={item.old_price}/>)
          })}
        </div>
    </div>
  )
}

export default NewCollections