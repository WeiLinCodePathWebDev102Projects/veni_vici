import React from "react";

const AstroPics = ({picData}) =>{
    console.log(picData);

    const copyright = `${picData.copyright}`;
    //console.log(copyright);
    const date = `${picData.date}`;
    //console.log(date);
    const title = `${picData.title}`;
    //console.log(title);
    const url = `${picData.url}`;
    //console.log(url);
    const description = `${picData.explanation}`;
    //console.log(description);




    return(
        <div className="astronomyPics" >
            <h2>
                {title}
            </h2>
            <img src={url}/>
            <p> Copyright: {copyright} </p>
            <p> Date Taken: {date} </p>
            <p> {description}</p>
        </div>
    )

}

export default AstroPics;