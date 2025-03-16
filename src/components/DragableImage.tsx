import React from "react";
import { useDrag } from "react-dnd";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface ImageProps {
  image: string;
  title: string;
  favorites: string[];
  toggleFavorite?: (image: string) => void;
}

// Draggable Image Component
const DraggableImage: React.FC<ImageProps> = ({
  image,
  title,
  favorites,
  toggleFavorite,
}) => {
  const isFavorite = favorites.includes(image);

  // Make image draggable
  const [{ isDragging }, drag] = useDrag({
    type: "IMAGE",
    item: { image },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const dragRef = React.useRef<HTMLDivElement>(null);
  drag(dragRef);

  return (
    <div
      ref={dragRef}
      className={`relative bg-white rounded-lg shadow-lg overflow-hidden w-60 h-72 flex flex-col border border-gray-100 cursor-move ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="w-60 h-72 object-cover rounded-t-lg"
      />
      <button
        className="absolute bottom-2 right-2 text-xl transition-all bg-gray-50 p-1 rounded-full cursor-pointer text-red-700 duration-300 hover:text-red-700 hover:scale-110"
        onClick={() => toggleFavorite && toggleFavorite(image)}
        title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      >
        {isFavorite ? (
          <FaHeart className="text-red-700" />
        ) : (
          <FaRegHeart className="text-red-700" />
        )}
      </button>
    </div>
  );
};

export default DraggableImage;
