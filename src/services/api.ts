import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL:string = "https://dog.ceo/api";

export const fetchBreeds = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/breeds/list/all`);
    toast.success("Breeds fetched successfully!"); // Success message
    return Object.keys(response.data.message);
  } catch (error) {
    console.error("Error fetching breeds", error);
    toast.error("Error fetching breeds. Please try again."); // Error message
    return [];
  }
};

export const fetchBreedsImages = async (breed:string): Promise<string[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/breed/${breed}/images`);
    console.log("response--fetch Breeds Images", response);
    toast.success(`Images for ${breed} fetched successfully!`); // Success message
    return response.data.message;
  } catch (error) {
    console.error("Error fetching breeds", error);
    toast.error(`Error fetching images for ${breed}. Please try again.`); // Error message
    return [];
  }
};
