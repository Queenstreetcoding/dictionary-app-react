import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Results.css";

export default function Results(props){
    if (props.results) {
        return(
            <div className="Results">
                <div className="row justify-content-between two-rows">
                    <div className="col-6">
                        <h2 className="Word">{props.results.word}</h2>
                    </div>
                    <div className="col-6">
                        {props.results.phonetics.map(function(phonetic, index){
                            return(
                                <div key={index}>
                                    <Phonetic phonetic={phonetic} />
                                </div>
                            )
                        })}
              </div>
                </div>
            <div className="Meanings">
            {props.results.meanings.map(function(meaning, index){
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                )
            })}
        </div>
    </div>

        ); } else {
    return null;
    }
}