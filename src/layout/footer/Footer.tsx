import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from '../../components/logo/Logo';
import { Icon } from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper>
                <StyledLogo>
                    <Logo/> elias@elias-dev.ml
                </StyledLogo>
                <Description>Web designer and front-end developer</Description>
                <Media>
                    <Name>Media</Name>
                    <MediaList>
                    <MediaItem>
                            <MediaLink>
                                <Icon iconId={"github"} />
                            </MediaLink>
                        </MediaItem>
                        <MediaItem>
                            <MediaLink>
                                <Icon iconId={"figma"} />
                            </MediaLink>
                        </MediaItem>
                        <MediaItem>
                            <MediaLink>
                                <Icon iconId={"discord"} />
                            </MediaLink>
                        </MediaItem>
                    </MediaList>
                </Media>
            </FlexWrapper>
            <Copyright>© Copyright 2022. Made by Elias</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    align: center;
    background-color: #282C33;
    min-height: 20vh;
`

const StyledLogo = styled.p`
    color: #ffffff;
`
const Description = styled.p`
    color: #ffffff;
`
const Media = styled.div`
    color: #ffffff;
`
const Name = styled.h3`
    color: #ffffff;
`
const MediaList = styled.ul`
    display: flex;
    gap: 30px;
`
const MediaItem = styled.li`

`
const MediaLink = styled.p`

`
const Copyright = styled.small`
    color: #ABB2BF;
`