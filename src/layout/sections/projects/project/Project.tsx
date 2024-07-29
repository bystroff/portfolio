import React from "react";
import styled from "styled-components";

type ProjectPropsType = {
    title: string
    description: string
    src: string
    tech: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt="" />
            <Technologies>{props.tech}</Technologies>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Link href={"#"}>Link {"<~~>"}</Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    width: 331px;
    color: #ffffff;
    gap: 20px;
`
const Image = styled.img`
    width: 330px;
    height: 201px;
    object-fit: cover;
`

const Technologies = styled.p`

`

const Title = styled.h3`

`

const Description = styled.p`

`

const Link = styled.a`

`