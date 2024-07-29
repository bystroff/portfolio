import React from "react";
import styled from "styled-components";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Text>*Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sunt obcaecati, veritatis adipisci voluptatem labore necessitatibus in similique eveniet architecto repellat vel blanditiis maxime, praesentium expedita quia ipsum et sapiente.</Text>
                <Name>@IVAN IVANOV</Name>
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    border: 1px solid purple;
    color: #ffffff;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p`

`

const Name = styled.span`

`