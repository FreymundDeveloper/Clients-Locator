import React from "react";
import styled from "styled-components";
import { Title, ButtonAction, InputForm } from "../../components";

export const FormRegister = (props) => {
    const { user, updateField, save } = props;

    return (
        <FormWrapper>
            <Row>
                <Col width="50%">
                    <FormGroup>
                        <Title size="form">Name</Title>
                        <InputForm format="text" name="name" value={user.name} onChange={(event) => updateField(event)} placeholder="Enter a name..." />
                    </FormGroup>
                </Col>

                <Col width="50%">
                    <FormGroup>
                        <Title size="form">Email</Title>
                        <InputForm format="email" name="email" value={user.email} onChange={(event) => updateField(event)} placeholder="Enter an email..." />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col width="40%">
                    <FormGroup>
                        <Title size="form">Phone Number</Title>
                        <InputForm format="number" name="phone" value={user.phone} onChange={(event) => updateField(event)} placeholder="Enter a phone number (only numbers)..." />
                    </FormGroup>
                </Col>

                <Col width="30%">
                    <FormGroup>
                        <Title size="form">Latitude</Title>
                        <InputForm format="number" name="latitude" value={user.latitude} onChange={(event) => updateField(event)} placeholder="Enter latitude..." />
                    </FormGroup>
                </Col>

                <Col width="30%">
                    <FormGroup>
                        <Title size="form">Longitude</Title>
                        <InputForm format="number" name="longitude" value={user.longitude} onChange={(event) => updateField(event)} placeholder="Enter longitude..." />
                    </FormGroup>
                </Col>
            </Row>

            <FormActions>
                <ButtonAction onClick={save}>Save</ButtonAction>
            </FormActions>
        </FormWrapper>
    );
}

const FormWrapper = styled.div`
    background-color: ${(props) => props.theme.color.formColor};
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 96vh;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 14px 14px 0px 0px;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    flex: 0 0 ${(props) => props.width};
    @media (min-width: 768px) {
        flex: 0 0 calc(${(props) => props.width});
    }
    padding: 10px;
    box-sizing: border-box;
`;

const FormGroup = styled.div`
    margin-bottom: 5px;
`;

const FormActions = styled.div`
    text-align: right;
`;