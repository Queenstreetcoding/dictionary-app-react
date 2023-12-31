import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props){
    return (
        <div className="Phonetic">
            <span className="Text"> {props.phonetic.text}</span>
            <ReactAudioPlayer
                className="mt-2"
                src={props.phonetic.audio}
                controls
            />
        </div>
    )
}