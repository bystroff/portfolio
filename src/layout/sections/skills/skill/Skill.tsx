import React from "react";
import styled from "styled-components";

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
                <tr>
                    <SkillTitle>{ props.title }</SkillTitle>
                </tr>
                <tr>
                    <SkillDescription>{ props.description }</SkillDescription>
                </tr>
        </StyledSkill>
    );
};

const StyledSkill = styled.table`
    width: 178px;
    border: 1px solid white;
`

const SkillTitle = styled.thead`
    border: 1px solid white;
`

const SkillDescription = styled.td`

`