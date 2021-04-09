import React, { Component } from 'react';
// import styled from "styled-components/marco";
import background from '../Imgs/background.jpg';

const BodyImage = {
    postition: "absolute",
    top:0,
    left:0,
    width: "50vw",
    height:"80vh",
    objectFit:"cover",
    paddingTop: "20px"
}


function Body(){

        return (
            <div>
                <img style={BodyImage} src={background} />
            </div>
        );
    }


export default Body;