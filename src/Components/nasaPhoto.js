import React from "react";
import styled from 'styled-components'

const StyledDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`;
const StyledTitle = styled.h1`
 background: black;
 color: white;
`;
const StyledDate = styled.p`

`;
const StyledPhoto = styled.img`
    max-width: 80%;
    object-fit: cover;

`;
const StyledExplanation = styled.p`
    max-width: 50%;
    font-size: 20px;
`;
const StyledCopyright = styled.p`
    margin-left: auto;
`;



const NasaPhoto = (props) => {
    return (
        <StyledDiv>
            <StyledTitle>{props.photo.title}</StyledTitle>
            <StyledDate>{props.photo.date}</StyledDate>
            <StyledPhoto src={props.photo.hdurl} />
            <StyledExplanation>{props.photo.explanation}</StyledExplanation>
            <StyledCopyright>@{props.photo.copyright}</StyledCopyright>
        </StyledDiv>
    )
}

export default NasaPhoto;