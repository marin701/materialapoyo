import React, { useContext } from 'react' 
import { Link } from "react-router-dom";
import { Datacontext } from "../../context/Dataprovied";


export const ProductsItem = ({
            id,
            title,
            price,
            image,
            tallas,
}) => {


  const value = useContext(Datacontext);
  const addCart = value.addCart;

  return (
    <div className="product">
    <a href="#">
      <div className="product_img">
        <img src={image} alt={title}></img>
      </div>
    </a>
    <div className="footerProduct">
      <h1>{title}</h1>
      <p >{tallas}</p>
      <p className='price'>${price}</p>
    </div>
    <div className="buttom">
      <button className="btn" onClick={() => addCart(id)}>Agregar al carrito</button>
      <div>
        <a href="#" className="btn">
          ver
        </a>
      </div>
    </div>
  </div>
  )
}
