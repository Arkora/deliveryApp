import React, { useState, useEffect } from "react";
import Header from "../components/nav/Header";
import Categories from "../components/nav/Categories";
import { fetchFoods, fetchFoodsByCategory, fetchFoodsBySearch } from "../api";
import FoodItem from "../components/foods/FoodItem";

const Home = () => {
  const [foods, setFood] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await fetchFoods();
      setFood(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchByCategory = async () => {
    try {
      const { data } = await fetchFoodsByCategory(category);
      setFood(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBySearch = async () => {
    try {
      const { data } = await fetchFoodsBySearch(search);
      setFood(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!category && !search) {
      fetchData();
    } else if (category && !search) {
      fetchByCategory();
    } else {
      fetchBySearch();
    }
  }, [category, search]);

  // const foods = [
  //   {
  //     id: 1,
  //     title: "Pizza",
  //     img: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     ingrendients: ["sauce", "cheese", "bacon"],
  //     price: 14,
  //   },
  //   {
  //     id: 2,
  //     title: "Pizza",
  //     img: "https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     ingrendients: [
  //       "sauce",
  //       "cheese",
  //       "bacon",
  //       "sauce",
  //       "cheese",
  //       "bacon",
  //       "sauce",
  //       "cheese",
  //       "bacon",
  //     ],
  //     price: 14,
  //   },
  //   {
  //     id: 3,
  //     title: "Pizza",
  //     img: "https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     ingrendients: ["sauce", "cheese", "bacon"],
  //     price: 14,
  //   },
  //   {
  //     id: 4,
  //     title: "Pizza",
  //     img: "https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     ingrendients: ["sauce", "cheese", "bacon"],
  //     price: 14,
  //   },
  // ];

  return (
    <div className=" flex items-center  h-screen justify-center">
      <div className="main">
        <div className="inner">
          <div>
            <Header setCategory={setCategory} setSearch={setSearch} />
            <Categories setCategory={setCategory} />
          </div>
          <div className=" mt-10 no-scrollbar overflow-y-auto">            
            <div className="p-4">
              {foods.map((food) => {
                return (
                  <FoodItem
                    id={food.id}
                    title={food.title}
                    img={food.img}
                    ingrendients={food.ingrendients}
                    price={food.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
