import React from "react";
import Meaning from "./Meaning.js";
import "./Word.css";

export default function Results(props){
    if (props.results) {
        return (
        <div className="Results">
            <div className="row">
                <div className="col-6">
                    <h2 className="Word">{props.results.word}</h2>
                </div>
                <div className="col-6">
                
                </div>
            <div className="Meaning">
            {props.results.meanings.map(function(meaning, index){
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                
                )
            })}
        </div>
        </div>
        </div>
        ); } else {
    return null;
    }
}