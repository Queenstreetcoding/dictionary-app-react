import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "Photos.js";
import { Book } from "react-bootstrap-icons";
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword] = useState("sunset");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePhotoResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let photoApiKey ="d491caa2745b3f084379b6tba1a6oba9";
        let photoApiUrl =`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;
        axios.get(photoApiUrl).then(handlePhotoResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }

    if (loaded){
    return(
        <div>
        <div className="Dictionary" onSubmit={handleSubmit}>
            <h4>What word would you like to learn?</h4> 
            <form>
                <input type="Search" onChange={handleKeywordChange} autoFocus={true} placeholder="Type your word" />
                <span className="ps-3"><Book size={20} /></span>
            </form> 
            <div className="Hint">Suggested words: sunset, book, flower, wine, dog...</div>
        </div>
            <span><Results results={results}/></span>
            <Photos photos={photos} />
        </div>
    )
} else {
    load();
    return "Loading...";
}}