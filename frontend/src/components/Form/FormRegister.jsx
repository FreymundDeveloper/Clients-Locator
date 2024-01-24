import React from "react";
import styled from "styled-components";

export const FormRegister = (props) => {
    const { user, updateField, save } = props;

    return (
        <FormWrapper>
            <Row>
                <Col width="50%">
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" name="name" value={user.name} onChange={(event) => updateField(event)} placeholder="Enter a name..." />
                    </FormGroup>
                </Col>

                <Col width="50%">
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="text" name="email" value={user.email} onChange={(event) => updateField(event)} placeholder="Enter an email..." />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col width="40%">
                    <FormGroup>
                        <Label>Phone Number</Label>
                        <Input type="text" name="phoneNumber" value={user.phoneNumber} onChange={(event) => updateField(event)} placeholder="Enter a phone number..." />
                    </FormGroup>
                </Col>

                <Col width="30%">
                    <FormGroup>
                        <Label>Latitude</Label>
                        <Input type="text" name="latitude" value={user.latitude} onChange={(event) => updateField(event)} placeholder="Enter latitude..." />
                    </FormGroup>
                </Col>

                <Col width="30%">
                    <FormGroup>
                        <Label>Longitude</Label>
                        <Input type="text" name="longitude" value={user.longitude} onChange={(event) => updateField(event)} placeholder="Enter longitude..." />
                    </FormGroup>
                </Col>
            </Row>

            <FormActions>
                <Button onClick={save}>Save</Button>
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

const Label = styled.label`
    display: block;
    font-size: 14px;
    text-align: left;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 12px;
    border: 1px solid #ccc;
    border-radius: 14px;
    box-sizing: border-box;
`;

const Button = styled.button`
    background-color: ${(props) => props.theme.color.buttonColor};
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 10px;
    margin-right: 10px;
    border-radius: 14px;
    cursor: pointer;
`;

const FormActions = styled.div`
    text-align: right;
`;