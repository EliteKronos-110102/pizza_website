import React, { useEffect } from 'react'
import { MenuList } from '../data/MenuList.js'
import MenuItem from '../components/MenuItem.js'
import '../styles/Menu.css'

const Menu = () => {

  useEffect(() => {
    document.title = "Menu";

    return () => {
      document.title = "Pizza Website";
    };
  }, []);

  return (
      <div className="menu">
          <h1 className="menuTitle">Our Menu</h1>
          <div className="menuList">
              {MenuList.map((menuItem, key)=>{
                  return (
                      <MenuItem
                        key={key}
                        image={menuItem.image}
                        name={menuItem.name}
                        price={menuItem.price}
                    />
                  );
              })}
          </div>
    </div>
  )
}

export default Menu