import React from "react";
import styled from "styled-components";

export const Title = ({ size, children }) => {
    return <StyledLabel size={size}>{children}</StyledLabel>;
}

const StyledLabel = styled.label`
    display: block;
    font-size: ${(props) => (props.size === "table" ? "12px" : "16px")};
    text-align: left;
`;
