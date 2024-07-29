import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type MediaPropsType = {
    id: string
    description: string
}

export const Media = (props: MediaPropsType) => {
    return (
        <StyledMedia>
            <Icon iconId={ props.id } />
            <Description>{ props.description }</Description>
        </StyledMedia>
    );
};

const StyledMedia = styled.p`
    color: #ffffff; 
`

const Description = styled.span`

`