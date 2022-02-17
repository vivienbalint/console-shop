import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import searchIcon from "../public/images/magnifying-glass.svg";
import api from "../api/api";

function Searchbar() {
  let slugify = require("slugify");
  let history = useHistory();
  let slug = useParams();

  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    const { res, error } = await api.getSearchedItems(input);
    if (error) {
      console.log(error);
    } else {
      setItems(res.data);
      console.log(items);
      slug = slugify(input);
      history.push(`/results/${slug}`);
      return items.map((item) => (
        <ul>
          <li>{item.name}</li>
        </ul>
      ));
    }

    //   if (
    //     typeof items !== "undefined" &&
    //     items !== null &&
    //     items.length !== 0
    //   ) {
    //     setShowItems(true);
    //   }
    // ;
    // } catch (err) {
    //   console.log(err);
    // }
    // if (showItems) {
    // console.log(items);
    // slug = slugify(input);
    // history.push(`/results/${slug}`);
    //   return items.map((item) => (
    //     <ul>
    //       <li>{item.name}</li>
    //     </ul>
    //   ));
    // } else return null;
  };

  // useEffect(() => {
  //   let isMounted = true;
  //   api.getSearchedItems(input).then((res) => {
  //     if (isMounted) {
  //       setItems(Object.values(res.data.data));
  //       if (
  //         typeof items !== "undefined" &&
  //         items !== null &&
  //         items.length !== 0
  //       ) {
  //         setShowItems(true);
  //       }
  //     }
  //   });
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [items]);

  return (
    <form onSubmit={handleSearch} className="search-bar flexbox">
      <input
        type="text"
        placeholder="Search..."
        name="input"
        value={input}
        id="search-input"
        className="input-primary secondary-color"
        aria-label="Search through site content"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="icon searchbar-btn secondary-icon focus"
        src={searchIcon}
        alt="Search button"
      />
    </form>
  );
}

export default Searchbar;
