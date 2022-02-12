import React, { useState } from "react";
import "./App.css";
import data from "./components/data";
import Header from "./components/Header";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  console.log(categories);

  /*카테고리 메뉴*/
  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
    } else {
      const newItems = data.filter((item) => item.category === category);
      setMenu(newItems);
    }
  };

  return (
    <div className="AppWrap">
      <Header menu={menu} categories={categories} filterItems={filterItems} />
    </div>
  );
}
export default App;
