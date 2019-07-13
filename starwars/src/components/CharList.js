import React from "react";
import Character from "./Character";

const CharList = (props) => {
return(
    <>
        {props.charList.map(char => <Character charInfo={ char }/>)}
    </>
) 

}

export default CharList;
