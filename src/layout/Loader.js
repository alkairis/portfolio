import styled from "styled-components";

export const Loader = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Math&display=swap');

    height: 100vh;
    width: 100vw;
    align-items: center;
    display: flex;
    justify-content: center;
`

export const LoaderText = styled.p`
    border-radius: 150px;
    background: linear-gradient(315deg, #c8c8c8, #eeeeee);
    box-shadow:  -9px -9px 18px #838383,
                9px 9px 18px #c8c8c8;
    width: 60px;
    height: 60px;
    font-family: 'STIX Two Math', serif;
    font-size: 54px;
    color : #0F1624;
    display: flex;
    justify-content: center;
    align-items: center;
`