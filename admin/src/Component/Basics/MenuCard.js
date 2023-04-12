

import React from 'react'

const MenuCard = ({menuData}) => {
  console.log(menuData)
 
  return (
   <>
       <section className='main-card--cointainer'> 

     { menuData.map((curElem)=> {
      const {id , name , category , description  , images , price} = curElem ;
      return (
        
        <div className='card-container'  key={id}>
<div className='card'>
    <div className='card-body'>
    <span className='card-number card-circle subtle'>{id}</span> 
      <span className='card-author subtle'>{category}</span>
      <h2 className='card-title'>{name}</h2>
      <span className='card-description subtle'>{description}
        </span>
        <div className='card-read'> Read </div>
        </div>
      
{/* // <img src= "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="images" className='card-media'/> */}

<img src={images} className="cart-media " alt = "images"/>
        <span className='card-tag subtle'> Order Now </span>
        <h3 className='price'> Price : Rs. {curElem.price} </h3>
</div>
</div>
      )
     })
     }
        </section>
        </>
  )
}
export default MenuCard


