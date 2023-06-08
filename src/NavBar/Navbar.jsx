/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import "./navbar.css";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import BigScreenNav from "./bigScreenNav";
import SmallScreenNav from "./smallScreenNav";
import { useData } from "../utils/DataProvider";

export default function Navbar() {
  const navigate = useNavigate();
  const { products } = useData();
  const [items, setItems] = useState(null);
  const [category, setCategory] = useState('');
  const [active, setActive] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const screenFunc = () => setScreenWidth(window.innerWidth);
  const activeSearch = () => (active ? "search-active" : "");

  const filterItem = ({ target }) => {
    const result = products?.filter((item) =>
      item.title.toLowerCase().includes(target.value.toLowerCase())
    );
    const filteredCategory = products?.find((item) =>
      item.category.toLowerCase().includes(target.value.toLowerCase())
    );
    setItems(result);
    setCategory(filteredCategory.category);
  };
  const navigateSearchedItem = (cat) => {
    navigate(
      {
        pathname: "/p",
        search: createSearchParams({
          type: "search",
          category: cat,
        }).toString(),
      },
      {
        state: {
          searchData: items,
        },
      }
    );
    setActive(false);
  };
  const handleKeypress = ({code}) => {
    if (code === "Enter") return navigateSearchedItem(category);
  }
  useEffect(() => {
    window.addEventListener("click", () => setActive(false));
    window.addEventListener("resize", screenFunc);
    return () => window.removeEventListener("resize", screenFunc);
  }, []);
  if (screenWidth <= 700) {
    return (
      <SmallScreenNav
        setActive={setActive}
        activeSearch={activeSearch}
        navigateItem={navigateSearchedItem}
        filterItem={filterItem}
        items={items}
        category={category}
      />
    );
  }
  return (
    <BigScreenNav
      setActive={setActive}
      activeSearch={activeSearch}
      navigateItem={navigateSearchedItem}
      filterItem={filterItem}
      items={items}
      category={category}
      handleKeypress={handleKeypress}
    />
  );
}
