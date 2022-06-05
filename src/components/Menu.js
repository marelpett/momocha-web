import React from 'react';
import './Menu.css';
import {BubbleTea, SlushySlush, PoppingBoba, SparklingDrinks, SummerEditions} from "./drinks.js";

function Menu(index) {
  
  function renderDrinks(item, index){
    return(
      <div key = {index} className='menu-item'>
        <img alt = {item.title} className="product-img" src={item.imgsrc}/>
        <div className='product-title'>{item.title}</div>
        <div className='product-text'>{item.ingredients}</div>
        <div className='product-price'>{item.price}</div>
      </div>
    )
  }

  return (
    <><div key = {index}>
        <div className='menu-header' id='menu'>
            <h1>MENU</h1>
        </div>
        <div className='menu-container'>

          <div className='product-header'>
            THINGS WITH BOBA
          </div>

          <div>
            {BubbleTea.map(renderDrinks)}
          </div>

          <div className='product-header'>
            POPPING SERIES
          </div>

          <div>
            {PoppingBoba.map(renderDrinks)}
          </div>

          <div className='product-header'>
            SLUSHY SLUSH
          </div>

          <div>
            {SlushySlush.map(renderDrinks)}
            </div>

          <div className='product-header'>
            SPARKLING DRINKS
          </div>

          <div>
            {SparklingDrinks.map(renderDrinks)}
          </div>

          <div className='product-header'>
            SUMMER EDITIONS
          </div>

          <div>
            {SummerEditions.map(renderDrinks)}
          </div>
    </div>
    </div>
    </>
  );
}

export default Menu;
