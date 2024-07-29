import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Media } from "./media/Media";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>#contacts</SectionTitle>
            <FlexWrapper align={"center"} justify={"space-arround"}>
                <Description>I’m interested in freelance opportunities. However, if 
                    you have other request or question, don’t hesitate to 
                    contact me
                </Description>
                <MessengerBlock>
                    <Title>Message me here</Title>
                    <Media id={"discord"} description={"@elias"} />
                    <Media id={"email"} description={"elias@elias.me"} />
                </MessengerBlock>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: #444444;
`

const Description = styled.p`
    color: #ffffff;
`

const MessengerBlock = styled.div`
    border: 1px solid #ABB2BF;
`
const Title = styled.h3`
    color: #ffffff;
`