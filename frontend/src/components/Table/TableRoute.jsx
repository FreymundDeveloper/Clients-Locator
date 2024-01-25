import React from "react";
import styled from "styled-components";
import { Title } from "../../components";

const columns = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name' },
    { key: 'latitude', label: 'Latitude' },
    { key: 'longitude', label: 'Longitude' },
];

export const TableRoute = ({ list }) => {
    const renderRows = () => {
        return list.map((route, index) => (
            <TableRow key={route.id}>
                {columns.map((column) => (
                    <TableCell key={column.key} isLastCell={index === list.length - 1}>
                        {route[column.key]}
                    </TableCell>
                ))}
            </TableRow>
        ));
    };

    return (
        <StyledTable>
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
        </StyledTable>
    );
};

const StyledTable = styled.table`
    width: 100%;
    max-width: 100%;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 14px;
    overflow-x: auto;
`;

const TableHead = styled.thead`
    background-color: #f8f9fa;
    color: #212529;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: ${(props) => props.theme.color.formColor};
    }    
`;

const TableHeaderCell = styled.th`
    padding: 10px;
    text-align: left;
    &:first-child {
        border-top-left-radius: 14px;
    }

    &:last-child {
        border-top-right-radius: 14px;
    }
`;

const TableCell = styled.td`
    padding: 10px;
    font-size: 10px;
    text-align: left;

    &:first-child {
        border-bottom-left-radius: ${(props) => (props.isLastCell ? "14px" : "0")};
    }

    &:last-child {
        border-bottom-right-radius: ${(props) => (props.isLastCell ? "14px" : "0")};
    }
`;
