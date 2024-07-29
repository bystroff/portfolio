import React from "react";
import styled from "styled-components";
import {Button} from "../../components/Button"

export const ContactForm = () => {
    return (
        <StyledContactForm>
            <Field placeholder={"Name"} />
            <Field placeholder={"Email"} />
            <Field placeholder={"Title"} />
            <Field placeholder={"Message"} as={"textarea"} />
            <Button type={"submit"}>Send</Button>
        </StyledContactForm>
    );
};

const StyledContactForm = styled.form`
    background-color: #282C33;
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px
    margin: 0 auto;
`

const Field = styled.input`

`