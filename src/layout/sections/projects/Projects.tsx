import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitile";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Menu } from "../../../components/menu/Menu";
import { Project } from "./project/Project";
import chertNodesImg from "../../../assets/images/ban1.webp"
import projectXImg from "../../../assets/images/ban2.webp"
import kahootImg from "../../../assets/images/ban3.webp"


const projectItems = ["ALL", "LANDING PAGE", "REACT", "SPA"]

export const Projects = () => {
    return (
        <SectionProject>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <SectionTitle>#porjects</SectionTitle>
                <div><a href="#">View all</a></div>
            </FlexWrapper>
            <Menu menuItems={projectItems} />
            <FlexWrapper justify="space-around">
                <Project src={chertNodesImg} tech={"HTML SCSS Python Flask"} title={"ChertNodes"} description={"Minecraft servers hosting"} />
                <Project src={projectXImg} tech={"React Express Discord.js Node.js HTML SCSS Python Flask"} title={"ProjectX"} description={"Discord anti-crash bot"} />
                <Project src={kahootImg} tech={"CSS Express Node.js"} title={"Kahoot Answers Viewer"} description={"Get answers to your kahoot quiz"} />
            </FlexWrapper>
        </SectionProject>
    );
};

const SectionProject = styled.section`
    min-height: 100vh;
    background-color: #282C33;
`