import React from "react";

interface DropdownProps {
  breeds: string[];
  onSelect: (breed: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ breeds, onSelect }) => (
  <select onChange={(e) => onSelect(e.target.value)} className="w-[300] p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 capitalize">
    <option value="">Select a breed</option>
    {breeds.map((breed) => (
      <option key={breed} value={breed} className="capitalize">
        {breed}
      </option>
    ))}
  </select>
);

export default Dropdown;
