import { useState, useEffect, startTransition } from "react";
import { fetchBreedsImages } from "../services/api";

const useBreedImages = (breed: string | null): string[] => {
    const [images, setImages] = useState<string[]>([]);
  
    useEffect(() => {
      if (!breed) return; // ✅ Prevent API call if breed is null
  
      const getImages = async () => {
        const images = await fetchBreedsImages(breed);
        startTransition(() => setImages(images));
      };
  
      getImages();
    }, [breed]);
  
    return images;
  };

  export default useBreedImages;
  
