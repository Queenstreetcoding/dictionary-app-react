import React from "react";
import { PlayCircle } from "react-bootstrap-icons";
import "./Phonetic.css";

export default function Phonetic(props){
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                <span className="Play"><PlayCircle size={40}/></span>
            </a>
            <span className="Text"> {props.phonetic.text}</span>
        </div>
    )
}