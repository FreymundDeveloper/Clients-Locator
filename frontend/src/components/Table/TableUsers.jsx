import React from "react";
import styled from "styled-components";
import { Title } from "../../components";

const columns = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'latitude', label: 'Latitude' },
    { key: 'longitude', label: 'Longitude' },
];

export const TableUsers = ({ list }) => {
    const renderRows = () => {
        return list.map((user, index) => (
            <TableRow key={user.id}>
                {columns.map((column) => (
                    <TableCell key={column.key} isLastCell={index === list.length - 1}>{user[column.key]}</TableCell>
                ))}
            </TableRow>
        ));
    };

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableHeaderCell key={column.key}>
                            <Title size="table">{column.label}</Title>
                        </TableHeaderCell>
                    ))}
                </TableRow>
            </TableHead>
            <tbody>{renderRows()}</tbody>
        </Table>
    );
};

const Table = styled.table`
    width: 100%;
    max-width: 98.664vh;
    margin: 0 auto;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 0px 0px 14px 14px;
`;

const TableHead = styled.thead`
    background-color: #f8f9fa;
    color: #212529;
`;

const TableRow = styled.tr`
    max-width: 100%;
    &:nth-child(even) {
        background-color: ${(props) => props.theme.color.formColor};
    }
`;

const TableHeaderCell = styled.th`
    padding: 10px;
    text-align: left;
`;

const TableCell = styled.td`
    padding: 10px;
    font-size: 10px;
    text-align: left;

    &:first-child {
        border-bottom-left-radius: ${(props) => (props.isLastCell ? "14px" : "0")}
    }

    &:last-child {
        border-bottom-right-radius: ${(props) => (props.isLastCell ? "14px" : "0")};
    }
`;