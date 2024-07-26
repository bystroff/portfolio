import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitile";
import { Skill } from "./skill/Skill";
import { wrap } from "module";

export const Skills = () => {
    return (
        <SectiondSkills>
            <SectionTitle>#skills</SectionTitle>
            <div></div>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill title={"Languages"} 
                description={"JavaScript TypeScript PHP Python"} />
                <Skill  title={"DataBases"} 
                description={"SQLite PostgreSQL Mongo"}/>
                <Skill  title={"Tools"} 
                description={"VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"}/>
                <Skill  title={"Frameworks"} 
                description={"React Vue Disnake Express.js Laravel Flask Discord.js"}/>
                <Skill  title={"Other"} 
                description={"HTML CSS EJS SCSS REST Jinja"}/>
            </FlexWrapper>
        </SectiondSkills>
    );
};

const SectiondSkills = styled.section`
    background-color: #282C33;
    color: #ffffff;
    min-height: 100vh;
`