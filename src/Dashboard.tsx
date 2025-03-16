import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/DropDown";
import SearchButton from "./components/SearchButton";
import ImageList from "./components/ImageList";
import { useFavorites } from "./context/FavoritesContext";
import useBreeds from "./hooks/useFetchBreeds";
import useBreedImages from "./hooks/useBreedImages";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; // Import styles for toast notifications


const Dashboard : React.FC = () => {
    const breeds = useBreeds();
    const { favorites, toggleFavorite } = useFavorites();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filteredBreeds, setFilteredBreeds] = useState<string[]>([]);
    const [selectedBreed, setSelectedBreed] = useState<string | null>("hound");
    const breedImages = useBreedImages(selectedBreed);
  
    useEffect(() => {
      setFilteredBreeds(breeds);
    }, [breeds]);
  
    const handleSearch = (query: string) => {
      setFilteredBreeds(
        breeds.filter((breed: string) =>
          breed.toLowerCase().includes(query.toLowerCase())
        )
      );
      setSearchQuery(query);
    };
  
    // Handle image drop to favorites
    const handleDropToFavorites = (image: string) => {
      if (!favorites.includes(image)) {
        toggleFavorite(image); // Add image to favorites
        toast.success("Added to favorites!"); // Success toast message
      }
    };

    const searchBreed = () => {
        console.log("searching for breed");
        if (selectedBreed) {    
            setSelectedBreed(searchQuery);
        }
    }
  
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="flex items-center space-x-4">
          <Dropdown breeds={filteredBreeds} onSelect={setSelectedBreed} />
          <SearchBar onSearch={handleSearch} />
          <SearchButton onClick={searchBreed} />
        </div>
  
        <div className="mt-6 space-y-6">
          {/* Breed Images List */}
          <ImageList
            images={breedImages}
            title={selectedBreed || "All"}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
  
          {/* Favorite Breeds (Drop Target) */}
          <ImageList
            images={favorites}
            title="Favorite Breeds"
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            onDropImage={handleDropToFavorites} // Handle dropped images
          />
        </div>
        <ToastContainer position="top-right" className="rounded" autoClose={3000} />
      </DndProvider>
    );
  };

  export default Dashboard;