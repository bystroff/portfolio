import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from '../../../assets/images/man2.webp';

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>#about-me</SectionTitle>
            <FlexWrapper align={"center"} justify={"space-arround"}>
                <Description>Hello, i’m Elias! I’m a self-taught front-end developer 
                    based in Kyiv, Ukraine. I can develop responsive websites from 
                    scratch and raise them into modern user-friendly web experiences. 
                    Transforming my creativity and knowledge into a websites has been 
                    my passion for over a year. I have been helping various clients to 
                    establish their presence online. I always strive to learn about the 
                    newest technologies and frameworks.

                    <Button as={"a"}>Read more {"->"}</Button>
                    
                </Description>
                <Photo src={ photo } alt="" />
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    background-color: #282C33;
`

const Description = styled.p`
    color: #ffffff;
`

const Photo = styled.img`
    width: 339px;
    height: 507px;
    object-fit: cover;
`

const Button = styled.a`

`