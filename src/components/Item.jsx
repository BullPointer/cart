/* eslint-disable react-hooks/exhaustive-deps */
import "../assets/item.css";
import { useSearchParams } from "react-router-dom";
import TopItem from "./TopItem";
import BottomBar from "./BottomItem";
import { useEffect, useState } from "react";
import { getProductsById } from "../utils/api";
import { Icon } from '@iconify/react';

export default function Item() {
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const paramId = searchParams.get("id");

  const getData = async () => {
    const result = await getProductsById(paramId);
    if (result.status === 200) {
      setData(result.data);
    } else {
      console.log(result)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    data ? (
      <div className="item-container">
        <TopItem data={data} />
        <BottomBar data={data} />
      </div>
    ) : <Icon className="loading" icon="mingcute:loading-fill" />
  );
}
