import React from "react";
import styled from "styled-components";
import photo from '../../../assets/images/man.webp';
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-arround"}>
            <div>
                <MainTitle>Elias is a web designer and front-end developer</MainTitle>
                <span>He crafts responsive websites where technologies meet creativity</span>
                <button>Contact me !!</button>
            </div>
            <Photo src={ photo } alt="" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #444444;
`

const Photo = styled.img`
    width: 457px;
    height: 386px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`