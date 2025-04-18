import React from "react";

const SearchBar = ({searchTerm, setSearchTerm}) => {
    return (
        <input type="text" className="search-bar"placeholder="search expense" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
    );
};
export default SearchBar;