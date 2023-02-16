import styled from "styled-components";

export const TableLine = styled.tr`
`;

export const TableColumn = styled.td`
    padding: 10px 0;

`;

export const Category = styled.div`
    display: flex;
    margin-right: 10px;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 5px 10px;
    color: #FFF;
    background-color: ${props => props.color};
    border-radius: 5px;
`;

export const Amount = styled.div`
    color: ${props => props.color};
    font-weight: bold;
`;