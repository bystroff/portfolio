import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>#testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId="logoPurple" />
                <Slider />
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #444444;
    min-height: 50vh;
`