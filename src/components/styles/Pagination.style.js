import styled from "styled-components"
export const Button = styled.a`
    background-color: black;
    border-radius: 50px;
    padding: 10px 18px;
    color: white;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        background-color:#595857;
    }
`
export const  PaginationStyle =  styled.div`
    margin: 50px 0;
    display:flex;
    justify-content: center;
    flex-wrap: nowrap;
    font-size:large;
    ul {
        display:flex;
        gap:10px;
        font-size:30px;
        list-style:none;
    }
`