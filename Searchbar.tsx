// import { useEffect } from "react";
// import { startTransition, useState } from "react";

// const Searchbar = () => {
//   const [breeds, setBreeds] = useState<string[]>([]);
//   const [search, setSearch] = useState<string>("");

//   useEffect(() => {
//     fetch(`${BASE_URL}/breeds/list/all`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("data", data);
//         if (data.message) {
//             const breeds_arr = Object.keys(data.message);
//             console.log("breeds_arr", breeds_arr);
//             startTransition(() => {
//             setBreeds(breeds_arr);
//           });
//         } else {
//           console.log("Error fetching data");
//         }
//       });
//   }, []);

//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Search", e.currentTarget.category.value, e.currentTarget.search.value);
//   };

//   const searchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log("Search", e.currentTarget.value);   
//   };
//   return (
//     <div className="container">
//       <form onSubmit={(e) => handleSearch(e)}>
//         <label htmlFor="category">Select Breed</label>
//         <select name="category" id="category">
//           <option defaultValue="all">All</option>
//           {breeds.map((breed, index) => (
//             <option key={index} value={breed}>
//               {breed}
//             </option>
//           ))}
//         </select>
//         <label htmlFor="search">Search</label>
//         <input type="text" onChange={searchBar} placeholder="Search..." value={search} className="border " />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };

// export default Searchbar;
