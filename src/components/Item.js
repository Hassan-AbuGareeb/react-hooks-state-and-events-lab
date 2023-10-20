import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleInCart() {
    setInCart(!inCart);
  }

  const buttonText = inCart ? "Remove from Cart" : "Add to Cart";
  const listItemClassname = inCart ? "in-cart" : "";
  const buttonClassName = inCart ? "remove" : "add";
  return (
    <li className={listItemClassname}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassName} onClick={handleInCart}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
