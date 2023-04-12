

import React, { useState } from 'react'
import './Styles.css'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [
    ...new Set (
  Menu.map((curElem) => {
    return curElem.category ;
  })
    ),
    "All" ,
]
  console.log(uniqueList)

const Restaurent = () => {

    const [menuData , setmenuData] = useState(Menu)
    const [menuList , setmenuList] = useState(uniqueList)
    console.log(Menu)

    const filterItem = (category) => {

      if( category === "All"){
        setmenuData(Menu) ;
        return ;
      }
      const updatelist = Menu.filter((curElem) =>{
        return curElem.category === category 
      })
      setmenuData(updatelist)
    }

  return (
    <>
       <Navbar filterItem ={filterItem} menuList = { menuList }/>
       <MenuCard  menuData = {menuData}/>
        </>
  )
}

export default Restaurent