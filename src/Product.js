import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        /* or, if the key names are same as value names:
        id,
        title,
        image,
        price,
        rating,
         */
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>
          <b>{title}</b>
        </p>
        <p className="product__price">
          <strong>{price}</strong>
          <strong>€</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
