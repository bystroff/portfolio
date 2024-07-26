import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const items = ["home", "projects", "about-me", "contacts"];

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={items} />
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #282C33;
    display: flex;
    justify-content: space-between;
`