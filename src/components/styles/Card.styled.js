import styled from "styled-components"
export const Image = styled.img`
    src: ${({src})=>src};
    alt:${({alt})=>alt};
    height:10rem;
    width:10rem;
`
export const Title = styled.p`
    font-weight:bold;
    font-size:22px;
    text-align:center;
`
export const Desc = styled.p`
    font-weight:400;
    font-size:18px;
`
export const  Card =  styled.div`
    margin-top:20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition: all 0.5s;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    gap:5px;
    text-align:center;
    padding:20px;
    border:1px solid #333332;
    max-width:22rem;

    &:hover{
        transform:scale(1.04);
    }
    font-size:20px;
    span{
        font-weight:bold;
    }

`