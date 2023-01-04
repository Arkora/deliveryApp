import React, { useState } from "react";
import Header from "../components/nav/Headerd";

import Basket from "../components/cart/Basket";

const Orders = () => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="main">
        <div className="inner">
          <div>
            <Header  />
          </div>
          <Basket />
        </div>
      </div>
    </div>
  );
};

export default Orders;
