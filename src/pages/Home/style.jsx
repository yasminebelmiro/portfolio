import styled from "styled-components";

export const HomeContainer = styled.section`
width: 30%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;

`;

export const Image = styled.img`
max-width: 100%;
width: 200px;
border-radius: 100%;
border: 8px solid white;
margin-bottom: 1.5rem;
`

export const Name = styled.h1`
font-size: 25px;
margin-bottom: .5rem;
`

export const Hole = styled.h2`
font-size: 18px;
background-color: var(--purple);
padding: .5rem;
margin-bottom: 2rem;
border-radius: 10px;
`

export const Text = styled.p`
font-size: 18px;
display: flex;
align-items: center;
margin-bottom: .3rem;`

export const TextIcons = styled.div`
font-size: 24px;
margin-right: 5px;`

export const SocialContainer = styled.div`
display: flex;
margin-top: 1rem;
`

export const SocialIcons = styled.div`
font-size: 35px;`
