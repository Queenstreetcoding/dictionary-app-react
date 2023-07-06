import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function search(event){
        event.preventDefault();
        alert (`Searching for ${keyword}`);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value)
    }

    return(
        <div className="Dictionary" onSubmit={search}>
            <form>
                <input type="Search" onChange={handleKeywordChange} autofocus={true} placeholder="Type your word"/>
            </form>
        </div>
    )
}