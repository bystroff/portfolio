import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Menu } from "../../../components/menu/Menu";

const projectItems = ["ALL", "LANDING PAGE", "REACT", "SPA"]

export const Projects = () => {
    return (
        <SectionProject>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
            <SectionTitle>#Porjects</SectionTitle>
            <div><a href="#">View all</a></div>
            </FlexWrapper>
            <Menu menuItems={projectItems}/>
        </SectionProject>
    );
};

const SectionProject = styled.section`
    min-height: 100vh;
    background-color: #282C33;
`