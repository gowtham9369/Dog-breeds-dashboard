import { useState, useEffect } from "react";
import { fetchBreeds } from "../services/api";

const useBreeds = () => {
  const [breeds, setBreeds] = useState<string[]>([]);

  useEffect(() => {
    fetchBreeds().then(setBreeds);
  }, []);

  return breeds;
};

export default useBreeds;
