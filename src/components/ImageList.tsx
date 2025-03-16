import React from "react";
import { useDrop } from "react-dnd";
import DraggableImage from "./DragableImage";

interface ImageListProps {
  images: string[];
  title: string;
  favorites?: string[];
  toggleFavorite?: (image: string) => void;
  onDropImage?: (image: string) => void; // Handle dropped images
}

const ImageList: React.FC<ImageListProps> = ({
  images,
  title,
  favorites = [],
  toggleFavorite,
  onDropImage,
}) => {
  // Drop target for images
  const dropRef = React.useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: "IMAGE",
    drop: (item: { image: string }) => {
      if (onDropImage) {
        onDropImage(item.image);
      }
    },
  });

  React.useEffect(() => {
    if (dropRef.current) {
      drop(dropRef.current);
    }
  }, [drop]);

  return (
    <div ref={dropRef} className="relative max-h-[400px] overflow-y-auto p-4 rounded-lg drop-shadow-lg bg-gray-50">
      <h2 className="text-lg font-semibold mb-4 capitalize">{title} - ({images.length}) Found</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <DraggableImage key={index} image={image} title={title} favorites={favorites} toggleFavorite={toggleFavorite} />
        ))}
      </div>
    </div>
  );
};



export default ImageList;
