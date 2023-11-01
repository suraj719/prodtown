import styled from "styled-components"

export const Filter = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:20px;
    align-items:center;
    margin-bottom:20px;
`
export const Search = styled.div`
color:white;
    border:2px solid black;
    border-radius:13px;
    // background-color:black;
    input{
        // color:white;
        border-radius:20px;
        padding: 8px 15px;
        font-size:18px;
        outline:none;
        border:none;
        // background-color:black;
    }
`
export const Category = styled.div`
    select{
        border:2px solid black;
        padding:8px 10px;
        border-radius:20px;
        font-size:20px;
        color:white;
        background-color:black;
        min-width:10rem;
    }
    option{
        font-weight:bold;
    }
    label{
        font-weight:bold;
    }
`
