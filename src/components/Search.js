import React from "react";

function Search({handleSearch}) {
    return (
        <div className="search">
            <input className="form-control w-80 px-3 py-1.5 text-base font-normal text-gray-700
            bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
            m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                   type="text"
                   placeholder="Search here..."
                   onChange={(event) => handleSearch(event.target.value)}/>
        </div>
    )
}

export default Search