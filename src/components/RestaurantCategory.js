import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showCategory, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); // Toggling function from parent
  };

  return (
    <div>
      <div className="w-full bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{!showCategory ? "🔽" : "🔼"}</span>
        </div>
        {showCategory && (
          <div className="bg-white mt-2 ">
            <ItemList menuItems={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
