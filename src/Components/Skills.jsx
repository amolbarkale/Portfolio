import React from 'react'
import styled from 'styled-components'
import Skill from './Skill'


export default function Skills() {
    
    const skillsData = [
        { name: "HTML", url: "html.svg" },
        { name: "CSS", url: "css.svg" },
        { name: "JavaScript", url: "js.svg" },
        { name: "React", url: "react.svg" },
        { name: "Redux", url: "redux.svg" },
        { name: "Node", url: "node.svg" },
        { name: "Express", url: "express.svg" },
        { name: "MongoDB", url: "mongo.svg" },
        { name: "Git", url: "git.svg" },
    ];
    return (
        <Cont id="skills">
            <Heading>Skills</Heading>
            <SkillsCont>
                <Skill data={skillsData}/>
            </SkillsCont>
        </Cont>
    )
}



const Cont = styled.div`
background-color: #67687c;
padding-bottom: 8rem;
padding-top:20px;
   clip-path: polygon(
          0 8%,
          /* left top */ 100% 0,
          /* right top */ 100% 92%,
          /* right bottom */ 0 100% /* left bottom */
        );
          @media (max-width: 1264px) {
      clip-path: polygon(
          0 7%,
          /* left top */ 100% 0,
          /* right top */ 100% 93%,
          /* right bottom */ 0 100% /* left bottom */
        );
    }
    @media (max-width: 768px) {
       clip-path: polygon(
          0 5%,
          /* left top */ 100% 0,
          /* right top */ 100% 95%,
          /* right bottom */ 0 100% /* left bottom */
        );
    }
    @media (max-width: 500px) {
       clip-path: polygon(
          0 2%,
          /* left top */ 100% 0,
          /* right top */ 100% 98%,
          /* right bottom */ 0 100% /* left bottom */
        );
    }
`
const Heading = styled.div`
font-family: 'Poppins', sans-serif;
    font-weight: 400;
color: white;
    padding-top: 5rem;
    text-align:center ;
    font-size: 2rem;
`
const SkillsCont = styled.div`
    margin: 4rem auto;
    width: 50vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (max-width: 500px) {
        margin: 2rem auto;
    }
`