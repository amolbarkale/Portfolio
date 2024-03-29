import React from "react";
import styled from "styled-components";
import Project from "./Project";
import { v4 as uuid } from "uuid";

export default function Projects() {
  const projectData = [
    {
      id: "1",
      name: "CryptoControl",
      img: "crypto.png",
      gh: "https://github.com/amolbarkale/cryptocontrol",
      url: "https://amolbarkale.github.io/cryptocontrol/",
      desc: "A one stop crypto currency application developed with react, redux and rapidAPI's where we can track most of the crypto news, prices and many more things.",
      stack: "React, Redux, Ant Design, Chart.js",
    },
    {
      id: "2",
      name: "Shomissa",
      img: "SMA.png",
      gh: "https://github.com/amolbarkale/ShopmissA-project",
      url: "https://streamline-acp24.vercel.app/",
      desc: "A solo project developed in 5 days with user authentication for sign-up/sign-in page and password encryption in database.",
      stack: "HTML, CSS, JavaScript, Express, MongoDB",
    },
    {
      id: "3",
      name: "FAASOS - clone",
      img: "faasos.png",
      gh: "https://github.com/amolbarkale/Faasosdotcom",
      url: "https://faasosclone.netlify.app/",
      desc: "A fast food hotelwebsite, used for booking online food. In this collaborative project we tried to develop smooth user experience same as original website, along with 2 team members in 10 days.",
      stack: "HTML, CSS, JavaScript",
    },
    {
      id: "4",
      name: "Flipkart - clone",
      img: "FK.png",
      gh: "https://github.com/gsunil1996/flipkart_updated",
      url: "https://linkedin-clone-sigma.vercel.app/",
      desc: "Flipkart clone s a collaborative project of four people where we developed functionalities in 6 days.",
      stack: "HTML, CSS, Javascript",
    },

    //     { id: "5", name: "Internshala - clone", img: "internshala2.png", gh:"https://github.com/Deependra-Negi/internshala_project", url:"https://pulkit0111.github.io/internshala_project/", desc: "An online internship and training platform. A collaborative project, developed along with 3 team members in 10 days.", stack:"HTML, CSS, JavaScript"}
  ];

  return (
    <Cont id="projects" key={uuid()}>
      <Heading>Projects</Heading>
      <ProjectsCont>
        <Project data={projectData} />
      </ProjectsCont>
    </Cont>
  );
}

const Cont = styled.div`
  box-sizing: border-box;
  background-color: rgb(176, 196, 219);
  margin-top: -105px;
  margin-bottom: -100px;
  padding-bottom: 14vw;
  height: auto;
  clip-path: polygon(
    0 2%,
    /* left top */ 100% 0,
    /* right top */ 100% 98%,
    /* right bottom */ 0 100% /* left bottom */
  );

  @media (max-width: 500px) {
    margin-bottom: -120px;
    padding-bottom: 6vw;
    clip-path: polygon(
      0 2%,
      /* left top */ 100% 0,
      /* right top */ 100% 98%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }

  @media (max-width: 768px) {
    clip-path: polygon(
      0 2%,
      /* left top */ 100% 0,
      /* right top */ 100% 98%,
      /* right bottom */ 0 100% /* left bottom */
    );
  }

  @media only screen and (min-width: 501px) and (max-width: 800px) {
    margin-top: -150px;
  }

  @media only screen and (min-width: 768px) and (max-width: 801px) {
    margin-bottom: -125px;
  }

  @media (max-width: 1264px) {
    clip-path: polygon(
      0 2%,
      /* left top */ 100% 0,
      /* right top */ 100% 98%,
      /* right bottom */ 0 100% /* left bottom */
    );
  } ;
`;
const Heading = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: black;
  padding-top: 5rem;
  text-align: center;
  font-size: 2rem;
`;
const ProjectsCont = styled.div`
  margin: 5rem auto 0;
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 1264px) {
    margin: 2rem auto 0;
    width: 80vw;
  }
  @media (max-width: 768px) {
    margin: 2rem auto 0;
    width: 90vw;
    padding-bottom: 3rem;
  }
  @media (max-width: 500px) {
    margin: auto;
    width: 90vw;
    padding-bottom: 3rem;
    font-size: 14px;
  }
`;
