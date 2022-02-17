import React, { useState, useEffect } from "react";
import api from "../api/api";
// import SingleItemComponent from "../components/SingleItemComponent";

export default function SearchResults() {
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let isMounted = true;
    api.getSearchedItems().then((res) => {
      if (isMounted) {
        setItems(Object.values(res.data.data));
        if (
          typeof items !== "undefined" &&
          items !== null &&
          items.length !== 0
        ) {
          setShowItems(true);
        }
      }
    });
    return () => {
      isMounted = false;
    };
  }, [items]);

  if (showItems) {
    return items.map((item) => (
      <ul>
        <li>{item.name}</li>
      </ul>
    ));
  } else return null;
}
