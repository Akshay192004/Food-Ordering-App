import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);
  const [showIndex, setShowIndex] = useState(null); // To track which category is open

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleShowIndex = (index) => {
    // If the same index is clicked, hide the category, otherwise set it to show
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="m-4 p-4 text">
      <h1 className="text-2xl font-bold">{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>⭐ {avgRating}</h3>

      <h2 className="mt-4 text-xl font-semibold">Menu</h2>

      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showCategory={index === showIndex} // Toggle logic simplified
            setShowIndex={() => handleShowIndex(index)} // Pass toggle handler
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
