import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();

        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return(
        <div>
        <div className="Dictionary" onSubmit={search}>
            <h4>What word would you like to learn?</h4>
            <form>
                <input type="Search" onChange={handleKeywordChange} autofocus={true} placeholder="Type your word" className="border border-dark-subtle rounded-1"/>
            </form>
        </div>
            <span><i class="bi bi-book"></i></span>
            <span><Results results={results}/></span>
        </div>
    )
}