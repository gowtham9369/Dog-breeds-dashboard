import React from "react";

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Search
  </button>
);

export default SearchButton;
