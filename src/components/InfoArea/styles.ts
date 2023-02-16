import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    margin-top: -40px;
`;

export const MonthArea = styled.div`
    flex: 1 !important;
    display: flex;
    align-items: center;
`;

export const MonthArrow = styled.div`
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1 !important;
    text-align: center;
`;

export const ResumeArea = styled.div`
    flex: 2 !important;
    display: flex;
`;
