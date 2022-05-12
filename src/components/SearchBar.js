import React, {useCallback, useEffect, useState} from "react";
import _ from "lodash";

const SearchBar = ( {handleSubmit} ) => {

    const [ input, setInput ] = useState("");
    const cachedDebouncedFn = useCallback(_.debounce(handleSubmit, 500), [handleSubmit]);
    //use debounce form lodash to make the app more efficient with less request from the api
    //waits 1/2 second from last input to make another request 

    useEffect(() => {
        cachedDebouncedFn(input)
    }, [input, cachedDebouncedFn])

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div id="searchbar-container">
            <input value={input} onChange={handleChange} placeholder="Search Pokemon..."/>
        </div>
        
    )
}

export default SearchBar;