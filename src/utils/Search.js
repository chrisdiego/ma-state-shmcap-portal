import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Search = () => {
    const [searchValue, setSearchValue] = useState("");

    const updateSearchValue = (e) => {
        setSearchValue(e.target.value)
    };
    return (
        <div className="search mt-2">
            <input className="border-0" placeholder="SEARCH" onChange={(e) => updateSearchValue(e)} value={searchValue} />
            <Link to={searchValue !== "" ? `/search/${searchValue}`: null} value={searchValue}>
                <FontAwesomeIcon className="mr-2 text-secondary" icon={faSearch}/>
            </Link>
        </div>
    );
};

export default Search;