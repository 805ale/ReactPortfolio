import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes'
import {Design, Develope} from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'


const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubutntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&: hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1rem + 1vw);

${Main}: hover &{
    &>*{
        fill: ${props => props.theme.body};
    }
}

&>*: first-child{
    margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.5em + 1vw);
padding: 0.5rem 0;

${Main}: hover &{
        color: ${props => props.theme.body};
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul, p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>

           <Box>
            
            <LogoComponent />
            <SocialIcons theme = 'light' />
            <PowerButton />
            <ParticleComponent theme='light' />

            <Main>
                <Title>
                    <Design width={40} height={40} /> Design and 3D Modelling
                </Title>

                <Description>
                    I love to design and create art, mainly focusing on story-telling, game design and 3D modelling.
                </Description>

                <Description>
                    <strong>I like to design and create</strong>
                    <ul>
                        <li>
                            Web Design
                        </li>
                        <li>
                            Mobile Apps
                        </li>
                        <li>
                            Game Design
                        </li>
                        <li>
                            3D Models
                        </li>
                    </ul>
                </Description>

                <Description>
                    <strong>Tools</strong>
                    <ul>
                        <li>
                            WordPress
                        </li>
                        <li>
                            PhotoShop
                        </li>
                        <li>
                            Blender
                        </li>
                    </ul>
                </Description>
            </Main>
            
            <Main>
                <Title>
                    <Develope width={40} height={40} /> Developer
                </Title>

                <Description>
                    I always strive to write clean and cache friendly code.
                </Description>

                <Description>
                    <strong>Skills</strong>
                    <p>
                        C++, C#, UE4 Blueprints, Lua, HTML, CSS, JavaScript, React, Java, SQL, etc.
                    </p>
                </Description>

                <Description>
                    <strong>Tools</strong>
                    <ul>
                        <p>
                            Unreal Engine 4, Unity, Visual Studio, Github, Codepen, PHPStorm, NetBeans, etc.
                        </p>
                    </ul>
                </Description>
            </Main>

           </Box>  

        </ThemeProvider>
       
    )
}

export default MySkillsPage