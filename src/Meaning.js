import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props){
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index){
                return (
                    <div key={index}>
                        <strong>Definition: </strong>{definition.definition}
                        <br />
                        <strong>Example: </strong><em>{definition.example}</em>
                        <br />
                        <strong>Synonyms: </strong><Synonyms synonyms={definition.synonyms} />
                    </div>
                )
            })}
        </div>
    )
}