import React from "react";

function SingleItemComponent(props) {
  return (
    <div className="item-wrapper flex-column">
      <div className="item-img-wrapper">
        <img src={props.imgSrc} alt={props.imgAlt} className="item-img" />
      </div>
      <div className="item-text-wrapper">
        <div className="item-text-sub-wrapper text-color">
          <h3 className="item-name">{props.itemName}</h3>
          <p className="item-price">
            {props.itemPrice.toLocaleString("hun")} Ft
          </p>
        </div>
        <button type="button" name="Add to Cart button" className="btn-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleItemComponent;
