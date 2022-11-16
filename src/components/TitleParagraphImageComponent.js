import React from 'react';

function TitleParagraphImageComponent (props){
    return(
        <>
            <h1>{props.title}</h1>
            <img src={props.image}></img>

            <p>{props.p1}</p>
            <p>{props.p2}</p>

        </>

    )
}

export default TitleParagraphImageComponent;