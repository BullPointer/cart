/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getCategories, getProducts } from "./api";

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  const productsData = async () => {
    const result = await getProducts();
    if (result.status == 200) {
      setProducts(result.data);
    } else console.log(result);
  };
  const categoriesData = async () => {
    const result = await getCategories();
    if (result.status == 200) {
      setCategories(result.data);
    } else console.log(result);
  };
  useEffect(() => {
    productsData();
    categoriesData();
  }, []);

  return (
    <DataContext.Provider value={{ products, categories }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
    return useContext(DataContext);
}
